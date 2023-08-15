import React, { useState } from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button";
import { TextTag } from "../../../utils/Typography";
import ConfirmPassword from "./confirmPassword";

interface FormValues {
  email: string;
}

interface FormErrors {
  email?: string;
}

const LoginForm = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16">
      <div className="w-80">
        <TextTag
          as="h6"
          text={"Reset password"}
          className={"h6 mb-[42px]"}
          color={""}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values: FormValues) => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
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
            <form onSubmit={handleSubmit}>
              <InputField
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors?.email}
                touch={touched.email}
                icon={""}
                placeholder={""}
                className={""}
              />

              <Button
                text="Reset password"
                onClick={() => setModalVisible(true)}
                className="w-full !bg-customBlue !text-white flex justify-center mt-[42px]"
                type={undefined}
              />
              {modalVisible && (
                <div className="fixed inset-0 flex justify-center bg-white">
                  <ConfirmPassword />
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
      <div className="flex gap-2">
        <TextTag
          as="p"
          text={"Already a member?"}
          className={"p-small font-medium "}
          color={""}
        />
        <a className="p-small font-medium !text-customBlue" href="#">
          Login now!
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
