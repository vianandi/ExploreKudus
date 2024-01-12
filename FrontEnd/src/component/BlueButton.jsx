import { Link } from 'react-router-dom';

const BlueButton = ({ text, path, width, action }) => {
  return (
    <Link
      onClick={action}
      to={path}
      className={`${width} bg-[#004AAD] text-white font-semibold py-2.5 px-3.5 text-center rounded-[40px]`}
    >
      {text}
    </Link>
  );
};

export default BlueButton;