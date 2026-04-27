
'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Search, FileText, Target, TrendingUp, CheckCircle, ChevronDown } from 'lucide-react';
// import type { Metadata } from 'next';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalendlyButton from '@/components/CalendlyButton';
import BookingButton from '@/components/CalendlyButton';

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const dur = 1400;
    const fps = 60;
    const steps = (dur / 1000) * fps;
    let frame = 0;
    const tick = () => {
      frame++;
      const progress = Math.min(frame / steps, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end]);
  return <>{val.toLocaleString()}{suffix}</>;
}

// ─── Pulsing live dot ─────────────────────────────────────────────────────────
function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
    </span>
  );
}

// ─── Dashboard mockup (hero) ──────────────────────────────────────────────────
const RANKINGS = [
  { rank: 1, name: 'HubSpot',  score: 85, delta: '+3', color: '#6366f1' },
  { rank: 2, name: 'Attio',    score: 85, delta: '+1', color: '#8b5cf6' },
  { rank: 3, name: 'Close',    score: 85, delta: '—',  color: '#a78bfa' },
  { rank: 4, name: 'Monday',   score: 80, delta: '-1', color: '#c4b5fd' },
];
const BARS = [38, 55, 42, 71, 58, 82, 67, 91];

function HeroDashboard() {
  const [hoverBar, setHoverBar] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-white/10 blur-3xl pointer-events-none" />
      <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.25)] border border-white/25 backdrop-blur-xl bg-white/10">

        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/15 bg-black/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex-1 mx-3 rounded-md bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-mono text-white/55 flex items-center gap-2">
            <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            visble.ai/dashboard
          </div>
          <div className="flex items-center gap-1.5">
            <LiveDot />
            <span className="text-[10px] text-white/45">Live</span>
          </div>
        </div>

        <div className="p-5 space-y-3">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 mb-0.5">Rankings</p>
              <p className="text-sm font-semibold text-white/90">Comparison with Competitors</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/25">
              ↑ 4 / 14
            </span>
          </div>

          {/* Rankings */}
          <div className="space-y-2">
            {RANKINGS.map((item, i) => (
              <div
                key={item.rank}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200"
                style={{
                  background: i === 3 ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.08)',
                  borderColor: i === 3 ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.1)',
                }}
              >
                <span className="w-4 text-xs font-bold text-white/30">{item.rank}</span>
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${item.color}cc, ${item.color}80)` }}
                >
                  {item.name[0]}
                </div>
                <span className="flex-1 text-sm font-semibold text-white/90 truncate">{item.name}</span>
                <div className="text-right mr-2">
                  <div className="text-[10px] text-white/35 leading-none mb-0.5">Visibility</div>
                  <div className="text-sm font-bold text-white">{item.score}%</div>
                </div>
                <span
                  className="text-xs font-bold w-8 text-right"
                  style={{
                    color: item.delta.startsWith('+') ? '#4ade80'
                         : item.delta === '—' ? 'rgba(255,255,255,0.25)'
                         : '#f87171',
                  }}
                >
                  {item.delta}
                </span>
              </div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div className="rounded-xl bg-black/15 border border-white/8 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-medium text-white/35 uppercase tracking-widest">7-day trend</span>
              <span className="text-xs font-bold text-emerald-300">+18.4%</span>
            </div>
            <div className="flex items-end gap-1.5 h-12">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all duration-150 cursor-pointer"
                  style={{
                    height: `${h}%`,
                    background: hoverBar === i
                      ? 'rgba(255,255,255,0.9)'
                      : i === BARS.length - 1
                        ? 'rgba(255,255,255,0.7)'
                        : 'rgba(255,255,255,0.25)',
                  }}
                  onMouseEnter={() => setHoverBar(i)}
                  onMouseLeave={() => setHoverBar(null)}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {['M','T','W','T','F','S','S','T'].map((d, i) => (
                <span key={i} className="flex-1 text-center text-[9px] text-white/20">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="absolute -left-12 top-1/4 bg-white rounded-2xl shadow-2xl px-3.5 py-2.5 border border-purple-100"
        style={{ animation: 'floatY 3s ease-in-out infinite' }}
      >
        <p className="text-[10px] text-gray-400 mb-0.5 font-medium">Mentions today</p>
        <p className="text-xl font-black text-gray-900 leading-none">1,247</p>
      </div>
      <div
        className="absolute -right-10 bottom-1/4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl px-3.5 py-2.5"
        style={{ animation: 'floatY 3s ease-in-out infinite 1.4s' }}
      >
        <p className="text-[10px] text-white/70 mb-0.5 font-medium">AI Score</p>
        <p className="text-xl font-black leading-none">89%</p>
      </div>
    </div>
  );
}

// export const metadata: Metadata = {
//   title: 'GEO Analysis Tool - Track AI Search Visibility | Visble',
//   description: 'Monitor your brand mentions across ChatGPT, Perplexity, Gemini, and other AI engines. Track visibility, analyze content performance, and optimize for AI search.',
// };

export default function GeoAnalysisPage() {
  return (
    <>
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hw { animation: fadeSlideUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .hw:nth-child(1)  { animation-delay: 0.04s; }
        .hw:nth-child(2)  { animation-delay: 0.10s; }
        .hw:nth-child(3)  { animation-delay: 0.16s; }
        .hw:nth-child(4)  { animation-delay: 0.22s; }
        .hw:nth-child(5)  { animation-delay: 0.28s; }
        .hw:nth-child(6)  { animation-delay: 0.34s; }
        .hw:nth-child(7)  { animation-delay: 0.40s; }
        .hw:nth-child(8)  { animation-delay: 0.46s; }
        .hero-sub   { animation: fadeSlideUp 0.6s cubic-bezier(.22,1,.36,1) 0.52s both; }
        .hero-stats { animation: fadeSlideUp 0.6s cubic-bezier(.22,1,.36,1) 0.62s both; }
        .hero-ctas  { animation: fadeSlideUp 0.6s cubic-bezier(.22,1,.36,1) 0.72s both; }
        .hero-trust { animation: fadeSlideUp 0.6s cubic-bezier(.22,1,.36,1) 0.82s both; }
        .hero-right { animation: fadeSlideUp 0.7s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .mesh-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="min-h-screen bg-white">
        <Header />

        {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
        <section className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 text-white pt-32 pb-28 overflow-hidden">
          {/* Background layers */}
          <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-purple-400/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-blue-400/20 blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute inset-0 mesh-grid pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left */}
              <div className="max-w-xl">
                {/* Eyebrow */}
                <div
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-7 border border-white/25"
                  style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(.22,1,.36,1) both' }}
                >
                  <BarChart3 className="w-4 h-4" />
                  GEO Analysis Platform
                  <LiveDot />
                </div>

                {/* Headline with word-by-word reveal */}
                <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold bricolage leading-[1.08] mb-6 text-white">
                  {'Analyse How AI Knows Your Brand'.split(' ').map((w, i) => (
                    <span key={i} className="hw inline-block mr-[0.22em]">{w}</span>
                  ))}
                </h1>

                {/* Sub */}
                <p className="hero-sub text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  Track & improve AI visibility, citation frequency, sentiment and prompt coverage across{' '}
                  <span className="font-semibold text-white underline decoration-white/30 underline-offset-2">ChatGPT</span>,{' '}
                  <span className="font-semibold text-white underline decoration-white/30 underline-offset-2">Perplexity</span>,{' '}
                  <span className="font-semibold text-white underline decoration-white/30 underline-offset-2">Gemini</span>,{' '}
                  and every major AI platform.
                </p>

                {/* Stats strip */}
                <div
                  className="hero-stats flex flex-wrap gap-x-8 gap-y-4 mb-8 pb-8"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}
                >
                  {[
                    { val: 10,   suffix: '+', label: 'AI engines tracked' },
                    { val: 50000, suffix: '+',  label: 'Queries Tracked' },
                    { val: 1,   suffix: 'M', label: 'Web Sources Covered' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-black text-white leading-none mb-0.5 bricolage">
                        <Counter end={s.val} suffix={s.suffix} />
                      </div>
                      <div className="text-xs text-white/50 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="hero-ctas flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://app.visble.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Get a 14-day Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                 <BookingButton variant="hero" />
                </div>
                {/* Trust indicators */}
                {/* <div className="hero-trust flex flex-wrap gap-5 text-sm text-white/65">
                  {['No credit card required', '14-day free trial', 'Cancel anytime'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                      {t}
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Right — Dashboard */}
              <div className="hidden lg:block hero-right">
                <HeroDashboard />
              </div>
            </div>

            {/* AI engine marquee */}
            {/* <div className="mt-16 pt-8 border-t border-white/15 overflow-hidden">
              <p className="text-center text-[10px] font-semibold tracking-[0.18em] uppercase text-white/35 mb-5">
                Tracking visibility across every AI engine
              </p>
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple-600/70 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-600/70 to-transparent z-10 pointer-events-none" />
                <div className="marquee-track">
                  {[...Array(2)].map((_, outer) => (
                    <div key={outer} className="flex items-center gap-4 px-4">
                      {[
                        { name: 'ChatGPT',    icon: '✦' },
                        { name: 'Perplexity', icon: '◈' },
                        { name: 'Gemini',     icon: '◇' },
                        { name: 'Claude',     icon: '◉' },
                        { name: 'Copilot',    icon: '⬡' },
                        { name: 'Grok',       icon: '✳' },
                        { name: 'Meta AI',    icon: '◎' },
                        { name: 'You.com',    icon: '◐' },
                      ].map((e) => (
                        <div
                          key={e.name}
                          className="flex items-center gap-2 shrink-0 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/20 hover:text-white transition-all"
                        >
                          <span className="text-white/35">{e.icon}</span>
                          {e.name}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/35">
            <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </section>

        {/* ═══════════════════════════ DASHBOARD SECTION ══════════════════════ */}
        <section id="dashboard" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
                GEO Analytics Dashboard for AI Search Visibility
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get a complete report of your AI search performance with real-time insights and actionable steps to become a source AI answers can’t resist
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                  <span className="text-white/90 text-sm font-medium">Visble GEO Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-xs">Last updated: 2 min ago</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="p-8">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: 'Source Mentions', value: '1,247', change: '+23%', icon: '📊' },
                    { label: 'AI Visibility Score', value: '89%', change: '+15%', icon: '👁️' },
                    { label: 'Citation Rate', value: '76%', change: '+12%', icon: '📝' },
                    { label: 'Brand Queries', value: '3,892', change: '+31%', icon: '🔍' },
                  ].map((metric, i) => (
                    <div key={i} className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all group">
                      <div className="absolute top-3 right-3 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                        {metric.icon}
                      </div>
                      <div className="text-sm text-gray-600 mb-2 font-medium">{metric.label}</div>
                      <div className="text-3xl font-bold bricolage text-gray-900 mb-2">{metric.value}</div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">{metric.change}</span>
                        <span className="text-xs text-gray-500 ml-1">vs last month</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  {/* Line Chart */}
                  <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Visibility Trend</h3>
                        <p className="text-sm text-gray-600">Last 30 days</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white rounded-lg text-xs font-medium text-gray-600 hover:bg-purple-100 transition-colors">7D</button>
                        <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-xs font-medium">30D</button>
                        <button className="px-3 py-1 bg-white rounded-lg text-xs font-medium text-gray-600 hover:bg-purple-100 transition-colors">90D</button>
                      </div>
                    </div>
                    <div className="relative h-48">
                      <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <line key={i} x1="0" y1={i * 37.5} x2="400" y2={i * 37.5} stroke="#e5e7eb" strokeWidth="1" />
                        ))}
                        <defs>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 120 L 50 100 L 100 110 L 150 80 L 200 90 L 250 60 L 300 70 L 350 40 L 400 50 L 400 150 L 0 150 Z" fill="url(#areaGradient)" />
                        <path d="M 0 120 L 50 100 L 100 110 L 150 80 L 200 90 L 250 60 L 300 70 L 350 40 L 400 50" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x, i) => {
                          const yValues = [120, 100, 110, 80, 90, 60, 70, 40, 50];
                          return <circle key={i} cx={x} cy={yValues[i]} r="4" fill="white" stroke="#8b5cf6" strokeWidth="2" />;
                        })}
                      </svg>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Engine Performance */}
                  <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">AI Engine Performance</h3>
                    <div className="space-y-4">
                      {[
                        { engine: 'ChatGPT',   score: 89, color: 'from-emerald-400 to-emerald-600', mentions: 1247 },
                        { engine: 'Perplexity', score: 76, color: 'from-blue-400 to-blue-600',    mentions: 894 },
                        { engine: 'Gemini',    score: 82, color: 'from-purple-400 to-purple-600', mentions: 1052 },
                        { engine: 'Claude',    score: 71, color: 'from-orange-400 to-orange-600', mentions: 623 },
                      ].map((item, i) => (
                        <div key={i} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                              <span className="text-sm font-semibold text-gray-900">{item.engine}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold text-purple-600">{item.score}%</span>
                              <span className="text-xs text-gray-500 ml-2">({item.mentions})</span>
                            </div>
                          </div>
                          <div className="relative bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 group-hover:opacity-80`} style={{ width: `${item.score}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Top Ranking Keywords</h3>
                      <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-600 font-medium">Live</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { keyword: 'AI search optimization',  position: 1, mentions: 247, trend: '+12%' },
                        { keyword: 'GEO strategy guide',       position: 2, mentions: 189, trend: '+8%' },
                        { keyword: 'ChatGPT visibility',       position: 3, mentions: 156, trend: '+15%' },
                        { keyword: 'AI content optimization',  position: 4, mentions: 134, trend: '+5%' },
                        { keyword: 'Perplexity ranking',       position: 5, mentions: 112, trend: '+18%' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-all group">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {item.position}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 truncate">{item.keyword}</div>
                            <div className="text-xs text-gray-500">{item.mentions} mentions</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-green-600">{item.trend}</span>
                            <TrendingUp className="w-3 h-3 text-green-600" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-600 mb-4">Citation Quality Score</h3>
                      <div className="relative w-32 h-32 mx-auto">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                          <circle cx="64" cy="64" r="56" stroke="url(#circleGradient)" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="70.37" strokeLinecap="round" />
                          <defs>
                            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold bricolage text-gray-900">80%</div>
                            <div className="text-xs text-gray-500">Excellent</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        {[
                          { action: 'New mention',    platform: 'ChatGPT',   time: '2m ago' },
                          { action: 'Citation added', platform: 'Perplexity', time: '15m ago' },
                          { action: 'Ranking up',     platform: 'Gemini',    time: '1h ago' },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-gray-900">{activity.action}</div>
                              <div className="text-xs text-gray-500">{activity.platform} · {activity.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════ FEATURES: LARGE SCALE ═══════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Target className="w-4 h-4" />
                  Large Scale Experiments
                </div>
                <h2 className="text-4xl font-bold bricolage text-gray-900 mb-6">Test Thousands of Prompts at Once</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Run large-scale prompt experiments across leading AI models to understand when, where, and why your brand appears in responses.
                </p>
                <ul className="space-y-4">
                  {[
                    'Test 10,000+ prompts across major AI platforms',
                    'Compare responses from ChatGPT, Gemini, and Perplexity',
                    'A/B test content variations to identify winning formats',
                    'Discover prompts where competitors outperform your brand',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
                <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-900">Experiment Results</span>
                    <span className="text-xs text-gray-500">10,000 prompts tested</span>
                  </div>
                  <div className="space-y-3">
                    {['ChatGPT-4: 847 mentions', 'Perplexity: 623 mentions', 'Gemini: 412 mentions', 'Claude: 389 mentions'].map((stat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full" style={{ width: `${85 - i * 15}%` }}></div>
                        </div>
                        <span className="text-sm text-gray-600 font-medium whitespace-nowrap">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { engine: 'ChatGPT',   score: 89, mentions: 1247 },
                      { engine: 'Perplexity', score: 76, mentions: 894 },
                      { engine: 'Gemini',    score: 82, mentions: 1052 },
                      { engine: 'Claude',    score: 71, mentions: 623 },
                    ].map((item, i) => (
                      <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-100">
                        <div className="text-sm font-semibold text-gray-900 mb-2">{item.engine}</div>
                        <div className="text-3xl font-bold bricolage text-purple-600 mb-1">{item.score}%</div>
                        <div className="text-xs text-gray-600">{item.mentions} mentions</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Search className="w-4 h-4" />
                  Track AI Visibility
                </div>
                <h2 className="text-4xl font-bold bricolage text-gray-900 mb-6">Monitor Your Brand Across Every AI Engine</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Track where and how your brand appears in AI-generated answers across the most influential generative search tools.
                </p>
                <ul className="space-y-4">
                  {[
                    'Monitor brand mentions across leading AI assistants',
                    'See which sources AI models cite most often',
                    'Track visibility trends across different queries',
                    'Identify competitors frequently recommended by AI',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FileText className="w-4 h-4" />
                  Content Analysis
                </div>
                <h2 className="text-4xl font-bold bricolage text-gray-900 mb-6">Optimize Content for AI Citations</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Understand what AI models prefer to cite and refine your content strategy to increase visibility in generated answers.
                </p>
                <ul className="space-y-4">
                  {[
                    'Identify content structures AI prefers citing',
                    'See why certain pages earn citations',
                    'Get actionable insights to improve brand visibility',
                    'Optimise pages to become trusted AI sources',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Content Performance Score</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Semantic Structure',    score: 92 },
                    { label: 'Citation Formatting',   score: 85 },
                    { label: 'Content Freshness',     score: 78 },
                    { label: 'Entity Coverage',       score: 88 },
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className="text-sm font-bold text-purple-600">{metric.score}%</span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all" style={{ width: `${metric.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">Client Success with GEO Analytics Tool</h2>
              <p className="text-xl text-gray-600">Here’s what businesses achieved using GEO analytics insights</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { company: 'Acredge',   industry: 'EdTech',      result: '100+ Source Mentions', metric: '850% AI Visibility', description: 'Went from 0 to 100+ mentions in 60 days using GEO tracking and content optimization.' },
                { company: 'Flyhomes',  industry: 'Real Estate', result: '512% Growth',          metric: 'Top 3 Position',     description: 'Jumped from 17th to 3rd position in AI citations across all major engines.' },
                { company: 'DGFT Guru', industry: 'Compliance',  result: '80% Visibility',       metric: '400% Recovery',      description: 'Recovered from visibility drop and exceeded previous peak performance.' },
              ].map((study, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition-all flex flex-col">
                  <div className="text-sm font-semibold text-purple-600 mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">{study.company}</h3>
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-100">
                      <div className="text-xs text-gray-500 mb-1 font-medium">Result</div>
                      <div className="text-xl font-bold bricolage text-purple-600">{study.result}</div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="text-xs text-gray-500 mb-1 font-medium">Growth</div>
                      <div className="text-xl font-bold bricolage text-blue-600">{study.metric}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{study.description}</p>
                  <Link href="/case-studies" className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-1 mt-auto">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════ CTA SECTION ═══════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-4xl font-bold bricolage mb-4">Get Mentioned in AI Answers</h2>
              <p className="text-xl mb-8 opacity-90">Track your brand’s performance, identify visibility gaps across LLMs, and optimise content to build authority.</p>
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                Start GEO Analysis
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold bricolage text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Why should I invest in GEO if I’m already ranking #1 on Google?',
                  a: "Ranking #1 on SERPs no longer guarantees traffic. With 65% of searches ending without a click, AI models like ChatGPT and Perplexity are summarising information directly for the user. If these models aren't citing your brand as a source, you are effectively invisible to the millions of users who never make it to a search results page."
                },
                {
                  q: 'Can this tool help me get better visibility than bigger competitors?',
                  a: "Absolutely. AI engines don't always cite the biggest brand; they cite the most authoritative and well-structured content. Our GEO analytics tool identifies exactly where competitors are being recommended over you, allowing you to strategise and optimise your content to take their spot in AI-generated answers."
                },
                {
                  q: 'How long does it take to see an increase in AI citations?',
                  a: "Unlike traditional SEO, which can take months, AI models that use 'Real-Time Web' (like Perplexity and Gemini) can pick up optimised content in days. By using our dashboard to identify citation gaps, you can make immediate structural changes to your content and see results in the next AI crawl."
                },
                {
                  q: 'Is there a way to track the "Sentiment" of how AI talks about my brand?',
                  a: "Yes. It’s not just about being mentioned; it’s about how you are mentioned. Our tool monitors the sentiment and context of AI responses. If an AI model is hallucinating or providing outdated information about your products, our analytics flag it so you can update your digital footprint and correct the narrative."
                },
                {
                  q: 'How do you track 10,000+ prompts at once without manual searching?',
                  a: "Our tool uses an automated API-driven simulation that runs your selected prompts across multiple AI models simultaneously. This allows you to see a 'Share of Voice' report across thousands of different natural-language queries without ever opening a chat window."
                },
                {
                  q: 'Is this a "one-and-done" setup or an ongoing process?',
                  a: (
                    <>
                      <p className="mb-4">
                        GEO is a continuous cycle. AI models update their training data and retrieval algorithms frequently. Our tool helps you move through a 4-step recurring process:
                      </p>

                      <ul className="space-y-3 pl-5 list-disc">
                        <li><span className="font-semibold text-gray-900">Audit:</span> See where you’re currently missing.</li>
                        <li><span className="font-semibold text-gray-900">Optimise:</span> Structure your content for AI readability.</li>
                        <li><span className="font-semibold text-gray-900">Track:</span> Monitor if the AI picks up the changes.</li>
                        <li><span className="font-semibold text-gray-900">Refine:</span> Adjust based on how competitors react.</li>
                      </ul>
                    </>
                  )
                },
                ].map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white rounded-lg shadow-sm border border-purple-100 p-6 group"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                    </summary>

                    <div className="mt-4 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
                </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}