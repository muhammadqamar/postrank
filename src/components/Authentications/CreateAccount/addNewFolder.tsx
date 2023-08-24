import React from 'react';
import { Formik } from 'formik';

import InputField from '../../../utils/InputField';
import { TextTag } from '../../../utils/Typography';
import Button from '../../../utils/Button';
import DropDown from './projectSelect';

const postData = [
  {
    option: '',
  },
  {
    option: 'All visas',
  },
  {
    option: 'Europe visas',
  },
  {
    option: 'Travel programs',
  },
  {
    option: 'Domestic programs',
  },
  {
    option: 'Insurance',
  },
];

interface AddNewFolder {
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

interface FormValues {
  text: string;
}

interface FormErrors {
  text?: string;
}

const AddNewFolder: React.FC<AddNewFolder> = ({ setActiveTab }) => {
  return (
    <div className="pt-[87px] max-w-[320px] min-h-screen mx-auto">
      <TextTag as="h6" text={"Let's Create a Content Folder"} className={'h6 mb-[42px]'} color={''} />
      <div className="mb-[42px]">
        <div className="mb-5">
          <Formik
            initialValues={{
              text: '',
            }}
            validate={(values: FormValues) => {
              const errors: FormErrors = {};
              if (!values.text) {
                errors.text = 'Required';
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
              setFieldValue,
              // isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mb-5">
                    <InputField
                      label="Folder name"
                      type="text"
                      name="Folder name"
                      placeholder=""
                      className="!mb-0"
                      icon=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={undefined}
                      error={undefined}
                      touch={undefined}
                    />
                    <TextTag as="label" text={errors.text && touched.text && errors.text} className={'p-small'} color={'text-error-300'} />
                    <TextTag as="p" text={'e.g My blog posts'} className={'p-small'} color={'text-textGray'} />
                  </div>
                </div>
                <div className="mb-2">
                  <TextTag as="label" text={'URL'} className={'p-small'} color={'text-textGray'} />
                  {/* <DropDown
                    className=""
                    data={postData}
                    name="color"
                    value={values}
                    onChange={(postData) => setFieldValue("color", postData)}
                  /> */}
                </div>
                <div className="mb-[42px]">
                  <InputField
                    label=""
                    type="text"
                    name="Blog"
                    placeholder=""
                    className="!mb-0"
                    icon=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={undefined}
                    error={undefined}
                    touch={undefined}
                  />
                  <TextTag
                    as="label"
                    text={'e.g /blog if you want all your content inside this URL. Or something more specific like /blog/topic/'}
                    className={'p-small '}
                    color={'text-textGray'}
                  />
                </div>

                <div className="pb-6">
                  {/* <Link to={"/#"}> */}
                  <Button text={'Add folder'} onClick={() => setActiveTab('success')} type="submit" className="w-full flex justify-center text-gray-500 !bg-lightGray" />
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
