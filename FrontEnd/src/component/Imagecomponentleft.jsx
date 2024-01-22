import React, { useState, useEffect } from 'react';

const ImageComponentleft = ({ imageName, height, width }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(`/api/api/get-image-url/${imageName}`);
        const data = await response.json();
        setImageUrl(data.imageUrl.replace(/https?:\/\/localhost:\d+/g, 'https://explorekudus.com'));
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, [imageName]);

  return (
    <div >
      {imageUrl && <img className='h-[150px] w-full'  src={imageUrl} alt="Gambar" />}
    </div>
  );
};

export default ImageComponentleft;
