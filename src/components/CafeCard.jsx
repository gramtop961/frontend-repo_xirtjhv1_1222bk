import React from 'react';
import { Star, MapPin } from 'lucide-react';

function CafeCard({ cafe }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="h-36 w-full bg-gradient-to-tr from-amber-200 via-rose-200 to-orange-200" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold leading-tight">{cafe.name}</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><Star size={16} className="text-amber-500" />{cafe.rating.toFixed(1)}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1"><MapPin size={14} />{cafe.distance} km</span>
            </div>
          </div>
          <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700">{cafe.vibe}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {cafe.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-50 border text-gray-700">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CafeCard;
