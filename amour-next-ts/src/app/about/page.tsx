import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About <span className="text-amber-600">Amour Editorial</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Amour Editorial is dedicated to helping students and professionals tell their stories with clarity, authenticity, and impact. Our mission is to empower applicants to the world’s top universities and organizations by transforming their experiences into compelling narratives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded by Akshai and Lathika, alumni of world-renowned institutions, Amour Editorial was born from our own journeys through competitive admissions processes. We understand the challenges, the hopes, and the dreams behind every application.
            </p>
            <p className="text-gray-700 mb-4">
              Our team combines years of experience in admissions consulting, editing, and storytelling. We believe every applicant has a unique story, and we’re here to help you tell it in the most authentic and impactful way possible.
            </p>
            <p className="text-gray-700">
              Whether you need help with SOPs, LORs, personal statements, or interview preparation, we offer personalized guidance and expert feedback every step of the way.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/team-image.jpg"
              alt="Amour Editorial Team"
              width={400}
              height={300}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Personalized, one-on-one guidance for every client</li>
            <li>Expert editors with backgrounds in top universities</li>
            <li>Proven track record of successful admissions</li>
            <li>Commitment to authenticity and ethical storytelling</li>
            <li>Support for a wide range of documents and application needs</li>
          </ul>
        </div>
        <div className="text-center">
          <Link href="/booking" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-colors">
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
