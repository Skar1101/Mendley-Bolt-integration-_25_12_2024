import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is Mendley?",
      answer: "Mendley is an AI-powered emotional intelligence companion that helps you understand and process your emotions through conversation, journaling, and guided self-reflection."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, absolutely. We use enterprise-grade encryption to protect your conversations and journal entries. Your personal data is never shared or used for training our AI models."
    },
    {
      question: "How does the AI understand emotions?",
      answer: "Mendley uses advanced natural language processing and emotional intelligence algorithms to understand context, tone, and emotional patterns in your conversations and journal entries."
    },
    {
      question: "Can Mendley replace traditional therapy?",
      answer: "No, Mendley is not a replacement for professional mental health care. While it can provide emotional support and self-reflection tools, it should be used as a complement to, not a replacement for, professional help when needed."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial that gives you full access to all Mendley features, allowing you to experience the benefits of our emotional intelligence companion."
    }
  ];

  return (
    <section id="faq" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about Mendley
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-black/50 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-purple-500" />
                ) : (
                  <Plus className="h-5 w-5 text-purple-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-black/30">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}