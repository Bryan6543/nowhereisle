"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ReportType = "studio" | "game" | "";
type GameReportType = "bug" | "feedback" | "";

export default function Support() {
  const [reportType, setReportType] = useState<ReportType>("");
  const [gameReportType, setGameReportType] = useState<GameReportType>("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const finalSubject =
        reportType === "game"
          ? `[${gameReportType?.toUpperCase()}] ${subject}`
          : subject;

      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportType,
          gameReportType,
          subject: finalSubject,
          description,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        // Reset form
        setReportType("");
        setGameReportType("");
        setSubject("");
        setDescription("");
      } else {
        console.error("Server error:", data);
        alert(`Error: ${data.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center border-b border-red-950 overflow-hidden">
        <Image
          src={"/final_1.png"}
          width={10000}
          height={10000}
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p className="text-red-500 tracking-[4px] text-sm mb-4">
            WE ARE LISTENING
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
            SUPPORT
          </h1>
          <p className="text-gray-400 text-lg">
            Every message helps us make the isle better.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Quick Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-800 transition">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-xl font-semibold">Send a Message</h3>
            <p className="text-gray-500 text-sm mt-2">
              Fastest way to reach us
            </p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-800 transition">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold">Common Questions</h3>
            <p className="text-gray-500 text-sm mt-2">Check our FAQ first</p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-800 transition">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold">Join Community</h3>
            <p className="text-gray-500 text-sm mt-2">
              Discuss with other players
            </p>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Tell Us What’s Wrong
          </h2>

          {submitted ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🌫️</div>
              <h3 className="text-3xl font-semibold text-red-400 mb-4">
                Message Received
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Thank you. We’ve received your message and will reply as soon as
                possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-10 px-10 py-4 border border-red-700 hover:bg-red-950 rounded-2xl transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Report Type */}
              <div>
                <label className="block text-gray-400 mb-4 text-sm uppercase tracking-widest">
                  This message is about
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setReportType("studio")}
                    className={`p-8 rounded-2xl border text-left transition-all ${reportType === "studio" ? "border-red-600 bg-red-950/20" : "border-zinc-800 hover:border-zinc-700"}`}
                  >
                    <p className="font-medium text-lg">
                      Studio / General Inquiry
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Press, business, partnerships, etc.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReportType("game")}
                    className={`p-8 rounded-2xl border text-left transition-all ${reportType === "game" ? "border-red-600 bg-red-950/20" : "border-zinc-800 hover:border-zinc-700"}`}
                  >
                    <p className="font-medium text-lg">
                      Sigil Tactics: Lost Maylon
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Bugs, feedback, or suggestions
                    </p>
                  </button>
                </div>
              </div>

              {/* Game Sub-Type */}
              {reportType === "game" && (
                <div>
                  <label className="block text-gray-400 mb-4 text-sm uppercase tracking-widest">
                    What kind of report?
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setGameReportType("bug")}
                      className={`flex-1 py-5 rounded-2xl border transition ${gameReportType === "bug" ? "border-red-600 bg-red-950/30" : "border-zinc-800 hover:border-zinc-700"}`}
                    >
                      Bug Report
                    </button>
                    <button
                      type="button"
                      onClick={() => setGameReportType("feedback")}
                      className={`flex-1 py-5 rounded-2xl border transition ${gameReportType === "feedback" ? "border-red-600 bg-red-950/30" : "border-zinc-800 hover:border-zinc-700"}`}
                    >
                      Feedback / Suggestion
                    </button>
                  </div>
                </div>
              )}

              {/* Subject & Description */}
              {(reportType === "studio" ||
                (reportType === "game" && gameReportType)) && (
                <div className="space-y-8 pt-6 border-t border-zinc-800">
                  <div>
                    <label className="block text-gray-400 mb-3">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition"
                      placeholder="e.g. Game crashes during sigil activation"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-3">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      rows={12}
                      className="w-full bg-black border border-zinc-800 rounded-3xl px-6 py-5 focus:border-red-600 outline-none resize-y min-h-[200px]"
                      placeholder="Please describe the issue in as much detail as possible. Include steps to reproduce if it's a bug."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 hover:bg-red-600 disabled:opacity-70 py-6 rounded-2xl text-lg font-medium transition-all duration-300"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
