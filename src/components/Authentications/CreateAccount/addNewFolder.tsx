import React from "react";
import InputField from "../../../utils/InputField";
import Select from "../../../utils/Select";
import { TextTag } from "../../../utils/Typography";
import Button from "../../../utils/Button";
import { Link } from "react-router-dom";
import { Formik } from "formik";
const postData = [
  {
    name: "",
  },
  {
    name: "All visas",
  },
  {
    name: "Europe visas",
  },
  {
    name: "Travel programs",
  },
  {
    name: "Domestic programs",
  },
  {
    name: "Insurance",
  },
];
const AddNewFolder = () => {
  return (
    <div className="pt-9 max-w-[320px]">
      <TextTag
        as="h6"
        text={"Add new folder"}
        className={"h6 font-normal mb-[42px]"}
        color={""}
      />
      <div className="mb-[42px]">
        <div className="mb-5">
          <Formik
            initialValues={{
              projectName: "",
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
              handleChange,
              handleBlur,
              handleSubmit,
              // isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <TextTag
                      as="label"
                      text={"Folder name"}
                      className={"p-small"}
                      color={"text-gray-700"}
                    />
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
                      inputStyle={"border-gray-300"}
                    />
                    <div className="hidden">
                      <InputField
                        label="Project name"
                        type="text"
                        name="projectName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.projectName}
                        error={errors?.projectName}
                        touch={touched.projectName}
                        icon={""}
                        placeholder={""}
                        className={"mb-5"}
                        inputStyle={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <TextTag
                    as="label"
                    text={"Folder location"}
                    className={"p-small"}
                    color={"text-gray-700"}
                  />
                  <Select
                    data={postData}
                    companiesDrop={false}
                    addIcon={""}
                    addText={""}
                    leftIcon={""}
                    rightIcon={""}
                    leftText={""}
                    onClick={() => {}}
                    isDateM={false}
                    simpleDropDown={true}
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
                    inputStyle={"border-gray-300"}
                  />
                  <TextTag
                    as="label"
                    text={
                      "e.g /blog if you want all your content inside this URL. Or something more specific like /blog/topic/"
                    }
                    className={"p-small "}
                    color={"text-gray-700"}
                  />
                </div>

                <div className="pb-6">
                  <Link to={"/#"}>
                    <Button
                      text={"Add folder"}
                      onClick={() => {}}
                      type={undefined}
                      className="w-full flex justify-center text-gray-500 bg-gray-100"
                    />
                  </Link>
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
