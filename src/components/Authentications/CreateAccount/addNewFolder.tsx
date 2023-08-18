import React from "react";
// import { Link } from "react-router-dom";
import { Formik } from "formik";

import InputField from "../../../utils/InputField";
import { TextTag } from "../../../utils/Typography";
import Button from "../../../utils/Button";
import DropDown from "./projectSelect";

const postData = [
  {
    option: "",
  },
  {
    option: "All visas",
  },
  {
    option: "Europe visas",
  },
  {
    option: "Travel programs",
  },
  {
    option: "Domestic programs",
  },
  {
    option: "Insurance",
  },
];

interface FormValues {
  color: string;
}

interface Option {
  option: string;
}

interface FormErrors {
  color?: Option | string;
}

const AddNewFolder = () => {
  return (
    <div className="pt-9 max-w-[320px]">
      <TextTag
        as="h6"
        text={"Let's Create a Content Folder"}
        className={"h6 mb-[42px]"}
        color={""}
      />
      <div className="mb-[42px]">
        <div className="mb-5">
          <Formik
            initialValues={{
              folderName: "",
              color: "",
            }}
            validate={(values: FormValues) => {
              const errors: FormErrors = {};
              if (
                !values.color ||
                (typeof values.color === "object" &&
                  values?.color["option"] === "")
              ) {
                errors.color = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              // handleChange,
              // handleBlur,
              handleSubmit,
              setFieldValue,
              // isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mb-5">
                    <InputField
                      label={undefined}
                      type={undefined}
                      name={undefined}
                      placeholder={undefined}
                      className="mb-0"
                      icon={undefined}
                      onChange={undefined}
                      onBlur={undefined}
                      value={undefined}
                      error={undefined}
                      touch={undefined}
                    />
                    <TextTag
                      as="p"
                      text={"e.g My blog posts"}
                      className={"p-small"}
                      color={"text-textGray"}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <TextTag
                    as="label"
                    text={"URL"}
                    className={"p-small"}
                    color={"text-textGray"}
                  />
                  <DropDown
                    className=""
                    data={postData}
                    name="color"
                    value={values.color}
                    onChange={(postData) => setFieldValue("color", postData)}
                  />
                  <TextTag
                    as="label"
                    text={errors.color && touched.color && errors.color}
                    className={"p-small"}
                    color={"text-error-300"}
                  />
                </div>

                <div className="mb-5">
                  <InputField
                    label={undefined}
                    type={undefined}
                    name={undefined}
                    placeholder={undefined}
                    className={undefined}
                    icon={undefined}
                    onChange={undefined}
                    onBlur={undefined}
                    value={undefined}
                    error={undefined}
                    touch={undefined}
                  />
                  <TextTag
                    as="label"
                    text={
                      "e.g /blog if you want all your content inside this URL. Or something more specific like /blog/topic/"
                    }
                    className={"p-small "}
                    color={"text-textGray"}
                  />
                </div>

                <div className="pb-6">
                  {/* <Link to={"/#"}> */}
                  <Button
                    text={"Add folder"}
                    onClick={() => {}}
                    type="submit"
                    className="w-full flex justify-center text-gray-500 !bg-lightGray"
                  />
                  {/* </Link> */}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddNewFolder;
