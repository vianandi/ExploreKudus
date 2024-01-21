import React, { useState, useEffect } from 'react';

const ImageComponentcontent = ({ imageName, height, width }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/get-image-url/${imageName}`);
        const data = await response.json();
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, [imageName]);

  return (
    <div >
      {imageUrl && <img className='sm:h-[300px] w-full h-full' src={imageUrl} alt="Gambar" />}
    </div>
  );
};

export default ImageComponentcontent;
