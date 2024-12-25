import React from 'react';

const steps = [
  {
    number: 1,
    title: "Develop",
    description: "We collaborate with mental health experts to translate their modality into an AI-powered module."
  },
  {
    number: 2,
    title: "Implement",
    description: "Our team builds the technology and integrates it into the Mendley platform."
  },
  {
    number: 3,
    title: "Evaluate",
    description: "We evaluate the results with our partners to continue to refine the efficacy."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">Mendley's Approach</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            We combine structured journaling with AI-powered dialogues to foster consistent self-reflection practices
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="flex items-start gap-6 p-6 bg-gray-900/30 rounded-xl border border-gray-800/50"
            >
              <div className="bg-purple-900/50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                <span className="text-xl font-bold text-purple-400">{step.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}