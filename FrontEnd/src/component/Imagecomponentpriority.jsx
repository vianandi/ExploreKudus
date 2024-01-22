import React, { useState, useEffect } from "react";

const ImageComponentPriority = ({ imageName, height, width }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(
          `/api/api/get-image-url/${imageName}`
        );
        const data = await response.json();
        setImageUrl(data.imageUrl.replace(/https?:\/\/localhost:\d+/g, 'https://explorekudus.com/api'));
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
  }, [imageName]);

  return (
    <div>
      {imageUrl && (
        <img
          className="sm:h-[256px] sm:w-[384px] w-[100px] h-[60px]"
          src={imageUrl}
          alt="Gambar"
        />
      )}
    </div>
  );
};

export default ImageComponentPriority;
