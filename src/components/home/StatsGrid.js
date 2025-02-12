"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 98, symbol: "%", label: "Client Retention Rate" },
  { value: 5, symbol: "k+", label: "Professionals Placed" },
  { value: 24, symbol: "h", label: "Avg. Placement Time" },
  { value: 500, symbol: "+", label: "Global Clients Served" },
];

function useCountUp(value) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end) * 2;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return count;
}

export default function StatsGrid() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value);
            return (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold mb-4">
                  {count}
                  {stat.symbol}
                </div>
                <div className="text-gray-200 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
