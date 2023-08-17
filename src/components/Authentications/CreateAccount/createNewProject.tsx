import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button/index";
import { TextTag } from "../../../utils/Typography";

const CreateNewProject = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16">
      <div className="w-80">
        <TextTag
          as="h6"
          text={"Create a new project"}
          className={"h6s mb-[42px]"}
          color={""}
        />
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
              <div className="flex items-center justify-between mb-[42px]">
                <TextTag
                  as="p"
                  text={"Logo"}
                  className={"p-small "}
                  color={"text-textGray"}
                />
                <Button
                  text="Upload"
                  onClick={() => handleSubmit()}
                  className="bg-white border-2 border-solid border-customBlue !py-[7px] !px-3 flex justify-center mb-4 "
                  type={undefined}
                />
              </div>
              <Button
                text="Continue"
                onClick={() => handleSubmit()}
                className="w-full !bg-lightGray text-secondaryGray flex justify-center mb-4"
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewProject;
