// ParentComponent.jsx
import React, { useState } from 'react';
import NavbarAdmin from '../../component/NavbarAdmin';
import TourData from './TourData';


const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <NavbarAdmin onCategorySelect={setSelectedCategory} />
      <TourData selectedCategory={selectedCategory} />
    </>
  );
};

export default ParentComponent;