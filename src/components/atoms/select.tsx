import React, { useState, useRef, useEffect } from "react";
import { InputField } from "./input";

interface SelectProps {
  options: string[];
  placeholder?: string;
  className?: string;
  clearFalse?: boolean;
  onInput?: (selectedOption: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  className,
  onInput,
  clearFalse,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onInput) {
      onInput(value);
    }
    const filtered = options.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
    setFilteredOptions(filtered);
    setShowOptions(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowOptions(false);
    if (onInput) {
      onInput(option);
    }
  };

  const handleFocus = () => {
    setFilteredOptions(options);
    setShowOptions(true);
  };

  useEffect(() => {
    if (!showOptions && clearFalse) {
      if (!options.some((option) => option.toLowerCase() === inputValue.toLowerCase())) {
        setInputValue("");
      }
    }
  }, [showOptions, inputValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef} className="relative">
      <InputField
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        label={placeholder || "Select an option"}
        className={`p-2 ${className && className}`}
      />
      {showOptions && filteredOptions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-cgray-100 dark:bg-cblack-200 text-black dark:text-white z-10 max-h-40 overflow-y-auto mt-1 rounded shadow-lg">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-cgray-300 hover:dark:bg-cblack-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
