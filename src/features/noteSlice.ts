import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  notes: INotes[];
  newNote: INotes;
  search: string;
  isLoading: boolean;
}

const notes = {
  id: "",
  color: "",
  content: "",
  title: "",
  remainder: "",
};

const initialState: NotesState = {
  notes: [],
  newNote: notes,
  search: "",
  isLoading: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    createNote: (state, action: PayloadAction<INotes>) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );

      if (index !== -1) {
        state.notes[index] = action.payload;
      } else {
        state.notes.push(action.payload);
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<Partial<INotes>>) => {
      state.newNote = { ...state.newNote, ...action.payload };
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetNotes: (state) => {
      state.newNote = notes;
    },
  },
});

export const getFilteredNotes = (state: RootState) => {
  const { notes, search } = state.notes;

  if (!search) return notes;

  return notes.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
};

export const {
  updateNote,
  setIsLoading,
  setSearch,
  createNote,
  resetNotes,
  deleteNote,
} = notesSlice.actions;
export default notesSlice.reducer;
