"use client";

import { getFilteredNotes } from "@/features/noteSlice";
import React from "react";
import { useSelector } from "react-redux";
import { NoteCard } from "./note-card";

export const NoteList = () => {
  const notes = useSelector(getFilteredNotes);
  console.log("🚀 ~ note-list.tsx:10 ~ NoteList ~ notes:", notes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.length > 0 ? (
        notes.map((note) => <NoteCard key={note.id} note={note} />)
      ) : (
        <p className="text-neutral-200 text-center col-span-full italic">
          No notes yet — add one!
        </p>
      )}
    </div>
  );
};
