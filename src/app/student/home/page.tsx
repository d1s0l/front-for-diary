"use client";

import { useState } from "react";
import Profile  from "@/components/layout/ui/Profile";
import { ChevronLeft, ChevronRight, HomeIcon } from "lucide-react";
import { Schedule } from "@/components/layout/ui/Schedules/ScheduleForHomePage";
import { scheduleData } from '@/data/schedule-data'
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
        <header className="flex justify-between mb-10">
            <IconTextElement icon={HomeIcon} text='Главная'/>
            <Profile />
        </header>
  
        <section className="flex flex-col lg:flex-row justify-around items-center mb-5 gap-6">
            <img className="hidden lg:block" src="/card.png" alt="График успеваемости" />
            <div className="flex flex-col gap-5 w-full lg:w-2/3">
                <h2 className="text-violet-700 font-semibold text-2xl lg:text-3xl text-center lg:text-left">
                    Добрый день, {userData.firstName}!
                </h2>
                <p className="text-neutral-900 font-normal text-lg lg:text-xl text-center lg:text-left">
                    Общий уровень успеваемости в текущем месяце выше, чем в декабре. Так держать!
                </p>
            </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6 mb-10">
            <article className="bg-stone-50 px-6 py-4 rounded-2xl shadow-sm">
                <div className="flex flex-wrap justify-between items-center mb-4">
                    <h2 className="font-semibold text-neutral-900 text-2xl">Заметки</h2>
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

                <ul className="space-y-2">
                    {notes.map((note) => (
                    <li key={note.id}>
                        <NoteItem
                        id={note.id}
                        label={note.label}
                        checked={note.checked}
                        onToggle={toggleNote}
                        />
                    </li>
                    ))}
                </ul>
            </article>

            <article className="flex flex-col items-center justify-between bg-stone-50 px-6 pb-14 pt-4 rounded-2xl shadow-sm h-full min-h-[300px]">
                <h2 className="text-xl text-blue-500">Средний балл</h2>
                <ScoreCircle score={1.20} size={150} />
            </article>

            <article className="flex flex-col items-center justify-between bg-stone-50 px-6 pb-14 pt-4 rounded-2xl shadow-sm h-full min-h-[300px]">
                <h2 className="text-xl text-blue-500">Посещаемость</h2>
                <PercentageCircle percentage={35} size={150} />
            </article>
        </section>
        
        <section>
            <div className="flex flex-row justify-between mb-4">
                <h2 className="text-2xl text-violet-900 font-semibold">Расписание</h2>
                <nav className="flex flex-row gap-2.5">
                    <a href="/student/schedule"
                    className="text-base text-violet-500 flex items-center"
                    >
                        <ChevronLeft /> Показать всё <ChevronRight />
                    </a>
                </nav>
            </div>
            <div>
                <Schedule data={scheduleData} />
            </div>
        </section>

    </div>
  );
};

export default HomePage;