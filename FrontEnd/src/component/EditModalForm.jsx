import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditModalForm = ({ isOpen, onClose, tourismId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tourism, setTourism] = useState(null);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [category, setCategory] = useState([]);
  // const [formData, setFormData] = useState({

  // Create an axios instance with default headers
  // const api = axios.create({
  //   baseURL: "http://localhost:8080/api",
  // crossdomain: true,
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    formData,
  } = useForm();

  useEffect(() => {
    if (isOpen) {
      fetchTourismId();
    }
  }, [tourismId, isOpen]);

  useEffect(() => {
    getFasilitas();
    // console.log(selectedFacilities);
  }, []);

  useEffect(() => {
    getCategory();
    // console.log(selectedFacilities);
  }, []);

  // useEffect(() => {
  //   getTourisms();
  // }, []);

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

  // const getTourisms = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/tourism/${tourismId}`
  //     );
  //     const data = response.data;
  //     // If facilities is a string of facilities separated by commas, split it into an array
  //     if (typeof data.facilities === "string") {
  //       data.facilities = data.facilities.split(",");
  //     }
  //     setTourism(data);
  //   } catch (error) {
  //     console.error("Error fetching tourism data:", error);
  //     // Add error handling logic here, such as setting an error state or showing an error message to the user.
  //   }
  // };

  const fetchTourismId = async () => {
    if (tourismId) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/tourism/${tourismId}`
        );
        setTourism(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tourism:", error);
      }
    }
  };

  const [dataStore, setDataStore] = useState({
    name: "",
    alamat: "",
    deskripsi1: "",
    deskripsi2: "",
    deskripsi3: "",
    facilities: "",
    category_id: "",
    gambarUtama: null,
    gambarPanjang: null,
  });

  useEffect(() => {
    if (tourism) {
      setValue("name", tourism?.name);
      setValue("alamat", tourism?.alamat);
      setValue("gambarUtama", tourism?.gambarUtama);
      setValue("gambarPanjang", tourism?.gambarPanjang);
      setValue("deskripsi1", tourism?.deskripsi1);
      setValue("deskripsi2", tourism?.deskripsi2);
      setValue("deskripsi3", tourism?.deskripsi3);
      setValue("facilities", tourism?.facilities);
      setValue("category_id", tourism?.category_id);

      console.log(tourism);

      setDataStore({
        name: tourism?.name,
        alamat: tourism?.alamat,
        gambarUtama: tourism?.gambarUtama,
        gambarPanjang: tourism?.gambarPanjang,
        deskripsi1: tourism?.deskripsi1,
        deskripsi2: tourism?.deskripsi2,
        deskripsi3: tourism?.deskripsi3,
        facilities: tourism?.facilities,
        category_id: tourism?.category_id,
      });
    }
  }, [tourism, setValue]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", dataStore?.name);
    formData.append("alamat", dataStore?.alamat);
    formData.append("deskripsi1", dataStore?.deskripsi1);
    formData.append("deskripsi2", dataStore?.deskripsi2);
    formData.append("deskripsi3", dataStore?.deskripsi3);
    formData.append("category_id", dataStore?.category_id);
    formData.append("gambarUtama", dataStore?.gambarUtama);
    formData.append("gambarPanjang", dataStore?.gambarPanjang);
    formData.append("fasilitas", selectedFacilities.join(","));

    try {
      await axios.post(
        `http://localhost:8080/api/tourism/${tourismId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSelectedFacilities([]);
      console.log("Data add successfull");
      reset();
      onClose();
    } catch (error) {
      console.error("Error add data: ", error);
    }
  };

  // await axios.put(
  //   `http://localhost:8080/api/tourism/${tourismId}`,formData,
  //   formData,
  //   {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }
  // );

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataStore({
      ...dataStore,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, value } = e.target;
    const file = e.target.files[0];
    setDataStore({
      ...dataStore,
      [name]: file,
    });
  };

  const handleKategoriChange = (e) => {
    console.log(dataStore);
    const { value } = e.target;
    setDataStore({
      ...dataStore,
      category_id: value,
      // kategori: value,
      // hashtag: value === "Wisata Prioritas" ? "" : formData.hashtag,
    });
  };

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
                        {...register("name")}
                        type="text"
                        name="name"
                        // value={formData.namaWisata}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full h-[7rem]"
                        style={{ resize: "none" }}
                      />
                    </div>
                    {/* ... (form input fields) ... */}
                  </div>
                  {/* Right Col */}
                  <div className="w-1/2 p-4">
                    {/* {tourism?.facilities.map(({ id, name }, index) => (
                      <div key={id}>
                        <label htmlFor={`facility-${id}`}>
                          Facility {index + 1}
                        </label>
                        <input
                          id={`facility-${id}`}
                          type="text"
                          defaultValue={name}
                        />
                      </div>
                    ))} */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Fasilitas
                      </label>
                      <select
                        {...register("fasilitas")}
                        name="fasilitas"
                        // value={formData.kategori}
                        // onChange={handleKategoriChange}
                        onChange={handleFacilityChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      >
                        <option value="">Pilih Fasilitas</option>
                        {facilities &&
                          facilities.map(({ name, id }) => (
                            <option key={id} value={name}>
                              {name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <ul className="mb-2">
                      {selectedFacilities &&
                        selectedFacilities.map((facility, index) => (
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
                        {...register("category_id")}
                        name="kategori"
                        // value={formData.kategori}
                        onChange={handleKategoriChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      >
                        <option value="">Pilih Kategori</option>
                        {category &&
                          category.map(({ name, id }) => (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Gambar Utama
                      </label>
                      <input
                        {...register("gambarUtama")}
                        type="file"
                        name="gambarUtama"
                        onChange={handleFileChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Gambar Panjang
                      </label>
                      <input
                        {...register("gambarPanjang")}
                        type="file"
                        name="gambarPanjang"
                        onChange={handleFileChange}
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
                  onClick={onSubmit}
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
