import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button/index";

import User from "../../../assets/images/png/user.png";
import { TextTag } from "../../../utils/Typography";

const PersonalInformation = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16">
      <div className="w-80">
        <TextTag
          as="h6"
          text={"Login to your account"}
          className={"h6 mb-[42px]"}
          color={""}
        />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
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
                label="First name"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={errors?.firstName}
                touch={touched.firstName}
                icon={""}
                placeholder={""}
                className={"mb-5"}
              />
              <InputField
                label="Last name"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={errors?.lastName}
                touch={touched.lastName}
                icon={""}
                placeholder={""}
                className={"mb-5"}
              />
              <div className="flex items-center justify-between mb-[42px]">
                <div className="flex items-center gap-[22px]">
                  <TextTag
                    as="p"
                    text={"Avatar"}
                    className={"p-small"}
                    color={"text-gray-700"}
                  />
                  <img
                    src={User}
                    alt="User's Avatar!"
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    text="Upload new"
                    onClick={() => handleSubmit()}
                    className="p-medium bg-white border-2 border-solid border-customBlue !py-[7px] !px-3 flex justify-center "
                    type={undefined}
                  />
                  <Button
                    text="Delete"
                    onClick={() => handleSubmit()}
                    className="bg-white text-gray-900 !py-[7px] !px-3  flex justify-center "
                    type={undefined}
                  />
                </div>
              </div>
              <Button
                text="Continue"
                onClick={() => handleSubmit()}
                className="w-full !bg-customBlue text-white flex justify-center mb-4"
                type={undefined}
              />
              {/* <Button
                text="Skip for now"
                onClick={() => handleSubmit()}
                className="w-full p-large font-medium bg-white text-customBlue flex justify-center rounded-full"
                type={undefined}
              /> */}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInformation;
