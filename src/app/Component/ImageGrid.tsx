import React from "react";

const images = [
  { src: "/images/chair1.png" },
  { src: "/images/chair2.png"  },
  {src: "/images/chair3.png"  },
  {src: "/images/chair4.png"  },
  {src: "/images/chair5.png"  },
  {src: "/images/chair6.png"  },
  {src: "/images/chair7.png"  },
  { src: "/images/smartwatch4.png" },
  { src: "/images/Headphone1.png" },
  { src: "/images/Headphone3.png" },
  { src: "/images/camra1.png" },
  { src: "/images/Headphone4.png" },
  { src: "/images/Headphone2.png" },
  { src: "/images/chair8.png" },
  { src: "/images/Dronecamra3.png"},
  { src: "/images/chair9.png" },
  
  
];

const ImageGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6  ">
      {images.map((image, index) => (
        <div >
          <img width={10 } height={50}
            src={image.src}
            className="w-20 h-50 object-cover rounded-t-lg"
          />
          <div className="p-2 text-center font-semibold">{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
