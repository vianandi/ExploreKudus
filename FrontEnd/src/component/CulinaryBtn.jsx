import { Link } from 'react-router-dom';

const CulinaryBtn = ({ text, path, width, action }) => {
  return (
    <Link
      onClick={action}
      to={path}
      className={`${width} bg-[#3498DB] text-white font-regular py-3 px-8 text-[8px] md:text-[12px] text-center rounded-[40px]`}
    >
      {text}
    </Link>
  );
};

export default CulinaryBtn;