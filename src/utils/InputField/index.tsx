import React, { ChangeEventHandler, FocusEventHandler } from "react";

type InputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  className: string;
  icon: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  values: string[];
  errors: string | number;
  touched: boolean;
};

const Index: React.FC<InputProps> = ({
  label = "",
  type = "",
  name = "",
  placeholder = "",
  className = "",
  icon = "",
  onChange = void (() => {}),
  onBlur = void (() => {}),
  values = "",
  errors = "",
  touched = "",
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
          value={values}
          className={`w-full bg-white border border-solid rounded-[7px] focus-visible:outline-1 focus-visible:outline focus-visible:outline-blue-500 py-[10px] px-3 pr-9 mb-5 ${className} `}
          style={{
            backgroundImage: `url(${icon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {errors && <p className="">{errors && touched && errors}</p>}
    </div>
  );
};

export default Index;
