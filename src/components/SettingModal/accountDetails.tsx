import React from "react";
import { TextTag } from "../../utils/Typography";
import { Formik } from "formik";

import InputField from "../../utils/InputField";
import Button from "../../utils/Button";

import User from "../../assets/images/png/user.png";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
  repeatNewPassword?: string;
}

const AccountDetails = () => {
  return (
    <div className="sm:pt-9 pt-4 sm:px-8 px-4 sm:pb-16 pb-8 rounded-[20px] bg-white">
      <TextTag
        as="h5"
        text={"Account details"}
        className="font-medium mb-5"
        color={""}
      />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          currentPassword: "",
          newPassword: "",
          repeatNewPassword: "",
        }}
        validate={(values: FormValues) => {
          const errors: FormErrors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email doesn’t exist";
          }

          if (!values.currentPassword) {
            errors.currentPassword = "Required";
          }
          if (!values.newPassword) {
            errors.newPassword = "Required";
          }
          if (!values.repeatNewPassword) {
            errors.repeatNewPassword = "Required";
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
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"First name"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="text"
                  name="First Name"
                  placeholder=""
                  className={"!sm:min-w-[300px] !w-56 !mb-0"}
                  icon=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  error={values.firstName}
                  touch={undefined}
                />
              </div>
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Last name"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="text"
                  name="Last Name"
                  placeholder=""
                  className={"!sm:min-w-[300px] !w-56 !mb-0"}
                  icon=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  error={values.lastName}
                  touch={undefined}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-[42px] sm:flex-nowrap flex-wrap sm:gap-0 gap-2">
              <div className="flex items-center !justify-between ">
                <TextTag
                  as="p"
                  text={"Avatar"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
              </div>
              <div className="flex items-center !justify-between !sm:min-w-[300px] !w-56 sm:gap-0 gap-2">
                <img src={User} alt="User's Avatar!" className="rounded-full" />
                <div className="flex gap-2">
                  <Button
                    text="Upload new"
                    onClick={() => handleSubmit()}
                    className="p-medium bg-white border-2 border-solid border-customBlue !py-[7px] sm:px-3 !px-[7px] flex justify-center "
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
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Email"}
                  className={"p-medium"}
                  color={"text-textGray"}
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
                  className={"!sm:min-w-[300px] !w-56 !mb-0"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <TextTag as="h6" text={"Password"} className={"h6"} color={""} />
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Current password"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="password"
                  name="currentPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                  error={errors?.currentPassword}
                  touch={touched.currentPassword}
                  icon=""
                  placeholder={""}
                  className={"!sm:min-w-[300px] !w-56 !mb-0"}
                />
              </div>
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"New password"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.newPassword}
                  error={errors?.newPassword}
                  touch={touched.newPassword}
                  icon=""
                  placeholder={""}
                  className={"!sm:min-w-[300px] !w-56 !mb-0"}
                />
              </div>
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Repeat new password"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="password"
                  name="repeatNewPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatNewPassword}
                  error={errors?.repeatNewPassword}
                  touch={touched.repeatNewPassword}
                  icon=""
                  placeholder={""}
                  className={"!sm:min-w-[300px] !w-56 !mb-0"}
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
