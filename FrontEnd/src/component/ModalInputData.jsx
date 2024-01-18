import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalInputData = ({ isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [category, setCategory] = useState([]);

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
    getFasilitas();
    // console.log(selectedFacilities);
  }, []);
  useEffect(() => {
    getCategory();
    // console.log(selectedFacilities);
  }, []);

  const getFasilitas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/fasilitas");
      setFacilities(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/category");
      setCategory(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

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
      formData.append("category_id", data.category);
      formData.append("fasilitas", selectedFacilities.join(","));

      console.log(data);
      console.log(data.category);

      await axios.post("http://localhost:8080/api/tourism", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSelectedFacilities([]);
      console.log("Data add successfull");
      reset();
    } catch (error) {
      console.error("Error add data: ", error);
    }
  };

  const handleFacilityChange = (event) => {
    const selectedFacility = event.target.value;
    
    setSelectedFacilities((prevFacilities) => [
      ...prevFacilities,
      selectedFacility,
    ]);
  };


  const handleDeleteFacility = (index) => {
    setSelectedFacilities((prevFacilities) => {
      const updatedFacilities = [...prevFacilities];
      updatedFacilities.splice(index, 1);
      return updatedFacilities;
    });
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
                        <select
                          {...register("fasilitas")}
                          name="fasilitas"
                          onChange={handleFacilityChange}
                          // value={formData.kategori}
                          // onChange={handleKategoriChange}
                          className="mt-1 p-2 border rounded-md w-full text-gray-500"
                        >
                          <option value="">Pilih Fasilitas</option>
                          {facilities && facilities.map(({name, id}) => (
                            <option key={id} value={name}>{name}</option>
                          ))}
                          {/* <option value="Aksesibilitas Difabel">
                            Aksesibilitas Difabel
                          </option>
                          <option value="Camping Ground">Camping Ground</option>
                          <option value="Food court">Food court</option>
                          <option value="Kafe">Kafe</option>
                          <option value="Kantor informasi wisata">
                            Kantor informasi wisata
                          </option>
                          <option value="Klinik">Klinik</option>
                          <option value="Kolam renang">Kolam renang</option>
                          <option value="Musholla">Musholla</option>
                          <option value="Penginapan">Penginapan</option>
                          <option value="Penyewaan Sepeda">
                            Penyewaan Sepeda
                          </option>
                          <option value="Peta dan brosur informatif">
                            Peta dan brosur informatif
                          </option>
                          <option value="Pos Keamanan Wisata">
                            Pos Keamanan Wisata
                          </option>
                          <option value="Pos Pemadam Kebakaran">
                            Pos Pemadam Kebakaran
                          </option>
                          <option value="Ruang konferensi">
                            Ruang konferensi
                          </option>
                          <option value="Taman bermain anak">
                            Taman bermain anak
                          </option>
                          <option value="Taman rekreasi">Taman rekreasi</option>
                          <option value="Toilet dan Fasilitas Difabel">
                            Toilet dan Fasilitas Difabel
                          </option>
                          <option value="Wifi">Wifi</option>  */}
                        </select>
                      </div>
                      <ul className="mb-2">
                        {selectedFacilities && selectedFacilities.map((facility, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center mr-2"
                          >
                            {facility}
                            <button
                              className="text-[#CD0404]"
                              onClick={() => handleDeleteFacility(index)}
                            >
                              X
                            </button>
                          </li>
                        ))}
                      </ul>
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
                          {category && category.map(({name, id}) => (
                            <option key={id} value={id}>{name}</option>
                          ))}
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
