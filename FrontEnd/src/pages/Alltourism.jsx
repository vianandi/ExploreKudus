import React, { useState, useEffect } from "react";
import LightBlueBtn from "../component/LightBlueBtn";
import CardsTour from "../component/CardsTour";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Alltourism = () => {
  const [tourism, setTourisms] = useState([]);
  const [dataTourism, setDataTourisms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [inputValue, setInputValue] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const filteredData = dataTourism.filter((tourism) =>
    searchTerm
      ? tourism.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    getTourisms();
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTourisms = async () => {
    try {
      const response = await axios.get("/api/api/tourism");
      setTourisms(response.data);
      setDataTourisms(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    console.log(selectedCategory);
  };

  useEffect(() => {
    filteredTourism();
  }, [selectedCategory, tourism]);

  const filteredTourism = async () => {
    if (selectedCategory !== null) {
      const dataTour = tourism.filter(
        (tour) => tour.category_id == selectedCategory
      );
      console.log(dataTour);
      setDataTourisms(dataTour);
    } else {
      setDataTourisms(tourism);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Add a new function to handle input changes
  const handleInputChange = (event) => {
    const value = event.target.value;

    // Update inputValue state regardless of the input value
    setInputValue(value);

    // Check if the input value is a number and is within the page range
    if (
      !isNaN(value) &&
      value >= 1 &&
      value <= Math.ceil(filteredData.length / itemsPerPage)
    ) {
      setCurrentPage(Number(value));
    }
  };

  return (
    <>
      {/* Category */}
      <div className="flex flex-col items-center ">
        {/* Baris Pertama */}
        <div className="flex mb-4 ">
          <div className=" p-4 mr-4 text-[20px] mt-[120px] text-[#004AAD] md:text-[36px] font-semibold">
            KATEGORI
          </div>
        </div>
        {/* Baris Kedua */}
        <div className="flex flex-wrap gap-2 justify-center">
          <LightBlueBtn
            // path="/tourism"
            text="WISATA ALAM"
            width={"w-[400px] sm:w-1/3"}
            action={() => handleCategoryClick(2)}
          />

          <LightBlueBtn
            path="/tourism"
            text="WISATA BELANJA"
            width={"w-full sm:w-1/3"}
            action={() => handleCategoryClick(3)}
          />

          <LightBlueBtn
            path="/tourism"
            text="WISATA KULINER"
            width={"w-full sm:w-1/3"}
            action={() => handleCategoryClick(4)}
          />

          <LightBlueBtn
            path="/tourism"
            text="WISATA RELIGI"
            width={"w-full sm:w-1/3"}
            action={() => handleCategoryClick(5)}
          />

          <LightBlueBtn
            path="/tourism"
            text="WISATA SEJARAH"
            width={"w-full sm:w-1/3"}
            action={() => handleCategoryClick(6)}
          />
        </div>
      </div>
      {/* Cards Tour */}
      <div className="flex mx-auto mb-2 mt-8 sm:px-[50px] px-[5px]">
        <div className="flex flex-wrap ">
          {/* Baris Pertama */}
          <div className="flex flex-wrap gap-4 px-5 sm:px-[20px] sm:pt-10 sm:pb-10 mx-[3px]">
            {currentItems?.map(
              (tourism) =>
                tourism && (
                  <CardsTour key={tourism.id} payloads={tourism}></CardsTour>
                )
            )}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <button
          className="mr-2 hover:text-blue-500 text-[12px] sm:text-[16px]"
          disabled={currentPage === 1}
          onClick={(e) => handlePageChange(e, currentPage - 1)}
        >
          Previous
        </button>
        {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()]
          .slice(
            // Display only 3 pages on mobile and 10 pages on desktop
            Math.max(
              0,
              Math.min(
                currentPage - Math.ceil(windowWidth <= 768 ? 2 : 5),
                Math.ceil(filteredData.length / itemsPerPage) -
                  (windowWidth <= 768 ? 3 : 10)
              )
            ),
            Math.max(
              0,
              Math.min(
                currentPage - Math.ceil(windowWidth <= 768 ? 2 : 5),
                Math.ceil(filteredData.length / itemsPerPage) -
                  (windowWidth <= 768 ? 3 : 10)
              )
            ) + (windowWidth <= 768 ? 3 : 10)
          )
          .map((number) => (
            <button
              key={number}
              className={`mx-1 px-3 py-2 border rounded text-[12px] sm:text-[16px] hover:bg-blue-500 hover:text-white ${
                currentPage === number + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={(e) => handlePageChange(e, number + 1)}
            >
              {number + 1}
            </button>
          ))}
        <button className="text-center">...</button>
        <button
          className="ml-2 mx-1 px-3 py-2 rounded border hover:bg-blue-500 hover:text-white mr-1 text-[12px] sm:text-[16px]"
          onClick={(e) =>
            handlePageChange(e, Math.ceil(filteredData.length / itemsPerPage))
          }
        >
          {Math.ceil(filteredData.length / itemsPerPage)}
        </button>
        <button
          className="ml-2 hover:text-blue-500 mr-5 text-[12px] sm:text-[16px]"
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
          onClick={(e) => handlePageChange(e, currentPage + 1)}
        >
          Next
        </button>
        {/* Add an input field for entering the page number */}
        <input
          className="border rounded py-1 text-center w-[70px] sm:w-auto"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Go to "
        />
      </div>
    </>
  );
};

export default Alltourism;
