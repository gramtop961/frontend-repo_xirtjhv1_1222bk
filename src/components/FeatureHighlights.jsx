import React from 'react';
import { Sparkles, SlidersHorizontal, MapPin } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Matches',
    desc: 'Tell us your vibe and we’ll find cafés you’ll love.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Smart Filters',
    desc: 'Cozy, Wi‑Fi, quiet, outdoor seating—dial in your perfect spot.',
  },
  {
    icon: MapPin,
    title: 'Location Aware',
    desc: 'Discover what’s nearby or plan ahead in any neighborhood.',
  },
];

function FeatureHighlights() {
  return (
    <section className="grid sm:grid-cols-3 gap-4">
      {features.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center mb-3">
            <Icon size={18} />
          </div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      ))}
    </section>
  );
}

export default FeatureHighlights;
