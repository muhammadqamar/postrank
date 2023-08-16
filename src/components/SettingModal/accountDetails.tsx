import React from "react";
import { TextTag } from "../../utils/Typography";
import { Formik } from "formik";

import InputField from "../../utils/InputField";
import Button from "../../utils/Button";

import User from "../../assets/images/png/user.png";

interface FormValues {
  email: string;
  password: string;
  currentPassword: string;
  newPassword: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  currentPassword: string;
  newPassword: string;
}

const AccountDetails = () => {
  return (
    <div className="pt-9 px-8 pb-16 rounded-[20px] bg-white">
      <TextTag
        as="h5"
        text={"Account details"}
        className="font-medium mb-5"
        color={""}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
          currentPassword: "",
          newPassword: "",
        }}
        validate={(values: FormValues) => {
          const errors: FormErrors = {
            currentPassword: "",
            newPassword: "",
          };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email doesn’t exist";
          }

          if (values.password !== "correctpassword") {
            errors.password = "Wrong password";
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
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="pt-8 max-w-[512px] flex flex-col gap-[42px]"
          >
            <div className="flex flex-col gap-6 ">
              <TextTag
                as="h6"
                text={"Personal information"}
                className={"h6"}
                color={""}
              />

              <div className="flex justify-between items-center">
                <TextTag
                  as="p"
                  text={"First name"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
                <InputField
                  label=""
                  type=""
                  name=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors?.email}
                  touch={touched.email}
                  icon=""
                  placeholder={""}
                  className={"min-w-[300px]"}
                />
              </div>
              <div className="flex justify-between items-center">
                <TextTag
                  as="p"
                  text={"First name"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
                <InputField
                  label=""
                  type=""
                  name=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors?.email}
                  touch={touched.email}
                  icon=""
                  placeholder={""}
                  className={"min-w-[300px]"}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-[42px]">
              <div className="flex items-center !justify-between">
                <TextTag
                  as="p"
                  text={"Avatar"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
              </div>
              <div className="flex items-center !justify-between min-w-[300px]">
                <img src={User} alt="User's Avatar!" className="rounded-full" />
                <div className="flex gap-2">
                  <Button
                    text="Upload new"
                    onClick={() => handleSubmit()}
                    className="p-medium bg-white border-2 border-solid border-customBlue !py-[7px] !px-3 flex justify-center "
                    type={undefined}
                  />
                  <Button
                    text="Delete"
                    onClick={() => handleSubmit()}
                    className="bg-white text-gray-900 !py-[7px] !px-3 flex justify-center p-medium"
                    type={undefined}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <TextTag as="h6" text={"Email"} className={"h6"} color={""} />
              <div className="flex justify-between items-center">
                <TextTag
                  as="p"
                  text={"Email"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
                <InputField
                  label=""
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors?.email}
                  touch={touched.email}
                  icon=""
                  placeholder={""}
                  className={"min-w-[300px]"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <TextTag as="h6" text={"Password"} className={"h6"} color={""} />
              <div className="flex justify-between items-center">
                <TextTag
                  as="p"
                  text={"Current password"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
                <InputField
                  label=""
                  type="currentPassword"
                  name="currentPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                  error={errors?.currentPassword}
                  touch={touched.currentPassword}
                  icon=""
                  placeholder={""}
                  className={"min-w-[300px]"}
                />
              </div>
              <div className="flex justify-between items-center">
                <TextTag
                  as="p"
                  text={"New password"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
                <InputField
                  label=""
                  type="newPassword"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  error={errors?.newPassword}
                  touch={touched.newPassword}
                  icon=""
                  placeholder={""}
                  className={"min-w-[300px]"}
                />
              </div>
              <div className="flex justify-between items-center">
                <TextTag
                  as="p"
                  text={"Repeat new password"}
                  className={"p-medium"}
                  color={"text-gray-700"}
                />
                <InputField
                  label=""
                  type="newPassword"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  error={errors?.newPassword}
                  touch={touched.newPassword}
                  icon=""
                  placeholder={""}
                  className={"min-w-[300px]"}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                text="Save"
                onClick={() => {}}
                className="p-large !leading-5 text-white !bg-customBlue !py-[14px] !px-5 flex justify-center "
                type={undefined}
              />
              <Button
                text="Delete account"
                onClick={() => handleSubmit()}
                className="p-large !leading-5 bg-white text-gray-900 !py-[10px] !px-[0px] flex justify-center"
                type={undefined}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AccountDetails;
