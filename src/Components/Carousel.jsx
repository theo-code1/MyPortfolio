import React, { useState, useEffect } from "react";

import Project1 from "../assets/project01.webp";
import Project2 from "../assets/project02.webp";
import Project3 from "../assets/project03.webp";
import Project4 from "../assets/project04.webp";

const images = [
  { src: Project1, alt: "Project 03" },
  { src: Project2, alt: "Project 01" },
  { src: Project3, alt: "Project 02" },
  { src: Project4, alt: "Project 04" },
];

const Carousel = () => {
  const imageList = [...images, ...images];
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="w-full overflow-hidden opacity-0 animate-opacity transition-all duration-200"
      style={{
        "--animDelay": isMobile ? '0' : "2s",
        maskImage:
          "linear-gradient(to right, transparent, white 5%, white 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 5%, white 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-infinite-scroll hover:[animation-duration: 100]">
        {imageList.map((image, index) => (
          <div key={index} className="px-4 py-8">
            <div className="relative group w-[50dvw] md:w-[40dvw] lg:w-[30dvw] h-auto rounded-lg overflow-hidden shadow-[0_4px_20px_0_var(--color-shadow-black-02)] transition-all duration-300 ">
              <img
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="transition-opacity opacity-100 duration-100 select-none"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
