import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'Why are we looking for a partner?',
    answer:
      "Over the years, our team has grown steadily, and we've had the privilege of working with clients from different parts of the world. We want a trustworthy partner in Europe to bridge the gap and grow together.",
  },
  {
    id: 2,
    question: 'Why are we going to use your account?',
    answer:
      'Salaries are lower in Asian countries, so we need to use your account to earn more. We will not use it for any illegal purpose, and you can check what we are doing in real time.',
  },
  {
    id: 3,
    question: 'Why are we going to use your computer?',
    answer:
      "Many freelance websites detect users by IP address. We need your IP through your computer. Don't worry — you can protect your personal data with a simple option (VMware).",
  },
  {
    id: 4,
    question: 'How do we make sure your personal data is safe?',
    answer:
      'We use VMware, which creates a virtual machine on your computer. It is completely separated from your main system, so your personal data remains safe.',
  },
  {
    id: 5,
    question: 'How can you trust us?',
    answer:
      'All payments are processed through your bank account, and you control your payment account. Everything is transparent and under your supervision.',
  },
  {
    id: 6,
    question: 'What is your role? What do you have to do?',
    answer:
      'Create an account, verify it, install VMware, allow access, keep your computer on when needed, and share the agreed payment with us.',
  },
  {
    id: 7,
    question: 'Which kind of payment system do we use?',
    answer:
      'We can use PayPal or another mutually agreed payment method depending on the project.',
  },
  {
    id: 8,
    question: 'What kinds of work does our team do?',
    answer:
      'Web, Android, AI, backend, APIs, database, DevOps, UI, testing, maintenance, bug fixing, support. From planning to deployment and maintenance.',
  },
  {
    id: 9,
    question: 'What if your computer performance is not good?',
    answer:
      'You may need to allocate some resources to VMware at first. After 1–2 months, we will buy a new computer for you. It will be safer and more comfortable.',
  },
  {
    id: 10,
    question: 'How can we grow together?',
    answer:
      'With trust, transparency and fair benefits, we can build a stable, long-term partnership and achieve success together.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header matching exact flyer design */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#163e77] text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
              ?
            </div>
            <h2 className="text-2xl sm:text-[26px] font-black text-[#0a2346] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-500 font-medium pl-11">
            Everything you need to know
          </p>
        </div>

        {/* 
          Modern CSS Grid: 
          5 columns x 2 rows on large screen, 
          matching the exact 1-5 top row and 6-10 bottom row layout.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 items-stretch">
          {FAQ_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#d6e6f5] p-3.5 sm:p-4 flex flex-col justify-start hover:border-[#0066ee] hover:shadow-xs transition-all"
            >
              {/* Top Row: Circular blue badge with white number + Question title */}
              <div className="flex items-start gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-full bg-[#0066ee] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {item.id}
                </div>
                <h3 className="text-xs sm:text-[13px] font-extrabold text-[#0a2346] leading-tight">
                  {item.question}
                </h3>
              </div>

              {/* Answer text */}
              <p className="text-[11px] sm:text-[11.5px] text-[#475569] leading-relaxed font-normal">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
