/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { TextTag } from "../../../utils/Typography";
import Button from "../../../utils/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import DropDown from "./projectSelect";

// const postData = [
//   {
//     option: '',
//   },
//   {
//     option: 'All visas',
//   },
//   {
//     option: 'Europe visas',
//   },
//   {
//     option: 'Travel programs',
//   },
//   {
//     option: 'Domestic programs',
//   },
//   {
//     option: 'Insurance',
//   },
// ];

interface ConnectProject {
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

interface FormValues {
  color1: object;
  color2: object;
  color3: object;
}

interface FormErrors {
  color1?: string;
  color2?: string;
  color3?: string;
}

const ConnectProject: React.FC<ConnectProject> = ({ setActiveTab }) => {
  const [accountdata, setaccountdata] = useState([]);
  const accountDetails: any = useSelector(
    (state: RootState) => state.accountDetails,
  );
  console.log("accountDetails", accountDetails);
  useEffect(() => {
    if (accountDetails?.userAccountDetails) {
      setaccountdata(accountDetails?.userAccountDetails?.items);
    }
  }, [accountDetails?.userAccountDetails]);
  return (
    <div className="pt-[87px] sm:w-[320px] w-full sm:px-0 px-5 min-h-screen mx-auto">
      <TextTag
        as="h6"
        text={"Connect your project"}
        className={"h6 mb-[42px]"}
        color={""}
      />
      <div className="mb-[42px]">
        <div className="flex justify-between items-center mb-5">
          <TextTag
            as="p"
            text={"Google Analytics"}
            className={"p-small"}
            color={"text-textGray"}
          />
          <Link to={"/#"}>
            <Button
              text={"Connect"}
              onClick={() => {}}
              type={undefined}
              className="p-medium !font-medium text-customBlue bg-white border-2 border-solid border-customBlue !py-[7px] !px-3"
            />
          </Link>
        </div>
        <Formik
          initialValues={{
            color1: {},
            color2: {},
            color3: {},
          }}
          validate={(values: FormValues) => {
            const errors: FormErrors = {};
            if (!values.color1) {
              errors.color1 = "Required";
            }
            if (!values.color2) {
              errors.color2 = "Required";
            }
            if (!values.color3) {
              errors.color3 = "Required";
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

            // handleChange,
            // handleBlur,
            handleSubmit,
            setFieldValue, // isSubmitting,
            /* and other goodies */
          }: any) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <TextTag
                  as="label"
                  text={"Account"}
                  className={"p-small"}
                  color={"text-textGray"}
                />
                <DropDown
                  data={accountdata}
                  className=""
                  name="color1"
                  value={values.color1}
                  onChange={(postData) => {
                    setFieldValue("color1", postData);
                  }}
                />

                {/* {errors.color1 && touched.color1 && <p>{errors.color1}</p>} */}
              </div>

              <div className="mb-5">
                <TextTag
                  as="label"
                  text={"Property"}
                  className={"p-small"}
                  color={"text-textGray"}
                />
                <DropDown
                  data={values.color1.webProperties || []}
                  className=""
                  name="color2"
                  value={values.color2}
                  onChange={(postData) => setFieldValue("color2", postData)}
                />
                {/* <TextTag as="label" text={errors.color2 && touched.color2 && errors.color2} className={'p-small'} color={'text-error-300'} /> */}
              </div>
              <div className="mb-5">
                <TextTag
                  as="label"
                  text={"GSC property"}
                  className={"p-small"}
                  color={"text-textGray"}
                />
                <DropDown
                  data={values.color2.profiles}
                  className=""
                  name="color3"
                  value={values.color3}
                  onChange={(postData) => setFieldValue("color3", postData)}
                />
                {/* <TextTag as="label" text={errors.color3 && touched.color3 && errors.color3} className={'p-small'} color={'text-error-300'} /> */}
              </div>
              <div className="pt-[22px]">
                <Button
                  text={"Continue "}
                  onClick={() => setActiveTab("createNewProject")}
                  type="submit"
                  className="w-full !font-medium !leading-5 flex justify-center text-gray-500 !bg-lightGray"
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConnectProject;
