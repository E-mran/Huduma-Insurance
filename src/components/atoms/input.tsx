import { useRef, useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputFieldProps extends InputProps {
  label: string;
}

export const InputGrid = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`grid md:grid-cols-2 md:gap-6 ${className}`}>{children}</div>;

export const InputField = ({ label, className = "", ...props }: InputFieldProps) => (
  <div className="relative z-0 w-fit group">
    <input
      {...props}
      className={`block py-2.5 px-0 peer border-transparent bg-transparent border-b-black dark:border-b-cgray-400 border-b-[1px] ${className}`}
      placeholder=" "
    />
    <label
      htmlFor={props.id || props.name}
      className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 peer-focus:top-0 -z-10 origin-[0] peer-focus:left-0 dark:peer-focus:text-cwhite-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
    >
      {label}
    </label>
  </div>
);

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface TextAreaFieldProps extends TextAreaProps {
  label: string;
}

export const TextAreaField = ({ label, className = "", ...props }: TextAreaFieldProps) => (
  <div className="relative z-0 w-full group">
    <textarea {...props} className={`block py-2.5 px-0 w-full peer ${className}`} placeholder=" " />
    <label
      htmlFor={props.id || props.name}
      className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 dark:peer-focus:text-cwhite-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);
