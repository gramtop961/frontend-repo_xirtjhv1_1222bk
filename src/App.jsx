import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FeatureHighlights from './components/FeatureHighlights';
import CafeCard from './components/CafeCard';

const SAMPLE_CAFES = [
  {
    id: '1',
    name: 'Velvet Bean Roasters',
    rating: 4.7,
    distance: 0.6,
    vibe: 'Cozy',
    tags: ['Wi‑Fi', 'Quiet corners', 'Specialty'],
  },
  {
    id: '2',
    name: 'Sunlit Terrace Café',
    rating: 4.5,
    distance: 1.2,
    vibe: 'Outdoor',
    tags: ['Brunch', 'Pet‑friendly', 'Terrace'],
  },
  {
    id: '3',
    name: 'Noir & Notes',
    rating: 4.8,
    distance: 2.1,
    vibe: 'Work‑friendly',
    tags: ['Fast Wi‑Fi', 'Power outlets', 'Calm'],
  },
];

function App() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_CAFES;
    return SAMPLE_CAFES.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q)) ||
      c.vibe.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="py-10 sm:py-14 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-gray-600 bg-white border rounded-full px-3 py-1 shadow-sm">
            The Essence of Every Cafe
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Find your perfect café match
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            AI-powered recommendations, smart filters, and personalized search—
            all in one beautiful, fast experience.
          </p>
          <div className="mt-6 max-w-2xl mx-auto">
            <SearchBar onSearch={setQuery} />
          </div>
        </section>

        {/* Features */}
        <section id="guided" className="py-4">
          <FeatureHighlights />
        </section>

        {/* Results */}
        <section id="discover" className="py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Nearby picks</h2>
            <p className="text-sm text-gray-600">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 py-10 text-center text-sm text-gray-600">
        <p>
          Built with care for café lovers. <span className="font-medium">Kafumi</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
