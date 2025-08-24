import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Wrench, CircuitBoard, Code2, Zap, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";

// Tailwind is available by default. No import needed.
// All shadcn/ui libs are available if you want to extend, but this file is fully self‑contained.

// Color system (accessible):
// Primary: indigo-600
// Accent: amber-400
// Background: slate-900 → slate-950 gradient
// Text: slate-100/300

export default function CodeAndWireLabSite() {
  const features = [
    {
      icon: <CircuitBoard className="h-6 w-6" />, title: "Mini & Major Projects",
      desc: "Ready-to-demo builds tailored for ECE, EEE, EIE, and IoT branches."
    },
    {
      icon: <Cpu className="h-6 w-6" />, title: "Embedded & Arduino",
      desc: "ESP32/ESP8266, Arduino, STM32, sensors, actuators, DFPlayer, GSM, GPS, and more."
    },
    {
      icon: <Layers className="h-6 w-6" />, title: "Custom Solutions",
      desc: "Unique concepts built from scratch—hardware, firmware, and enclosure guidance."
    },
    {
      icon: <Code2 className="h-6 w-6" />, title: "Code + Docs",
      desc: "Clean code, commenting, block diagrams, abstracts, and presentation support."
    },
  ];

  const pillars = [
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Reliable", text: "Thoroughly tested with checklists and demo videos." },
    { icon: <Zap className="h-6 w-6" />, title: "Fast", text: "Rapid prototyping with proven libraries and parts." },
    { icon: <Wrench className="h-6 w-6" />, title: "Support", text: "Help on assembly, viva questions, and troubleshooting." },
  ];

  const faqs = [
    {
      q: "Do you handle both mini and major projects?",
      a: "Yes—scoped roadmaps for mini (2–4 weeks) and major (6–12 weeks) builds with milestones."
    },
    {
      q: "Can you customize a project to my college problem statement?",
      a: "Absolutely. Share your brief and we’ll propose architecture, parts list, and timeline."
    },
    {
      q: "Will I get help with documentation and presentation?",
      a: "Yes. You’ll receive abstracts, block diagrams, flowcharts, and a slide deck template."
    },
    {
      q: "What domains do you cover?",
      a: "IoT, embedded systems, sensors/actuators, automation, wearables, energy, and more."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Head-like meta (for frameworks that inject into <head>) */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Code & Wire Lab – Mini & Major electronics projects for ECE/EEE/EIE/IoT. Custom builds, Arduino/ESP, documentation, and presentation support." />
      <meta property="og:title" content="Code & Wire Lab" />
      <meta property="og:description" content="Projects • Custom Builds • Arduino & IoT • Documentation" />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-white/5">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-900 font-bold">CW</span>
            <span className="text-lg">Code & Wire Lab</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[120vw] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Build Real <span className="text-amber-400">Electronics</span>. Ship Confident <span className="text-indigo-400">Code</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-prose">
              Mini & Major projects for <strong>ECE</strong>, <strong>EEE</strong>, <strong>EIE</strong>, and <strong>IoT</strong>. We craft hardware + firmware, provide clean documentation, and help you present it like a pro.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-indigo-600 px-5 py-3 font-medium hover:bg-indigo-500">Get a Quote</a>
              <a href="#projects" className="rounded-2xl border border-white/10 px-5 py-3 font-medium hover:border-white/30">View Sample Projects</a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by students across Hyderabad and beyond</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl bg-slate-800/40 ring-1 ring-white/10 p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <CircuitBoard className="h-8 w-8" />, label: "PCBs & Sensors" },
                  { icon: <Cpu className="h-8 w-8" />, label: "MCUs: ESP/Arduino" },
                  { icon: <Code2 className="h-8 w-8" />, label: "Clean Firmware" },
                  { icon: <Wrench className="h-8 w-8" />, label: "Assembly Help" },
                ].map((b, i) => (
                  <div key={i} className="rounded-2xl bg-slate-900/60 border border-white/5 p-4 flex flex-col items-start gap-3">
                    <div className="rounded-xl bg-indigo-600/20 p-2 text-indigo-300">{b.icon}</div>
                    <p className="text-sm text-slate-300">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">Pick what you need—end‑to‑end builds, code-only assistance, documentation, or presentation polish.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={i} className="group rounded-2xl border border-white/5 bg-slate-900/60 p-6 hover:bg-slate-900/90 transition shadow">
                <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-indigo-600/15 px-3 py-2 text-indigo-300">
                  {f.icon}
                  <span className="text-sm font-medium">{f.title}</span>
                </div>
                <p className="text-sm text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Brief", text: "Share your branch, timeline, and idea/problem statement." },
              { step: "2", title: "Plan", text: "We propose architecture, parts list, and milestones." },
              { step: "3", title: "Build", text: "Hardware assembly + firmware with regular updates." },
              { step: "4", title: "Present", text: "Docs, slides, viva prep, and final demo run." },
            ].map((s, i) => (
              <div key={i} className="relative rounded-2xl border border-white/5 bg-slate-900/60 p-6">
                <div className="absolute -top-3 left-6 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-bold text-slate-900">Step {s.step}</div>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
                <div className="inline-flex items-center gap-2 text-indigo-300">{p.icon}<span className="font-semibold">{p.title}</span></div>
                <p className="mt-2 text-sm text-slate-300">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Sample Projects</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">A peek at what you can build with us. Replace images with your own later.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Smart TDS Meter (ESP8266 + Blynk)", tag: "IoT • Sensors" },
              { title: "Women Safety Wearable (SIM800L + GPS)", tag: "Embedded • GSM/GPS" },
              { title: "Vertical Hydroponics Controller", tag: "Automation • LCD • Relays" },
              { title: "Visitor Counter (NodeMCU)", tag: "IoT • DFPlayer • Buzzer" },
              { title: "ESP‑NOW Mesh Telemetry", tag: "Wireless • ESP32" },
              { title: "Forest Fire WSN (Solar)", tag: "Energy • LoRa/NRF" },
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60">
                <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
                  <Cpu className="h-10 w-10 text-slate-400" />
                </div>
                <div className="p-5">
                  <div className="text-sm text-indigo-300">{card.tag}</div>
                  <h3 className="mt-1 font-semibold">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">FAQs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-white/5 bg-slate-900/60 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-300">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-3 text-slate-300 max-w-prose">Tell us your branch, deadline, and idea. We’ll reply with a quick plan and estimate.</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-slate-300"><Mail className="h-5 w-5 text-amber-400" /><a className="hover:underline" href="mailto:n08labs@gmail.com">n08labs@gmail.com</a></div>
                <div className="flex items-center gap-3 text-slate-300"><MapPin className="h-5 w-5 text-amber-400" /><span>Hyderabad, India • Remote nationwide</span></div>
              </div>

              <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-50/5 p-4 text-amber-200">
                We can also provide hands‑on training sessions upon request. (Optional, based on your needs.)
              </div>
            </div>

            <form action="mailto:n08labs@gmail.com" method="post" encType="text/plain" className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm">Name</span>
                  <input required className="rounded-xl bg-slate-950/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm">Email</span>
                  <input required type="email" className="rounded-xl bg-slate-950/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm">Branch / Topic</span>
                  <input className="rounded-xl bg-slate-950/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="ECE / EEE / EIE / IoT" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm">Message</span>
                  <textarea rows={5} className="rounded-xl bg-slate-950/50 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tell us what you want to build…" />
                </label>
                <button type="submit" className="mt-2 rounded-2xl bg-indigo-600 px-5 py-3 font-medium hover:bg-indigo-500">
                  Send Message
                </button>
                <p className="text-xs text-slate-400">By contacting us, you consent to receive email replies related to your inquiry.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-slate-900 font-bold">CW</span>
            <span>© {new Date().getFullYear()} Code & Wire Lab. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
