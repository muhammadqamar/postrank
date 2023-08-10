import React from "react";
import Select from "../../../utils/Select";
import InputField from "../../../utils/InputField";
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
const ConnectProject = () => {
  return (
    <div className="pt-9 min-w-[320px]">
      <TextTag as="h6" text={"Connect your project"} className={"h6 font-normal mb-[42px]"} color={""} />
      <div className="mb-[42px]">
        <div className="flex justify-between items-center mb-5">
          <TextTag as="p" text={"Google Analytics"} className={"p-small"} color={"text-gray-700"} />
          <Link to={"/#"}>
            <Button text={"Connect"} onClick={() => {}} type={undefined} className="text-blue-500 bg-white border-2 border-solid border-blue-500 !py-[7px] !px-3" />
          </Link>
        </div>
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
              <div className="mb-5">
                <TextTag as="label" text={"Account"} className={"p-small"} color={"text-gray-700"} />
                <Select
                  className=""
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
                  dateOnCancel={() => {}}
                  multiSelect={false}
                />
              </div>
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
                />
              </div>
              <div className="mb-5">
                <TextTag as="label" text={"Property"} className={"p-small"} color={"text-gray-700"} />
                <Select
                  className=""
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
                  dateOnCancel={() => {}}
                  multiSelect={false}
                />
              </div>
              <div className="mb-5">
                <TextTag as="label" text={"GSC property"} className={"p-small"} color={"text-gray-700"} />
                <Select
                  className=""
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
                  dateOnCancel={() => {}}
                  multiSelect={false}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="pb-6">
        <Link to={"/#"}>
          <Button text={"Continue "} onClick={() => {}} type={undefined} className="w-full flex justify-center text-gray-500 bg-gray-100" />
        </Link>
      </div>
    </div>
  );
};

export default ConnectProject;
