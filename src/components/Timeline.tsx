"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const RoadmapTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const timelineItems = gsap.utils.toArray(".timeline-item");

      timelineItems.forEach((item: any, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // Start animation when the top of the item is 80% in view
            end: "bottom 20%", // End animation when the bottom of the item is 20% in view
            toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
          },
        });
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-16" ref={timelineRef}>
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
        Roadmap
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-yellow-700 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {[
            {
              date: "Q1 2024",
              title: "Project Launch",
              description: "Official launch of the GlobeTerra project with initial features.",
            },
            {
              date: "Q2 2024",
              title: "AI Agent Integration",
              description: "Integration of the DQN-based AI agent for financial decision-making.",
            },
            {
              date: "Q3 2024",
              title: "API Release",
              description: "Release of the GlobeTerra API for developers to build on the platform.",
            },
            {
              date: "Q4 2024",
              title: "Global Expansion",
              description: "Expanding the platform to support global financial connectivity.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="timeline-item relative w-full md:w-1/2 mx-auto"
              style={{
                marginLeft: index % 2 === 0 ? "0" : "50%",
                textAlign: index % 2 === 0 ? "left" : "right",
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black transform -translate-x-1/2 left-1/2"></div>

              {/* Timeline Content */}
              <div
                className={`bg-gradient-to-r ${
                  index % 2 === 0 ? "from-black to-[#001a11]" : "from-[#001a11] to-black"
                } p-6 rounded-lg shadow-lg`}
              >
                <h3 className="text-xl font-bold text-yellow-500">{item.date}</h3>
                <h4 className="text-2xl font-semibold text-white mt-2">{item.title}</h4>
                <p className="text-gray-300 mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;