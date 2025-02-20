import Link from 'next/link';
import React from 'react';

const SpeakerIntro= () => {
  return (
    <section className="relative w-full py-16 md:py-24 text-white" >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2" id="about">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold leading-tight">
            Want to put your <br />
            <span className="text-[#9e0cca]">Brand</span> on the <br />
            Web <span className="text-purple-300">?</span>
          </h1>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2" >
          <p className="text-sm md:text-base leading-relaxed text-gray-300" >
          Whether you're a startup, a small business, or an established brand, We help bring your vision to life with stunning, high-performing websites. From modern UI/UX design to seamless development, We create customized websites that not only look great but also drive results. Let’s build your online presence the right way!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerIntro;
