"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import { api } from "@/lib/api";

type Msg = { role: "bot" | "user"; text: string; followUps?: string[] };

const CHIPS = [
  "What services do you offer?",
  "How much does an app cost?",
  "Tell me about your AI agents",
  "Which regions do you serve?",
];

function sessionKey(): string {
  try {
    let k = sessionStorage.getItem("savo-chat-key");
    if (!k) {
      k = crypto.randomUUID();
      sessionStorage.setItem("savo-chat-key", k);
    }
    return k;
  } catch {
    return "anonymous";
  }
}

export default function AskSavo() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hello, I'm the Savo Assistant. Ask me anything about your project, our services, pricing or the regions we serve.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState<string[]>(CHIPS);
  const [value, setValue] = useState("");
  const [announce, setAnnounce] = useState("");
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, typing]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setValue("");
    setTyping(true);
    try {
      const res = await fetch(api("/api/chat"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, sessionKey: sessionKey() }),
      });
      const data = (await res.json()) as { answer: string; followUps?: string[] };
      // deliberate beat so the typing indicator reads as real thought, not a glitch
      await new Promise((r) => setTimeout(r, 700));
      setMessages((m) => [...m, { role: "bot", text: data.answer, followUps: data.followUps }]);
      setAnnounce(`Savo Assistant says: ${data.answer}`);
      if (data.followUps?.length) setChips(data.followUps);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "I couldn't reach the server just now. Please try again, or use the instant estimator below while I reconnect.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  return (
    <section className="section section-dark ask-section" id="ask-savo">
      <div className="wrap ask-grid">
        <div className="ask-copy">
          <Reveal>
            <h2>Ask Savo anything.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Questions about services, pricing, process or regions. The Savo Assistant answers
              instantly, in plain language. It is one of our own AI agents, powered by Savo
              Intelligence and trained on a decade of delivery knowledge.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <ul className="ask-points">
              <li>Instant answers on services, pricing ranges and timelines</li>
              <li>Guidance on which engagement model fits your project</li>
              <li>Branded as Savo, and your data never trains public models</li>
            </ul>
            <p className="ask-fine">
              Demo mode on this page: responses are representative. Full AI integration is wired
              during your build.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="chat-shell" role="region" aria-label="Ask Savo Anything chat">
            <div className="chat-head">
              <span className="chat-avatar" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="caG" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1D28FF" />
                      <stop offset="1" stopColor="#2BD926" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="28" height="28" rx="9" stroke="url(#caG)" strokeWidth="1.6" />
                  <path d="M22 10.5c-4.4-3.4-10.4-1.8-11.8 2.8-1 3.3.9 6.3 3.9 7.4" stroke="url(#caG)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="22" cy="10.5" r="2.2" fill="#1D28FF" />
                  <circle cx="14.2" cy="20.8" r="2.2" fill="#2BD926" />
                </svg>
              </span>
              <div>
                <p className="chat-name">Savo Assistant</p>
                <p className="chat-status">
                  <span className="live-dot" /> Online · Powered by Savo Intelligence
                </p>
              </div>
            </div>

            <div className="chat-log" id="chatLog" ref={logRef}>
              {/* announcements handled by the visually-hidden live region below so
                  interactive follow-up chips are never spoken as part of a message */}
              {messages.map((m, i) => (
                <div className={`msg msg-${m.role}`} key={i}>
                  <p>{m.text}</p>
                  {m.followUps && (
                    <div className="msg-followups">
                      {m.followUps.map((f) => (
                        <button key={f} className="chip" type="button" onClick={() => ask(f)}>
                          {f}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="msg msg-bot msg-typing" aria-label="Savo Assistant is typing">
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </div>

            <div className="chat-chips" id="chatChips" aria-label="Suggested questions">
              {chips.map((c) => (
                <button key={c} className="chip" type="button" onClick={() => ask(c)}>
                  {c}
                </button>
              ))}
            </div>

            <form
              className="chat-input"
              id="chatForm"
              onSubmit={(e) => {
                e.preventDefault();
                ask(value);
              }}
            >
              <label className="sr-only" htmlFor="chatField">
                Ask anything about your project or Savo Technologies
              </label>
              <input
                id="chatField"
                type="text"
                placeholder="Ask anything about your project or Savo Technologies…"
                autoComplete="off"
                maxLength={280}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="chat-send" type="submit" aria-label="Send message">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M3 10h13M11 4.5 16.5 10 11 15.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            <p className="sr-only" aria-live="polite" role="status">
              {announce}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
