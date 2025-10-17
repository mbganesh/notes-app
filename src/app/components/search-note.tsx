"use client";
import { setSearch } from "@/features/noteSlice";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const SearchNote = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.notes);

  const handleSearch = (e: any) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-full sm:w-2/3">
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          placeholder="Search notes..."
          className="w-full pl-10 pr-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-full placeholder-gray-400 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>
    </div>
  );
};
