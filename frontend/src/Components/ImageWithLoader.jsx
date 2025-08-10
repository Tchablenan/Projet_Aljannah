import React, { useState } from "react";

const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0c2d3d]">
          <div className="w-6 h-6 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.src = "/default-jet.jpg";
          setLoaded(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ImageWithLoader;
