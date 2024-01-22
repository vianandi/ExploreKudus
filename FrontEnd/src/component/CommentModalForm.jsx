import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LogComment from "./LogComment";
import { useParams } from "react-router-dom";

const CommentModalForm = ({ payloads, isOpen, onClose }) => {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tourism, setTourism] = useState({ id: 0 });
  const [comment, setComment] = useState([]);
  // const { id, name, comment, tanggal, created_at } = payloads;
  // const formatDate = moment(created_at).format("DD MMMM YYYY");

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      await getComment();
    };

    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("comment", data.comment);
      formData.append("id_pariwisata", tourism?.id);
      formData.append("tanggal", data.tanggal);
      formData.append("name", data.name);
      formData.append("email", data.email);

      console.log(data);

      await axios.post("/api/api/comment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Data add successfull");
      reset();
    } catch (error) {
      console.error("Error add data: ", error);
    }
  };

  const getComment = async () => {
    try {
      const response = await axios.get(`/api/api/comment`);
      setComment(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching comment data:", error);
    }
  };

  if (tourism === null) {
    return <p>Loading...</p>;
  }

  return (
    isOpen && (
      <>
        <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-[1440px]">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Data Komentar</h3>
              </div>
              {/*body*/}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                  <div className="max-h-[450px] w-[750px} p-4 overflow-y-auto">
                    <div>
                      <p className="text-2xl">Komentar</p>
                    </div>
                    {comment.map((payloads) => (
                      <LogComment payloads={payloads} key={payloads.id} />
                    ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
};

export default CommentModalForm;
