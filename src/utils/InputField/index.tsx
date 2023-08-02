import React, { ChangeEventHandler, FocusEventHandler } from "react";

type InputProps = {
  label: string | undefined;
  type: string | undefined;
  name: string | undefined;
  placeholder: string | undefined;
  className: string | undefined;
  icon: string | undefined;
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
  return (
    <div className="relative">
      {label ? (
        <label className="block text-xs font-normal text-gray-700 mb-1">
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
          className={`w-full border border-solid rounded-[7px] focus-visible:outline-1 focus-visible:outline focus-visible:outline-blue-500 py-[10px] px-3 pr-9 ${className} `}
          style={{
            backgroundImage: `url(${icon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <p className="">{error && touch && error}</p>
    </div>
  );
};

export default Index;
