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
    "inline-flex items-center justify-center py-2 px-4 rounded-full",
    {
      "w-full": fullWidth,
      "bg-gray-300 active:shadow-inner active:shadow-slate-950 flex justify-center active:bg-gray-400 text-gray-800 font-bold":
        variant === "primary",
      "bg-red-500 active:shadow-inner active:shadow-slate-950 flex justify-center active:bg-red-700 text-white font-bold":
        variant === "danger",
      "bg-green-500 active:shadow-inner active:shadow-slate-950 flex justify-center active:bg-green-700 text-white font-bold":
        variant === "success",
      "bg-white active:shadow-inner flex justify-center active:opacity-50 font-bold rounded-md text-blue-700 font-extrabold uppercase":
        variant === "digital",
      "bg-yellow-500 active:shadow-inner flex justify-center active:opacity-50 font-bold rounded-md text-blue-700 font-extrabold uppercase":
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
