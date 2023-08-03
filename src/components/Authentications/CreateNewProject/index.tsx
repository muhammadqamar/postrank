import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button/index";

const LoginForm = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16">
      <div className="w-80">
        <h6 className="h6 font-normal mb-[42px]">Create a new project</h6>
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
                <p className="p-small text-gray-700">Logo</p>
                <Button
                  text="Upload"
                  onClick={() => handleSubmit()}
                  className="bg-white border-2 border-solid border-blue-500 !py-[7px] !px-3 flex justify-center mb-4 "
                  type={undefined}
                />
              </div>
              <Button
                text="Continue"
                onClick={() => handleSubmit()}
                className="w-full bg-gray-100 text-gray-500 flex justify-center mb-4"
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
