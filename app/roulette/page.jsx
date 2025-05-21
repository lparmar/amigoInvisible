"use client";
import { useState } from "react";

const options = ["🍕 YO", "🍔 YO", "🍣 YO", "🌮 YO", "🍩 YO", "🍦 YO"];

export default function RuletaFix() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    const totalOptions = options.length;
    const extraSpins = 5;
    const randDeg = Math.floor(Math.random() * 360);
    const totalRotation = rotation + extraSpins * 360 + randDeg;

    setRotation(totalRotation);
    setSpinning(true);
    setResult(null);

    setTimeout(() => {
      const finalDeg = (360 - (totalRotation % 360)) % 360;
      const segmentAngle = 360 / totalOptions;
      const index = Math.floor(finalDeg / segmentAngle);
      setResult(options[index]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-lime-100">
      <div className="relative w-64 h-64">
        <div
          className="absolute w-full h-full rounded-full border-[6px] border-gray-800 transition-transform duration-[4s] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {options.map((opt, i) => {
            const angle = (360 / options.length);
            return (
              <div
                key={i}
                className="absolute w-full h-full flex items-center justify-start"
                style={{
                  transform: `rotate(${i * angle}deg)`,
                }}
              >
                <div
                  className="w-1/2 h-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    backgroundColor: `hsl(${i * 360 / options.length}, 80%, 60%)`,
                    transform: `skewY(${90 - angle}deg) rotate(${angle / 2}deg)`,
                    transformOrigin: '100% 50%',
                    clipPath: "polygon(15% 0, 50% 24%, 100% 50%, 0% 100%)"
                  }}
                >
                  {opt}
                </div>
              </div>
            );
          })}
        </div>

        {/* Flecha */}
        <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-600"></div>
        </div>
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning}
        className="mt-8 bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-green-700 transition disabled:opacity-50"
      >
        {spinning ? "Girando..." : "Girar"}
      </button>

      {result && !spinning && (
        <div className="mt-4 text-xl text-gray-800 font-bold">🎉 Resultado: {result}</div>
      )}
    </div>
  );
}
