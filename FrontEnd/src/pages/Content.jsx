import React, { useState, useEffect } from "react";
import LeftCards from "../component/ContentLeftCards";
import CommentSection from "../component/Comment";
import LogComment from "../component/LogComment";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageComponent from "../component/Imagecomponent";
// import { set } from "react-hook-form";
import moment from "moment/moment";
import ImageComponentcontent from "../component/Imagecomponentcontent";

const Content = () => {
  const { id } = useParams();
  const [tourism, setTourism] = useState(null);
  const [tourisms, setTourisms] = useState([]);
  const [comment, setComment] = useState([]);
  // const [filteredComments, setFilteredComments] = useState([]);
  const formatDate = moment(tourism?.created_at).format("DD MMMM YYYY");
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [displayedCardId, setDisplayedCardId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getTourisms();
      await getComment();
    };

    fetchData();
  }, [id]);
  // useEffect(() => {
  //   const filteredComments = comment.filter(

  useEffect(() => {
    const fetchTourisms = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/tourism");
        setTourisms(response.data);
      } catch (error) {
        console.error("Error fetching tourisms:", error);
      }
    };

    fetchTourisms();
  }, []);

  useEffect(() => {
    if (tourism !== null) {
      // const dataComment = comment.filter((com) => com.tourismId == tourism.id);
      // console.log(dataComment);
      // setFilteredComments(dataComment);
    } else {
      // setFilteredComments([]);
    }
  }, [comment, tourism]);

  const handleContentCalled = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  const getTourisms = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/tourism/${id}`
      );
      const data = response.data;
      // If facilities is a string of facilities separated by commas, split it into an array
      if (typeof data.facilities === "string") {
        data.facilities = data.facilities.split(",");
      }
      setTourism(response.data);
      handleContentCalled(response.data.category_id); // Update the currentCategoryId
      setDisplayedCardId(id); // Update the displayedCardId
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching tourism data:", error);
      // Add error handling logic here, such as setting an error state or showing an error message to the user.
    }
  };

  // const filteredComments = async () => {
  //   if (comment !== null) {
  //     console.log('COMMENTS', comment);
  //     const dataComment = comment.filter(
  //       (com) => com.id_pariwisata == id
  //     );
  //     console.log('COMMENTS', dataComment);
  //     setComment(dataComment);
  //   } else {
  //     setComment(comment);
  //   }
  // };

  const getComment = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/comment`);
      setComment(response.data.filter((item) => item.id_pariwisata == id));
      // filteredComments()
      console.log(comment);
    } catch (error) {
      console.error("Error fetching comment data:", error);
    }
  };

  if (tourism === null) {
    return <p>Loading...</p>;
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <>
      {/* Title */}
      <div className="flex flex-col items-start sm:px-[120px] sm:pt-32 pt-32">
        <div className="flex mt-16">
          <div className="mr-4  text-[20px] text-[#004AAD] md:text-[42px] font-semibold">
            {tourism?.name}
          </div>
        </div>
        {/* Border */}
        <div className="flex justify-center">
          <div className="text-center">
            <div className="border-t border-[#004AAD] xs:w-[350px] sm:w-[1220px] mx-auto my-4"></div>
          </div>
        </div>
      </div>
      {/* Date */}
      <div className="flex flex-col items-start sm:px-[120px]">
        <div className="flex mt-[-8px]">
          <div className="  mr-4 text-[12px] text-[#004AAD] md:text-[14px] font-semibold">
            {formatDate}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex sm:px-[120px]">
        {/* Left Col */}
        <div className="max-w-full sm:max-w-[788px] sm:pr-[12px] mt-4">
          {/* Content 1st Col */}
          <p className="text-justify mb-8">{tourism?.deskripsi1}</p>
          <div className="w-full sm:w-[788px] flex items-center justify-center">
            {tourism?.gambarUtama && (
              <ImageComponentcontent imageName={tourism?.gambarUtama} />
            )}
          </div>
          <div>
            <p className="text-justify my-8">{tourism?.deskripsi2}</p>
          </div>
          {/* Pict Row */}
          <div className="flex max-w-full sm:max-w-[788px]">
            <div className="max-w-full sm:max-w-[788px] sm:pr-[8px]">
              <div className="w-full sm:w-[788px] flex-1">
                <div className="flex items-center justify-center">
                  {tourism?.gambarPanjang && (
                    <ImageComponentcontent imageName={tourism?.gambarPanjang} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="text-justify my-8">{tourism?.deskripsi3}</p>
        </div>

        {/* Right Col */}
        <div className="max-w-[348px] ml-12 sm:pl-[12px] mt-4">
          {/* Content 2nd Col */}
          <h3 className="font-bold text-[#004AAD]">Fasilitas</h3>
          <div className="flex gap-8 mt-5">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: "10px",
              }}
            >
              {tourism?.facilities.map((facility, index) => (
                <div key={index}>{facility}</div>
              ))}
            </div>
          </div>

          <div className="mt-5 max-w-full sm:max-w-[348px]">
            {shuffle([...tourisms]) // Shuffle the array
              .filter((tour) => tour.id !== displayedCardId)
              .slice(0, 3)
              .map((tour) => (
                <LeftCards key={tour.id} payloads={tour} />
              ))}
          </div>

          {/* ... Your content for the second column goes here ... */}
        </div>
      </div>
      {/* Comment Section */}
      <div className="flex flex-col sm:flex-row sm:px-[120px]">
        <div className="w-full sm:w-1/2 p-4">
          <CommentSection tourismId={{ id }} />
        </div>
        <div className="max-h-[350px] w-full sm:w-1/2 p-4 overflow-y-auto">
          <div>
            <p className="text-2xl">Komentar</p>
          </div>
          {/* {filteredComments?.map(
            (comment) =>
              comment && <LogComment payloads={comment} key={comment.id} />
          )} */}
          {comment.map((payloads) => (
            <LogComment payloads={payloads} key={payloads.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
