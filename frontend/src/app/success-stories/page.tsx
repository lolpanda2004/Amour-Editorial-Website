// src/app/success-stories/page.tsx

import Link from "next/link";
import { Quote } from "lucide-react"; // Make sure to install lucide-react: npm install lucide-react

const stories = [
  {
    name: "Rahul K.",
    program: "MS in Computer Science, UCLA",
    background: "Rahul was a final-year computer science student from India with a passion for Artificial Intelligence but average grades.",
    dream: "To join UCLA, a highly competitive MS program in AI and become a researcher.",
    howWeHelped: "Amour Editorial helped Rahul identify unique projects and personal experiences, shaping them into a cohesive narrative that demonstrated impact and future potential.",
    outcome: "His SOP transformed from a list of achievements into a compelling personal journey, earning him an admit at UCLA.",
  },
  {
    name: "Priya M.",
    program: "MBA, Bayes Business School",
    background: "Priya had five years of experience in marketing but felt her leadership achievements were scattered across roles.",
    dream: "To get into a top MBA program to pivot into strategic consulting.",
    howWeHelped: "We worked with Priya to craft an SOP that highlighted concrete leadership stories, measurable impact, and future goals aligning with best values.",
    outcome: "Her application became a clear, compelling narrative, securing her a spot at Bayes Business School.",
  },
  {
    name: "Arjun S.",
    program: "MA in Economics, University of Glasgow",
    background: "Arjun came from an engineering background but wanted to pivot into development economics.",
    dream: "To show admissions that his non-traditional path was actually an advantage.",
    howWeHelped: "We reframed his engineering projects as problem-solving skills transferable to economics, and polished his SOP to emphasize unique perspectives.",
    outcome: "Arjun's story stood out, leading to acceptance at the University of Glasgow.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <main className="max-w-7xl mx-auto py-24 px-6 sm:px-12 lg:px-24 bg-background dark:bg-black">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-foreground">
        Success <span className="text-amber-600">Stories</span>
      </h1>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Read the journeys of real students who turned dreams into offers from top universities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-900/80 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 dark:hover:shadow-amber-500/30 hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-3 h-8 w-8 text-amber-200/50 dark:text-amber-500/20" />
              <h3 className="font-bold text-gray-900 dark:text-white text-center text-xl mb-1">{item.name}</h3>
              <p className="text-amber-700 dark:text-amber-500 text-center mb-4 font-medium">{item.program}</p>
              <p className="italic text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-amber-500 pl-4 py-2">
                {item.dream}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.background}</p>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-white">How we helped:</span> {item.howWeHelped}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-white">Outcome:</span> {item.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Link
          href="/booking"
          className="inline-flex items-center bg-amber-600 dark:bg-red-600 text-white hover:bg-amber-700 dark:hover:bg-red-700 font-medium gap-2 px-6 py-3 rounded-full shadow-lg hover:shadow-amber-500/40 transition"
        >
          Start your journey
        </Link>
      </div>
    </main>
  );
}