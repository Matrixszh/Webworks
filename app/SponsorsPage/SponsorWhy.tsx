"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TabContent {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

const SponsorWhy = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContent: TabContent[] = [
    {
      id: 1,
      title: 'Tailored Design',
      description: "We start by deeply understanding your brand, its values, and its goals. This allows us to craft a website that not only looks visually stunning but also aligns perfectly with your brand identity and target audience. Every design choice is made with your business in mind, ensuring a unique and impactful online presence.",
      imageUrl: '/UI.jpg'
    },
    {
      id: 2,
      title: 'Transparent Development',
      description: "We believe in keeping our clients informed at every stage of development. Through regular updates, previews, and open communication, you can see your website come to life in real time. This ensures that you’re always aware of the progress and can provide feedback, making the final product exactly what you envisioned.",
      imageUrl: '/coding.jpg'
    },
    {
      id: 3,
      title: 'Support & Guidance',
      description: "Our work doesn’t stop after your website is built. We offer continuous support to ensure everything runs smoothly. Whether you need technical assistance, updates, or just a walkthrough of how your website works, we’re always here to help. Our goal is to empower you with the knowledge and confidence to manage your website effortlessly.",
      imageUrl: '/support.jpg'
    }
  ];

  return (
    <div className="bg-transparent text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">Why WebWorks ?</h1>
        <p className="text-base md:text-lg text-gray-300 px-4">
          We offer custom websites with stunning UI/UX, fast delivery, and competitive rates to make your brand stand out!
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-purple-500/10 rounded-full p-1 flex justify-center flex-wrap gap-2">
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 text-xs sm:text-xs md:text-base ${
                activeTab === tab.id
                  ? 'bg-[#9e0cca] text-white'
                  : 'bg-transparent text-white hover:bg-purple-500/10'
              }`}
            >
              POINT {tab.id}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {tabContent.map((content) => (
        <div
          key={content.id}
          className={`transition-opacity duration-300 ${
            activeTab === content.id ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <div className="max-w-5xl mx-auto bg-black/20 rounded-3xl overflow-hidden border border-[#9e0cca]">
            <div className="flex flex-col md:flex-row items-center p-4 md:p-8 gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4">{content.title}</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {content.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-square max-w-[384px] relative rounded-[50px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={content.imageUrl || ''}
                    alt={`${content.title} illustration`}
                    fill
                    className="object-cover rounded-[50px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Button */}
      <div className="text-center mt-8 md:mt-12">
      <Link href="/FormSponsor">
        <button className="px-6 py-3 rounded-full border border-[#9e0cca] hover:bg-purple-500/10 transition-all duration-300 uppercase text-xs md:text-sm tracking-wider">
          ELEVATE YOUR BRAND
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SponsorWhy;