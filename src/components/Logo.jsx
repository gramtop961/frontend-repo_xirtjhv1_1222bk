import React from 'react';

function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 shadow-lg" />
      <div className="leading-tight">
        <p className="text-xl font-bold tracking-tight">Kafumi</p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">The Essence of Every Cafe</p>
      </div>
    </div>
  );
}

export default Logo;
