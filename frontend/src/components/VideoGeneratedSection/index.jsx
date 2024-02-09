const VideoGeneratedSection = () => {
  const images = [
    {
      image: "./Assests/homeAssests/image2.jpg",
      caption: "Realistic",
    },
    {
      image: "./Assests/homeAssests/image2.jpg",
      caption: "Fantacy",
    },
    {
      image: "./Assests/homeAssests/image2.jpg",
      caption: "Neon Love",
    },
    {
      image: "./Assests/homeAssests/image2.jpg",
      caption: "Liquid",
    },
    {
      image: "./Assests/homeAssests/image2.jpg",
      caption: "Vibrant",
    },
    {
      image: "./Assests/homeAssests/image2.jpg",
      caption: "Chaos",
    },
  ];

  return (
    <div className="bg-[#DCD8F8] text-center">
      <div className="flex gap-4 items-center max-w-5xl mx-auto py-8">
        <h2 className="text-3xl font-semibold">Choose Style</h2>
        <ul className="flex gap-2 font-light text-xl text-gray-700">
          <li>New</li>
          <li>Hot</li>
          <li>Top</li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3  mx-auto max-w-5xl  gap-12">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={image.image}
                className="md:w-32 w-48 border rounded-2xl"
              />
              <h1 className="font-semibold pt-2">{image.caption}</h1>
            </div>
          );
        })}
      </div>

      <div className="p-2">
        <video
          controls
          className="w-[600px] mx-auto my-5 border border-green-800 rounded-2xl "
        >
          <source
            src="https://www.youtube.com/watch?v=xIBLZrxyQ3w"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="font-semibold w-[350px] mx-auto flex flex-row gap-5 text-center pb-5">
        <button className="border rounded-2xl bg-[#514A4A] text-white px-4 py-2">
          Share
        </button>
        <button className="border rounded-2xl bg-[#B8EEEB]  px-4 py-2">
          Create Again
        </button>
        <button className="border rounded-2xl bg-[#514A4A] text-white px-4 py-2">
          Save
        </button>
      </div>
      {/* 
 <div>
      <li className="bg-[#CEFAE5]">Top</li>
      <li className="bg-[#514A4A]">Top</li>
      <li className="bg-[#FFFFFF]">Top</li>
      <li className="bg-[#000000]">Top</li>
      <li className="bg-[#DCD8F8]">Top</li>
      <li className="bg-[#076857]">Top</li>
      <li className="bg-[#B8EEEB]">Top</li>
      <li className="bg-[#0B1618]">Top</li>
      </div>
      */}
    </div>
  );
};

export default VideoGeneratedSection;
