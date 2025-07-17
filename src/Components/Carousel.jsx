
import Project1 from '../assets/project01.webp'
import Project2 from '../assets/project02.webp'
import Project3 from '../assets/project03.webp'
import Project4 from '../assets/project04.webp'

const images = [
  { src: Project1, alt: "Project 03" },
  { src: Project2, alt: "Project 01" },
  { src: Project3, alt: "Project 02" },
  { src: Project4, alt: "Project 04" },
];

const ImageCarousel = () => {
  const imageList = [...images, ...images];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {imageList.map((image, index) => (
          <div key={index} className="px-4 py-8">
            <div className="relative group w-[30dvw] h-auto rounded-lg overflow-hidden shadow-lg transform-gpu transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <img
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="transition-opacity opacity-100 duration-100"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
