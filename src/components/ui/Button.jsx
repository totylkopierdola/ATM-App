import React from "react";
import cn from "classnames";

const Button = ({
  onClick,
  type,
  className,
  disabled,
  ariaLabel,
  children,
  fullWidth,
  variant,
}) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center h-10 rounded-full",
    {
      "w-full": fullWidth,
      "bg-gray-300 active:shadow-inner active:shadow-slate-950 py-4 px-4 flex justify-center active:bg-gray-400 text-gray-800 font-bold":
        variant === "primary",
      "bg-red-500 active:shadow-inner active:shadow-slate-950 py-4 px-4 flex justify-center active:bg-red-700 text-white font-bold":
        variant === "danger",
      "bg-green-500 active:shadow-inner active:shadow-slate-950 py-4 px-4 flex justify-center active:bg-green-700 text-white font-bold":
        variant === "success",
      "bg-blue-500 cursor-pointer font-bold text-white py-1 mt-2 transition duration-150 px-4 hover:bg-green-500 uppercase":
        variant === "digital",
      "bg-white shadow-md shadow text-slate-500 cursor-pointer font-bold text-white py-1 mt-2 px-4 transition duration-150 hover:bg-slate-900/10 uppercase ":
        variant === "digital-secondary",
    },
    className
  );

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClasses}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
