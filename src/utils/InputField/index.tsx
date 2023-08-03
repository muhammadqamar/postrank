import React, { ChangeEventHandler, FocusEventHandler } from "react";

type InputProps = {
  label: string | undefined;
  type: string | undefined;
  name: string | undefined;
  placeholder: string | undefined;
  className: string | undefined;
  icon: React.ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  value: string | undefined;
  error: string[] | string | undefined;
  touch: boolean | undefined;
};

const Index: React.FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  className,
  icon,
  onChange,
  onBlur,
  value,
  error,
  touch,
}) => {
  console.log("error", error);
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label ? (
        <label className="block text-xs font-normal text-gray-700">
          {label}
        </label>
      ) : (
        ""
      )}
      <div className="relative flex items-center">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`w-full p-medium !bg-white border border-solid border-gray-200 rounded-[7px] focus-visible:outline-1 focus-visible:outline ${
            error ? "border-error-300" : ""
          } py-[10px] px-3 pr-9`}
        />
        {error && touch && (
          <div
            className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none"
            // Adjust the styles for the icon container as needed
          >
            {icon}
          </div>
        )}
      </div>

      <p className="p-small text-error-300">{error && touch && error}</p>
    </div>
  );
};

export default Index;
