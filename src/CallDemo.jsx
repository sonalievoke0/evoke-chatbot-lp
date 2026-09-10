"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  ChevronsLeft,
  ChevronsRight,
  Headphones,
  Zap,
  ShieldCheck,
  Sparkles,
  Users,
  Clock,
  BarChart3,
  RotateCcw,
  RotateCw
} from "lucide-react";
// audioFile import removed — loaded from public folder via AUDIO_SRC

// Audio loaded from public folder to avoid bundling 9MB into JS
const AUDIO_SRC = "/ai-assistants/audio.mp3";

// Frequency bar distribution for natural waveform (48 bars)
const WAVEFORM_BARS = [
  12, 18, 28, 15, 35, 55, 40, 75, 90, 45, 60, 80,
  50, 95, 70, 85, 100, 60, 90, 75, 45, 80, 65, 50,
  70, 40, 85, 55, 30, 60, 45, 25, 65, 80, 45, 90,
  70, 35, 60, 40, 75, 50, 30, 45, 25, 35, 18, 12
];

export default function CallDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(295); // 04:55 fallback
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      return;
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
        });
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - 10);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(duration || 295, audioRef.current.currentTime + 10);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const updateTime = () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    };

    const updateDuration = () => {
      if (audioRef.current?.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    };

    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.addEventListener("timeupdate", updateTime);
      audioEl.addEventListener("loadedmetadata", updateDuration);
      audioEl.addEventListener("ended", handleEnded);

      if (audioEl.readyState > 0 && audioEl.duration && !isNaN(audioEl.duration)) {
        setDuration(audioEl.duration);
      }

      return () => {
        audioEl.removeEventListener("timeupdate", updateTime);
        audioEl.removeEventListener("loadedmetadata", updateDuration);
        audioEl.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === Infinity || timeInSeconds < 0) return "00:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="call-demo" className="relative w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-14 bg-neutral-100 text-black selection:bg-cyan-100 overflow-hidden border-t border-neutral-200/70">
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/ai-assistants/headphones.jpg"
          alt="AI Audio Interface"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-neutral-100/50" />
      </div>

      {/* Seamless Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1100px] xl:w-[1500px] h-[350px] sm:h-[500px] xl:h-[650px] bg-gradient-to-tr from-[#00d2ff]/12 via-[#34d399]/8 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] xl:w-[700px] h-[300px] sm:h-[500px] xl:h-[650px] bg-gradient-to-bl from-[#00d2ff]/8 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-[1650px] mx-auto relative z-10 space-y-8 sm:space-y-12">

        {/* Main Content Area */}
        <div className="flex flex-row gap-2 sm:gap-8 lg:gap-12 items-center w-full">

          {/* Left Side: Header and Audio Player */}
          <div className="w-[62%] sm:w-[60%] lg:w-1/2 space-y-4 sm:space-y-12 relative z-50">

            {/* Header Section */}
            <div className="space-y-1.5 sm:space-y-3.5 px-1 sm:px-2">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-full text-[9px] sm:text-xs font-bold text-black tracking-[0.2em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                <Sparkles className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 text-[#00d2ff]" />
                Live Preview
              </div>

              <h2 className="text-[22px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1]">
                Listen to{" "}
                <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
                  Call Demo
                </span>
              </h2>

              <p className="text-neutral-600 text-[11px] sm:text-base md:text-lg font-medium max-w-xl leading-relaxed">
                Experience our conversational AI in action. Click below to hear a real-time call demo.
              </p>

              {/* Capability Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 pt-2 sm:pt-6">
                {/* Card 1 */}
                <div className="bg-white/50 hover:bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-neutral-200/60 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-md">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-sm font-extrabold text-black leading-tight">Enterprise Ready</h4>
                    <p className="text-[9px] sm:text-xs text-neutral-600 font-medium mt-0.5 leading-tight">Scalable & secure</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/50 hover:bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-neutral-200/60 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-md">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-sm font-extrabold text-black leading-tight">24/7 Available</h4>
                    <p className="text-[9px] sm:text-xs text-neutral-600 font-medium mt-0.5 leading-tight">Always-on AI agents</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/50 hover:bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-neutral-200/60 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-md">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-sm font-extrabold text-black leading-tight">Zero Latency</h4>
                    <p className="text-[9px] sm:text-xs text-neutral-600 font-medium mt-0.5 leading-tight">Fast responses</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white/50 hover:bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-neutral-200/60 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-md">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-sm font-extrabold text-black leading-tight">High Perform</h4>
                    <p className="text-[9px] sm:text-xs text-neutral-600 font-medium mt-0.5 leading-tight">Handles 1000s calls</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Player Card */}
            <div className="bg-transparent rounded-xl sm:rounded-3xl p-1 sm:p-7 md:p-8 xl:p-10 shadow-none border-none outline-none ring-0 transition-all duration-500 flex flex-col justify-between space-y-3 sm:space-y-6">

              {/* Waveform, Scrubber, and Timestamps */}
              <div className="flex items-center gap-2 sm:gap-5 pt-1 sm:pt-2">
                <span className="text-[10px] sm:text-sm font-black text-black tabular-nums font-mono w-8 sm:w-12 text-right">
                  {formatTime(currentTime)}
                </span>

                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  {/* Animated Waveform Visualizer */}
                  <div className="h-8 sm:h-16 flex items-center justify-between gap-[1px] sm:gap-[3px] px-1 sm:px-1 overflow-hidden">
                    {WAVEFORM_BARS.map((barHeight, idx) => {
                      const barPercent = (idx / WAVEFORM_BARS.length) * 100;
                      const isPassed = barPercent <= progressPercent;

                      return (
                        <span
                          key={idx}
                          className={`w-[2px] sm:w-1.5 md:w-2 rounded-full transition-all duration-150 ease-out ${isPassed
                            ? "bg-gradient-to-t from-[#00d2ff] to-[#34d399] shadow-[0_0_8px_rgba(0,210,255,0.4)]"
                            : "bg-neutral-300"
                            }`}
                          style={{
                            height: isPlaying
                              ? `${Math.max(15, (barHeight * (0.7 + Math.random() * 0.3)))}%`
                              : `${Math.max(15, barHeight)}%`
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Scrubber Progress Slider */}
                  <div className="relative flex items-center group py-1 sm:py-2">
                    <div className="relative w-full h-1 sm:h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00d2ff] to-[#34d399] rounded-full pointer-events-none transition-all duration-150"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={duration || 295}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Audio progress scrubber"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    {/* Visual Thumb */}
                    <div
                      className="absolute h-2 w-2 sm:h-4 sm:w-4 bg-[#00d2ff] rounded-full shadow-[0_2px_8px_rgba(0,210,255,0.5)] pointer-events-none transform -translate-x-1/2 transition-transform group-hover:scale-125 z-10"
                      style={{ left: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <span className="text-[10px] sm:text-sm font-black text-black tabular-nums font-mono w-8 sm:w-12 text-left">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Controls Bar - Responsive Sizing for Small Displays */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-4 md:gap-6 pt-1 sm:pt-2 relative z-50">
                {/* 10s Rewind */}
                <button
                  onClick={skipBackward}
                  className="w-6 h-6 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-transparent hover:bg-neutral-100/80 text-black flex items-center justify-center transition-all duration-200 active:scale-95 group relative cursor-pointer"
                  aria-label="Rewind 10 seconds"
                >
                  <RotateCcw className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-neutral-400 hover:text-black transition-colors" />
                </button>

                {/* Skip Backward */}
                <button
                  onClick={skipBackward}
                  className="w-6 h-6 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-transparent hover:bg-neutral-100/80 text-black flex items-center justify-center transition-all duration-200 active:scale-95 group cursor-pointer"
                  aria-label="Previous track"
                >
                  <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black fill-black/80" />
                </button>

                {/* Center Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#34d399] text-black shadow-[0_6px_25px_rgba(0,210,255,0.45)] hover:shadow-[0_10px_32px_rgba(0,210,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer font-bold border-none outline-none ring-0 relative z-50"
                  aria-label={isPlaying ? "Pause audio demo" : "Play audio demo"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black fill-black" />
                  ) : (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
                  )}
                </button>

                {/* Skip Forward */}
                <button
                  onClick={skipForward}
                  className="w-6 h-6 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-transparent hover:bg-neutral-100/80 text-black flex items-center justify-center transition-all duration-200 active:scale-95 group cursor-pointer"
                  aria-label="Next track"
                >
                  <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black fill-black/80" />
                </button>

                {/* 10s Forward */}
                <button
                  onClick={skipForward}
                  className="w-6 h-6 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-transparent hover:bg-neutral-100/80 text-black flex items-center justify-center transition-all duration-200 active:scale-95 group relative cursor-pointer"
                  aria-label="Fast forward 10 seconds"
                >
                  <RotateCw className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-neutral-400 hover:text-black transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Demo Image */}
          <div className="w-[36%] sm:w-[38%] lg:w-1/2 relative flex items-center justify-end">
            <div className="relative w-full max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] transition-all duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/25 to-[#34d399]/25 blur-[100px] xl:blur-[120px] rounded-full pointer-events-none"></div>
              <img
                src="/ai-assistants/demo.webp"
                alt="Call Demo Interface"
                loading="lazy"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl floating-image rounded-2xl pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="none"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
          }
        }}
      />
    </section>
  );
}
