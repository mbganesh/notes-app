import { deleteNote, updateNote } from "@/features/noteSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface INodeCardProps {
  note: INotes;
}

export const NoteCard = (props: INodeCardProps) => {
  const { note } = props;
  const { color, id, title, content } = note;
  const dispatch = useDispatch();

  const handlePreFillNote = (note: INotes) => {
    dispatch(updateNote(note));
  };

  const handleDeleteNote = (id: string) => {
    console.log("🚀 ~ note-card.tsx:19 ~ handleDeleteNote ~ id:", id);
    dispatch(deleteNote(id));
  };

  return (
    <div
      data-testid={id}
      className="relative group p-4 m-2 flex flex-col justify-between rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 text-black"
      style={{ backgroundColor: color }}
    >
      {/* Hover Actions */}
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePreFillNote(note);
          }}
          className="p-1 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-indigo-600 transition"
          title="Edit"
        >
          <p>✏️</p>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteNote(id);
          }}
          className="p-1 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 transition"
          title="Delete"
        >
          <p>❌</p>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h5 className="font-semibold text-gray-800 line-clamp-1">{title}</h5>
        <p className="text-sm text-gray-700 line-clamp-3 break-words">
          {content}
        </p>
      </div>
    </div>
  );
};
