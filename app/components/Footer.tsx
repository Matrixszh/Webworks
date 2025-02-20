"use client";
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Define the dynamic form path for each page
  const formPaths: Record<string, string> = {
      '/': '/FormSponsor',

  };

  // Default to a general form if no specific path is found
  const formLink = formPaths[pathname] || '/FormSponsor';

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <footer id="footer" className="bg-transparent text-white py-8 px-4 md:py-12">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        {/* Get In Touch Section */}
        <div className="text-center w-full max-w-md mx-auto">
          <p className="text-sm md:text-base mb-4 tracking-wider">GET IN TOUCH</p>
          <button
            onClick={() => router.push(formLink)}
            className="w-full border border-[#9e0cca] hover:bg-purple-500/10 transition-all duration-300 px-8 py-3 text-lg shadow-lg hover:shadow-purple-500/20 rounded-lg"
          >
            FILL OUT THE FORM
          </button>
        </div>


        

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <span className="text-sm hover:text-[#9e0cca] cursor-pointer transition-colors">WEB WORKS</span>
            <span className="text-sm text-white">© 2024</span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="text-sm hover:text-[#9e0cca] cursor-pointer transition-colors">zainhussaini9898@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
