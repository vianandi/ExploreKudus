import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ModalInputData = ({ isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      // formData.append("thumbnail", data.thumbnail[0]);
      formData.append("alamat", data.alamat);
      formData.append("deskripsi1", data.deskripsi1);
      formData.append("deskripsi2", data.deskripsi2);
      formData.append("deskripsi3", data.deskripsi3);
      formData.append("gambarUtama", data.gambarUtama[0]);
      formData.append("gambarPanjang", data.gambarPanjang[0]);
      formData.append("category", data.category);

      console.log(data);

      await axios.post("http://localhost:8080/api/tourism", formData, {
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

  return (
    isOpen && (
      <>
        <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-[1440px]">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Tambah Data Pariwisata
                </h3>
              </div>
              {/*body*/}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex p-6 mt-[-30px] mb-[-46px] flex-auto">
                  <div className="flex">
                    {/* Left Col */}
                    <div className="w-1/2 p-4  w-[1000px]">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Nama Wisata
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          name="name"
                          // value={formData.namaWisata}
                          // onChange={handleInputChange}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Alamat
                        </label>
                        <input
                          {...register("alamat")}
                          type="text"
                          name="alamat"
                          // value={formData.namaWisata}
                          // onChange={handleInputChange}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Deskripsi 1
                        </label>
                        <textarea
                          {...register("deskripsi1")}
                          type="text"
                          name="deskripsi1"
                          // value={formData.deskripsi1}
                          // onChange={handleInputChange}
                          className="mt-1 p-2 border rounded-md w-full h-[7rem]"
                          style={{ resize: "none" }}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Deskripsi 2
                        </label>
                        <textarea
                          {...register("deskripsi2")}
                          type="text"
                          name="deskripsi2"
                          // value={formData.deskripsi2}
                          // onChange={handleInputChange}
                          className="mt-1 p-2 border rounded-md w-full h-[7rem]"
                          style={{ resize: "none" }}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="block text-sm font-medium text-gray-700">
                          Deskripsi 3
                        </label>
                        <textarea
                          {...register("deskripsi3")}
                          type="text"
                          name="deskripsi3"
                          // value={formData.deskripsi3}
                          // onChange={handleInputChange}
                          className="mt-1 p-2 border rounded-md w-full h-[7rem]"
                          style={{ resize: "none" }}
                        />
                      </div>
                      {/* ... (form input fields) ... */}
                    </div>
                    {/* Right Col */}
                    <div className="w-1/2 p-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Fasilitas
                        </label>
                        <input
                          {...register("fasilitas")}
                          type="text"
                          name="fasilitas"
                          // value={formData.fasilitas}
                          // onChange={handleInputChange}
                          // onKeyDown={handleEnterPress}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      {/* <ul className="mb-2">
                        {formData.fasilitasList.map((fasilitas, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center mr-2"
                          >
                            {fasilitas}
                            <button
                              className="text-[#CD0404]"
                              onClick={() => handleDeleteItem(index)}
                            >
                              X
                            </button>
                          </li>
                        ))}
                      </ul> */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Kategori
                        </label>
                        <select
                          {...register("category")}
                          name="category"
                          // value={formData.kategori}
                          // onChange={handleKategoriChange}
                          className="mt-1 p-2 border rounded-md w-full"
                        >
                          <option value="">Pilih Kategori</option>
                          <option value="Wisata Prioritas">
                            Wisata Prioritas
                          </option>
                          <option value="Wisata Alam">Wisata Alam</option>
                          <option value="Wisata Belanja">Wisata Belanja</option>
                          <option value="Wisata Kuliner">Wisata Kuliner</option>
                          <option value="Wisata Religi">Wisata Religi</option>
                          <option value="Wisata Sejarah">Wisata Sejarah</option>
                          {/* Tambahkan opsi kategori lainnya disini */}
                        </select>
                      </div>
                      {/* {formData.kategori === "Wisata Prioritas" && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Hashtag
                          </label>
                          <input
                            type="text"
                            name="hashtag"
                            // value={formData.hashtag}
                            // onChange={handleInputChange}
                            className="mt-1 p-2 border rounded-md w-full"
                          />
                        </div>
                      )} */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Gambar Utama
                        </label>
                        <input
                          {...register("gambarUtama")}
                          type="file"
                          name="gambarUtama"
                          // onChange={(e) => handleFileChange(e, "gambarUtama")}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Gambar Panjang
                        </label>
                        <input
                          multiple
                          {...register("gambarPanjang")}
                          type="file"
                          name="gambarPanjang"
                          // onChange={(e) => handleFileChange(e, "gambarPanjang")}
                          className="mt-1 p-2 border rounded-md w-full"
                        />
                      </div>
                      {/* <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Gambar Kecil
                      </label>
                      <input
                        type="file"
                        name="gambarKecil"
                        onChange={(e) => handleFileChange(e, "gambarKecil")}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div> */}
                    </div>
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

export default ModalInputData;
