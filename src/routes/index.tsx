import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { mountPaliativos } from "@/agenda/app.js";

export const Route = createFileRoute("/")({
  component: AgendaPage,
});

function AgendaPage() {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    let host = document.getElementById("paliativos-host");
    const created = !host;
    if (!host) {
      host = document.createElement("div");
      host.id = "paliativos-host";
    }
    host.className = "min-h-screen bg-slate-50 text-slate-800";
    host.hidden = false;
    slot.replaceChildren(host);
    if (created) mountPaliativos(host);

    return () => {
      host.hidden = true;
      document.body.appendChild(host);
    };
  }, []);

  return <div ref={slotRef} className="min-h-screen bg-slate-50 text-slate-800" />;
}
