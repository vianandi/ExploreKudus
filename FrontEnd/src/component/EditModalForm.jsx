import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditModalForm = ({ isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  const [formData, setFormData] = useState({
    namaWisata: "",
    deskripsi1: "",
    deskripsi2: "",
    deskripsi3: "",
    fasilitas: "",
    kategori: "",
    hashtag: "",
    gambar: null,
    fasilitasList: [],
    hashtagList: [],
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     gambar: file,
  //   });
  // };

  // const handleKategoriChange = (e) => {
  //   const { value } = e.target;
  //   setFormData({
  //     ...formData,
  //     kategori: value,
  //     hashtag: value === "Wisata Prioritas" ? "" : formData.hashtag,
  //   });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    isOpen && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mt-[120px] mx-auto max-w-[1440px]">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Edit Data Pariwisata</h3>
              </div>
              {/*body*/}
              <div className="flex p-6 flex-auto">
                <div className="flex">
                  {/* Left Col */}
                  <div className="w-1/2 p-4  w-[1000px]">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Nama Wisata
                      </label>
                      <input
                        type="text"
                        name="namaWisata"
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
                        type="text"
                        name="fasilitas"
                        // value={formData.fasilitas}
                        // onChange={handleInputChange}
                        // onKeyDown={handleEnterPress}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                    <select
                      {...register("fasilitas")}
                      name="fasilitas"
                      // value={formData.kategori}
                      // onChange={handleKategoriChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    >
                      <option value="">Pilih Fasilitas</option>
                      <option value="Aksesibilitas Difabel">
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
                      <option value="Penyewaan Sepeda">Penyewaan Sepeda</option>
                      <option value="Peta dan brosur informatif">
                        Peta dan brosur informatif
                      </option>
                      <option value="Pos Keamanan Wisata">
                        Pos Keamanan Wisata
                      </option>
                      <option value="Pos Pemadam Kebakaran">
                        Pos Pemadam Kebakaran
                      </option>
                      <option value="Ruang konferensi">Ruang konferensi</option>
                      <option value="Taman bermain anak">
                        Taman bermain anak
                      </option>
                      <option value="Taman rekreasi">Taman rekreasi</option>
                      <option value="Toilet dan Fasilitas Difabel">
                        Toilet dan Fasilitas Difabel
                      </option>
                      <option value="Wifi">Wifi</option>
                    </select>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Kategori
                      </label>
                      <select
                        name="kategori"
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
                    {formData.kategori === "Wisata Prioritas" && (
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
                    )}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Gambar Utama
                      </label>
                      <input
                        type="file"
                        name="gambar"
                        // onChange={handleFileChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Gambar Panjang
                      </label>
                      <input
                        type="file"
                        name="gambar"
                        // onChange={handleFileChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Gambar Kecil
                      </label>
                      <input
                        type="file"
                        name="gambar"
                        // onChange={handleFileChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onClose}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
};

export default EditModalForm;
