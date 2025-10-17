import React from "react";
import { NoteHeader } from "./note-header";
import { CreateNote } from "./create-note";
import { SearchNote } from "./search-note";
import { NoteList } from "./note-list";

export const NotesLanding = () => {
  return (
    <div className="min-h-screen bg-neutral-700 text-white px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <NoteHeader />
        <CreateNote />
        <SearchNote />
        <NoteList />
      </div>
    </div>
  );
};
