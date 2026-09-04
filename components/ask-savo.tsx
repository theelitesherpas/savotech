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
                <svg viewBox="158 322 140 208" fill="#1D28FF">
                  <path d="M189.22 510.839C176.656 500.762 167.643 487.145 163.819 471.622L163 468.627L172.559 464.814C176.11 463.18 180.207 462.635 184.031 462.635C193.863 462.635 202.876 467.265 208.885 475.163C209.977 476.524 211.07 477.614 212.162 478.703C217.352 483.605 224.18 486.328 231.554 486.328C237.563 486.601 243.299 484.694 248.215 481.426C252.312 478.431 254.77 473.529 254.497 468.627C254.77 463.452 252.312 458.278 248.488 454.737C240.84 449.018 232.374 444.661 223.36 441.665L212.709 437.58C201.511 433.495 191.405 426.959 182.938 418.245C174.471 409.257 169.828 397.275 170.101 384.747C169.828 365.139 181.026 346.893 198.779 338.178C208.066 333.276 218.717 331.097 229.096 331.097C243.025 330.28 256.955 334.638 268.153 343.352C277.166 350.705 283.994 360.509 287.818 371.403L288.91 374.398L277.712 379.301C273.889 380.935 269.792 381.752 265.695 381.752C258.047 381.752 250.4 379.028 244.664 373.854C240.567 370.586 235.105 368.679 229.916 368.952C224.453 368.679 218.991 370.313 214.621 373.309C211.07 375.76 209.158 379.573 209.158 383.93C209.158 388.288 211.07 392.373 214.621 395.096C220.629 399.726 227.731 402.994 234.832 405.445L245.484 409.257C259.14 413.615 271.157 421.24 281.263 431.317C290.003 441.393 294.646 454.465 294.1 467.81C294.373 478.975 291.095 490.141 284.814 499.4C278.805 507.843 270.611 514.651 261.052 518.736C251.765 522.821 241.66 525 231.554 525C215.986 525 201.237 520.098 189.22 510.839Z" />
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
