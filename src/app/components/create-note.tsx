"use client";

import { createNote, resetNotes, updateNote } from "@/features/noteSlice";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateColor, generateId } from "../utils/functions";

export const CreateNote = () => {
  const dispatch = useDispatch();

  const { newNote } = useSelector((state: RootState) => state.notes);

  const handleAddNote = async () => {
    const color = newNote?.color ? newNote?.color : generateColor();
    const id = newNote?.id ? newNote?.id : generateId();

    dispatch(createNote({ ...newNote, color, id }));
    dispatch(resetNotes());
  };

  const handleEdit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateNote({ [name]: value }));
  };

  return (
    <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-700">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Note title"
          onChange={handleEdit}
          autoComplete="off"
          value={newNote.title}
          className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 mb-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <textarea
          autoComplete="off"
          name="content"
          placeholder="Write something..."
          onChange={handleEdit}
          rows={3}
          value={newNote.content}
          className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 mb-4 h-24 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <button
          type="submit"
          onClick={handleAddNote}
          disabled={!(newNote.title && newNote.content)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all"
        >
          {newNote?.id ? "Update Note" : "Add Note"}
        </button>
      </div>
    </div>
  );
};
