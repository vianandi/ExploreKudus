import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white sm:px-[140px]">
      <div className="container mx-auto py-8">
        {/* Baris Pertama */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4">
            <img
              src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700662610/logooo_kuunpm.png"
              alt="Explore Kudus Logo"
              className="h-[50px] ml-[5px] mt-[20px] sm:ml-[35px] sm:h-[65px]"
            />
            <p className="text-[#8D8BA7] w-[294px] pt-5 text-justify">
              "Explore Kudus" adalah pengalaman unik bertema Religi dan Wisata
              Alam. Kudus, terletak di Jawa Tengah, Indonesia. Jadi kemasi tas
              Anda dan bersiaplah untuk menjelajahi keindahan Kudus!
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-bold mb-2 text-[#004AAD]">Tentang</h3>
            <div className="text-[#9795B5] text-[16px]">
              <p className=" py-1">
                Jalan GOR Wergu Wetan, Kec. Kota Kab. Kudus Provinsi Jawa Tengah
              </p>
              <p className=" py-1">
                <span className="font-bold">Phone</span> : (0291) 435958
              </p>
              <p className=" py-1">
                <span className="font-bold">Email</span> :
                disbudpar@kuduskab.go.id
              </p>
              <p className=" py-1">
                <span className="font-bold">Jam Pelayanan</span> :{" "}
              </p>
              <p>Senin s/d Kamis (07.00 – 15.30 WIB)</p>
              <p>Jum’at (06.30 – 11.30 WIB)</p>
            </div>
          </div>
          <div className="w-full md:w-1/3  mb-4">
            <h3 className="text-lg font-bold mb-2 text-[#004AAD]">Link Terkait</h3>
            <div className="text-[#9795B5]">
              <p className=" py-1">Website Kabupaten Kudus</p>
              <p className=" py-1">Website Dinas Kesehatan Kudus</p>
              <p className=" py-1">
                Website Dinas Pemuda dan Olahraga Provinsi Jateng
              </p>
              <p className=" py-1">
                Website Dinas Pendidikan dan Kebudayaan Provinsi Jateng
              </p>
              <p className=" py-1">
                Website Kementrian Pendidikan dan Kebudayaan{" "}
              </p>
              <p className=" py-1">
                Website Kementrian Pariwisata dan Ekonomi Kreatif{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            <div className="border-t border-[#004AAD] xs:w-[350px] sm:w-[1220px] mx-auto my-4"></div>
          </div>
        </div>

        {/* Baris Kedua */}
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-[#767494]">
              Copyright © 2023 Dinas Kebudayaan dan Pariwisata Kabupaten Kudus |
              All Rights Reserved |
              <span className="text-[#ADABC3]"> Terms and Conditions</span> |
              <span className="text-[#ADABC3]"> Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
