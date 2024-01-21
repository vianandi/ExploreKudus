const ButtonRed = ({
    type = "submit",
    className = "",
    processing,
    onClick,
    children,
  }) => {
    return (
      <button
        type={type}
        className={`box-border bg-red-600 hover:bg-red-400 active:bg-red-700 py-4 px-4 mt-1.5 rounded-[3px] text-white text-xs transition ${className}`}
        disabled={processing}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default ButtonRed;