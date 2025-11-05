import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-3 bg-white border rounded-xl shadow-sm px-3 py-2">
      <Search className="text-gray-400" size={18} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search cafés, dishes, vibes..."
        className="flex-1 bg-transparent outline-none placeholder:text-gray-400 text-gray-800"
        aria-label="Search"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium px-3 py-2 hover:bg-black/90"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
