import BlueButton from "./BlueButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-16">
      <div className="flex sm:w-1/2 flex-col gap-1.5">
        <h1 className="text-blue-800 text-[25px] md:text-[40px] leading-snug font-semibold">
          Dinas Kebudayaan dan Pariwisata Kabupaten Kudus
        </h1>
        <p className="font-light mb-5 sm:text-[20px] text-[12px] text-[#8C8C8C] max-w-[550px]">
          "Explore Kudus" adalah pengalaman unik yang Religi dan Wisata Alam.
          Kudus, terletak di Jawa Tengah, Indonesia. Jadi kemasi tas Anda dan
          bersiaplah untuk menjelajahi keindahan Kudus!
        </p>
        {/* <div className="my-4 sm:my-0 sm:mt-5">
          <ul className="flex flex-col-2 sm:flex-row gap-3 sm:gap-12">
            <BlueButton path="/" text="Jelajahi" width={"w-full sm:w-1/3"} />
          </ul>
        </div> */}
      </div>
      <div className="w-full flex-1 h-full">
        <img
          className="w-full h-full object-cover rounded-md "
          src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700745324/Logo_WI_Final_20092017_ab0ba6b8db_aflzlr.png"
          alt="hero-banner"
        />
      </div>
    </section>
  );
};

export default HeroSection;
