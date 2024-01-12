import { Link } from 'react-router-dom';

const LightBlueBtn = ({ text, path, width, action }) => {
  return (
    <Link
      onClick={action}
      to={path}
      className={`${width} bg-[#3498DB] text-white font-regular py-2.5 px-12 text-[8px] md:text-[16px] text-center rounded-[40px] transition delay-100 hover:text-[#3498DB] hover:bg-white hover:border hover:border-[#3498DB]`}
    >
      {text}
    </Link>
  );
};

export default LightBlueBtn;