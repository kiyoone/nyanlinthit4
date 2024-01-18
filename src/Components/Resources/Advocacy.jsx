import React from "react";

const Advocacy = ({ advocacy }) => {
  return (
    <div className="h-72 sm:h-64 md:h-96  rounded-lg shadow-lg overflow-hidden">
      <div className="h-2/3 ">
        <iframe
          width="100%"
          height="100%"
          src={advocacy.embed}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="h-1/2 text-center py-8">{advocacy.title}</div>
    </div>
  );
};

export default Advocacy;
