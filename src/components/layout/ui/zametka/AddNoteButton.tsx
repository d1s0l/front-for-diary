"use client";

import { ChevronRight, Plus } from "lucide-react";

interface AddNoteButtonProps {
  onClick: () => void;
}

export const AddNoteButton = ({ onClick }: AddNoteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center font-semibold text-base gap-2.5 text-violet-500  hover:bg-stone-200 transition-colors p-1 rounded-lg"
    >
      <Plus className="w-6 h-6" />
      Добавить
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};