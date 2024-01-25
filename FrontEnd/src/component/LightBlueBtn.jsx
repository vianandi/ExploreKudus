import { Link } from "react-router-dom";

const LightBlueBtn = ({ text, path, width, action }) => {
  return (
    <Link
      onClick={action}
      to={path}
      className="flex justify-center items-center w-[100px] sm:w-[250px] h-[25px] sm:h-[40px] bg-[#3498DB] text-white font-regular text-[8px] md:text-[16px] rounded-[40px] transition delay-100 hover:text-[#3498DB] hover:bg-white hover:border hover:border-[#3498DB]"
    >
      {text}
    </Link>
  );
};

export default LightBlueBtn;
