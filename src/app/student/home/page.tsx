"use client";

import { useState } from "react";
import Profile from "@/components/layout/ui/Profile";
import { HomeIcon } from "lucide-react";
import { IconTextElement } from "@/components/layout/ui/Header";
import { AddNoteButton } from "@/components/layout/ui/zametka/AddNoteButton";
import { NoteInput } from "@/components/layout/ui/zametka/NoteInput";
import { NoteItem } from "@/components/layout/ui/zametka/NoteItem";
import { ScoreCircle } from "@/components/layout/ui/diagramms/AvarageScore";
import { PercentageCircle } from "@/components/layout/ui/diagramms/AvarageAttendance"

interface UserName {
  firstName: string;
}

interface Note {
  id: string;
  label: string;
  checked: boolean;
}

const staticUserData: UserName = {
  firstName: 'Дмитрий',
};

const HomePage: React.FC = () => {
  const userData = staticUserData;
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', label: 'Написать изложение по русскому языку', checked: false }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');

  const handleAddNote = () => {
    if (newNoteText.trim()) {
      setNotes([...notes, {
        id: Date.now().toString(),
        label: newNoteText,
        checked: false
      }]);
      setNewNoteText('');
      setIsAdding(false);
    }
  };

  const toggleNote = (id: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, checked: !note.checked } : note
    ));
  };

  return (
    <div>
      <div className="flex justify-between mb-10">
        <IconTextElement icon={HomeIcon} text='Главная'/>
        <Profile />
      </div>
      
      <div className="flex flex-col lg:flex-row justify-around items-center mb-5 gap-6">
        <img className="hidden lg:block" src="/card.png" alt="Статистика" />
        <div className="flex flex-col gap-5 w-full lg:w-2/3">
          <span className="text-violet-900 font-semibold text-2xl lg:text-3xl text-center lg:text-left">
            Добрый день, {userData.firstName}!
          </span>
          <span className="text-neutral-900 font-normal text-lg lg:text-xl text-center lg:text-left">
            Общий уровень успеваемости в текущем месяце выше, чем в декабре. Так держать!
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6 mb-10">
            <div className="bg-stone-50 px-6 py-4 rounded-2xl shadow-sm">
                <div className="flex flex-wrap justify-between items-center mb-15.5">
                <span className="font-semibold text-neutral-900 text-2xl">Заметки</span>
                <AddNoteButton onClick={() => setIsAdding(true)} />
                </div>
                
                {isAdding && (
                <NoteInput
                    value={newNoteText}
                    onChange={setNewNoteText}
                    onAdd={handleAddNote}
                    onCancel={() => setIsAdding(false)}
                />
                )}

                <div className="space-y-2">
                {notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    label={note.label}
                    checked={note.checked}
                    onToggle={toggleNote}
                    />
                ))}
                </div>
            </div>

            <div className="flex flex-col items-center justify-between bg-stone-50 px-6 pb-14 pt-4 rounded-2xl shadow-sm h-full min-h-[300px]">
                <span className="text-xl text-blue-500">Средний балл</span>
                <ScoreCircle score={4.15} size={150} />
            </div> 

            <div className="flex flex-col items-center justify-between bg-stone-50 px-6 pb-14 pt-4 rounded-2xl shadow-sm h-full min-h-[300px]">
                <span className="text-xl text-blue-500">Посещаемость</span>
                <PercentageCircle percentage={85} size={150} />
            </div>        
        </div>
    </div>
  );
};

export default HomePage;