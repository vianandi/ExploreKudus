import React, { useState, useEffect } from 'react';

const ImageComponent = ({ imageName, height, width }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(`/api/api/get-image-url/${imageName}`);
        const data = await response.json();
        setImageUrl(data.imageUrl.replace(/https?:\/\/localhost:\d+/g, 'https://explorekudus.com/api'));
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, [imageName]);

  return (
    <div >
      {imageUrl && <img height={height} width={width} src={imageUrl} alt="Gambar" />}
    </div>
  );
};

export default ImageComponent;
