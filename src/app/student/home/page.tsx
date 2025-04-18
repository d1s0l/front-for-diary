"use client";

import { IconTextElement } from "@/components/layout/ui/Header";
import Profile from "@/components/layout/ui/Profile";
import { HomeIcon } from "lucide-react";
import { useState } from "react";
import { AddNoteButton } from "@/components/layout/ui/zametka/AddNoteButton";
import { NoteInput } from "@/components/layout/ui/zametka/NoteInput";
import { NoteItem } from "@/components/layout/ui/zametka/NoteItem";
import { ScoreCircle } from "@/components/layout/ui/ScoreCircle";

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
            <IconTextElement
            icon={HomeIcon}
            text='Главная'/>
            <Profile />
        </div>
      
        <div className="flex flex-row justify-around items-center mb-5">
            <img className="hidden sm:block" src="/card.png" alt="Статистика" />
            <div className="flex flex-col gap-5 mb-7">
                <span className="text-violet-900 font-semibold text-3xl">Добрый день, {userData.firstName}!</span>
                <span className="text-neutral-900 font-normal text-xl">Общий уровень успеваемости в текущем месяце выше, чем в декабре. Так держать!</span>
            </div>
        </div>

        <div className="grid">
            //Первая карточка с заметками
            <div className=" bg-stone-50 px-6 py-4 rounded-lg shadow-sm">
                <div className="flex flex-row flex-wrap justify-between items-center mb-3">
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
            //Вторая карточка со средней оценкой 
            <div className="flex flex-col items-center bg-stone-50 ">
                    <span className="text-2xl text-blue-500">Средний бал</span>
                    <div>
                        <ScoreCircle score={4.8} />
                    </div>
            </div>           


        </div>
    </div>
  );
};

export default HomePage;