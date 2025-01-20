import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function Generate() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState(null);
  const [hashtags, setHashtags] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please upload a file!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", "some_user_id");

    try {
      const response = await fetch("http://127.0.0.1:8000/generate-caption/", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setCaption(result.caption);
        setHashtags(result.hashtags);
      } else {
        alert(result.error || "Failed to generate caption");
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!file || !caption || !hashtags) {
      alert("Please upload an image and generate caption/hashtags first!");
      return;
    }

    const zip = new JSZip();
    const textToSave = `Caption:\n${caption}\n\nHashtags:\n${hashtags}`;

    // Add the text file to the zip
    zip.file("caption_and_hashtags.txt", textToSave);

    // Add the image file to the zip
    const imageData = await file.arrayBuffer();
    zip.file(file.name, imageData);

    // Generate and save the zip file
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "image_and_caption.zip");
    });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleShare = () => {
    alert("Share functionality will be implemented!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#070939]">
      <h1 className="text-white text-3xl font-semibold mt-16 mb-6">Generate Your Next Caption</h1>

      <div className="bg-white rounded-lg shadow-md p-6 w-96">
        <form onSubmit={handleSubmit}>
          <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col items-center space-y-4">
            <div className="bg-gray-200 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 16l4-4a4 4 0 015.656 0L21 21M13 7H7a4 4 0 00-4 4v0a4 4 0 004 4h0M16 7a4 4 0 011.3 7.7M16 7h1m-1 0h1m-1 0H7m0 0h1M7 7a4 4 0 00-1.3 7.7m0 0h1m-1 0h1"
                />
              </svg>
            </div>
            <p className="text-gray-500">
              Drop your image here, or{" "}
              <label htmlFor="file-upload" className="text-blue-500 cursor-pointer">
                browse
              </label>
            </p>
            <p className="text-gray-400 text-sm">Supports PNG, JPG, JPEG, WEBP</p>
            <input
              id="file-upload"
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Uploaded Preview" className="w-full h-auto rounded-md" />
            </div>
          )}

          <div className="flex justify-between items-center mt-6">
            <button type="button" className="text-gray-500 hover:text-gray-700">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </div>

      {caption && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-96">
          <h2 className="text-lg font-semibold">Generated Caption:</h2>
          <p>{caption}</p>
          <h3 className="mt-4 text-sm font-semibold">Generated Hashtags:</h3>
          <p>{hashtags}</p>

          <div className="flex justify-around mt-4">
            <button
              onClick={() => handleCopy(`${caption}\n${hashtags}`)}
              className="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-copy text-lg"></i>
              <span className="text-xs">Copy</span>
            </button>

            <button
              onClick={handleSave}
              className="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-save text-lg"></i>
              <span className="text-xs">Save</span>
            </button>

            <button
              onClick={handleShare}
              className="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-share text-lg"></i>
              <span className="text-xs">Share</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Generate;
