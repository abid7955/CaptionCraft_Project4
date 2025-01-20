import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // Assuming you have a logo.png file in the same directory
import Mountain from "../assets/1.jpg";
import Jungle from "../assets/2.jpg";
import North from "../assets/3.jpg";
import Butterfly from "../assets/4.jpg";
import Pier from "../assets/5.jpg";
import City from "../assets/6.webp";
import Search from "../assets/search.png";
import Copy from "../assets/copy.png";
import Download from "../assets/download.png";
import Share from "../assets/share.png";

function Gallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      name: "Mountain lake.png",
      src: Mountain,
      caption: "Calm lake surrounded by mountains and clouds on a clear day.",
      hashtags: "#Nature #Mountains #Lake #Clouds #Scenic #Peaceful",
    },
    {
      id: 2,
      name: "Jungle Pose.jpeg",
      src: Jungle,
      caption: "Man gazing thoughtfully while exploring the jungle.",
      hashtags: "#Forest #Nature #Gazing #Calm #Thoughtful",
    },
    {
      id: 3,
      name: "Northern Lights.png",
      src: North,
      caption: "Aurora Borealis dancing over a snowy landscape.",
      hashtags: "#AuroraBorealis #Iceland #NorthernLights #Beautiful",
    },
    {
      id: 4,
      name: "Butterfly.jpg",
      src: Butterfly,
      caption: "A monarch butterfly perched on a cluster of white flowers.",
      hashtags: "#MonarchButterfly #Butterfly #Flower #Nature #Closeup",
    },
    {
      id: 5,
      name: "By The Pier.png",
      src: Pier,
      caption: "Smiling woman by the seaside.",
      hashtags: "#Women #Seaside #Smile #Pier #Outside #Peaceful #Evening",
    },
    {
      id: 6,
      name: "City.jpeg",
      src: City,
      caption: "Busy city life with tall skyscrapers and bustling streets.",
      hashtags: "#City #Urban #Life #Skyline #Modern",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleSave = (image) => {
    const textToSave = `${image.caption}\n${image.hashtags}`;
    const blob = new Blob([textToSave], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${image.name.replace(/\.[^/.]+$/, "")}.txt`;
    link.click();
  };

  const handleShare = () => {
    alert("Share functionality will be implemented!");
  };

  const filteredImages = images.filter(
    (image) =>
      image.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.hashtags.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#070939] pt-10 px-14">
      <h1 className="text-white text-3xl font-semibold mb-8 text-center">
        Welcome To Your Gallery, Abid
      </h1>

      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2 space-x-2">
          <input
            type="text"
            placeholder="Search within gallery..."
            className="flex-1 border-none focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="text-blue-600 hover:text-blue-800">
            <img src={Search} className="h-6" alt="Search" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={image.src}
              alt={image.name}
              className="rounded-md w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold mt-4">{image.name}</h2>
            <p className="text-gray-700 text-sm mt-2">{image.caption}</p>
            <p className="text-blue-600 text-sm mt-2">{image.hashtags}</p>

            <div className="flex justify-center gap-4 items-center mt-4">
              <button
                onClick={() => handleCopy(`${image.caption} ${image.hashtags}`)}
                className="text-blue-600 hover:text-blue-800"
              >
                <img src={Copy} className="h-6" alt="Copy" />
              </button>
              <button
                onClick={() => handleSave(image)}
                className="text-blue-600 hover:text-blue-800"
              >
                <img src={Download} className="h-6" alt="Download" />
              </button>
              <button
                onClick={() => handleShare()}
                className="text-blue-600 hover:text-blue-800"
              >
                <img src={Share} className="h-6" alt="Share" />
              </button>
            </div>
          </div>
        ))}
        {filteredImages.length === 0 && (
          <p className="text-white text-center col-span-3">
            No images found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
