import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 text-center text-sm text-gray-600 mt-12">
      <div className="flex justify-center gap-4">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Amour Editorial. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
