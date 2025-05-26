// components/Background.tsx
"use client";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Primary subtle orb - top right */}
            <div className="absolute -top-32 -right-16 w-72 h-72 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] 
                         bg-gradient-to-br from-gray-200/30 via-slate-200/20 to-gray-100/25 
                         dark:from-gray-700/15 dark:via-slate-700/10 dark:to-gray-600/12
                         rounded-full blur-3xl 
                         animate-pulse [animation-duration:12s]
                         transform transition-transform duration-[4000ms]"></div>

            {/* Secondary subtle orb - top left */}
            <div className="absolute -top-16 -left-32 sm:-left-24 md:-left-16 lg:-left-8 xl:left-4 2xl:left-12
                         w-80 h-80 sm:w-96 sm:h-96 lg:w-[36rem] lg:h-[36rem] xl:w-[44rem] xl:h-[44rem]
                         bg-gradient-to-br from-blue-100/25 via-indigo-100/15 to-slate-100/20
                         dark:from-blue-900/12 dark:via-indigo-900/8 dark:to-slate-800/10
                         rounded-full blur-3xl 
                         animate-pulse [animation-duration:16s] [animation-delay:2s]
                         transform transition-transform duration-[4000ms]"></div>

            {/* Tertiary accent - very subtle */}
            <div className="absolute top-1/2 -right-20 sm:-right-12 lg:right-0
                         w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem]
                         bg-gradient-to-br from-neutral-200/20 via-gray-200/15 to-stone-100/18
                         dark:from-neutral-800/10 dark:via-gray-800/8 dark:to-stone-800/12
                         rounded-full blur-3xl 
                         animate-pulse [animation-duration:20s] [animation-delay:4s]"></div>

            {/* Noise texture overlay for depth */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}></div>

            {/* Minimal dot pattern */}
            <div className="absolute inset-0 opacity-[0.008] dark:opacity-[0.015]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
        </div>
    );
}
