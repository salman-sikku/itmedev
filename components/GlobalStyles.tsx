// components/GlobalStyles.tsx
"use client";

export default function GlobalStyles() {
    return (
        <style jsx global>{`
          @keyframes breathe {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
            50% { transform: scale(1.05) rotate(0.5deg); opacity: 0.5; }
          }
          
          .animate-breathe {
            animation: breathe 8s ease-in-out infinite;
          }
        `}</style>
    );
}
