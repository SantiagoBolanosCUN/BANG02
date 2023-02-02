import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalPreguntas = ({ isVisible }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Dirección de correo invalida.")
        .required("El correo es obligatorio."),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
    },
  });

  const closeModal = (modal) => {
    const element = document.getElementById("modalPreguntas");
    element.remove();
  };

  if (!isVisible) return null;
  {
  }
  return (
    <div
      id="modalPreguntas"
      className=" fixed inset-0 bg-black bg-opacity-25 backdrup-blur-sm flex justify-center items-center"
    >
      <form className="bg-white w-auto m-12">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>01</div>
          <div className="flex-1 text-gray-700  p-20">
            <h1 className="text-3xl pb-2 font-latoBold">
              Let's get started 👋
            </h1>
            <p className="text-lg  text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6 ">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <p className="text-sm font-latoBold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>

                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-auto focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Country input field */}
              <div className="pb-4">
                <label
                  htmlFor="country"
                  className="block font-latoBold text-sm pb-2"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
              {/* Terms of service*/}
              <div className="pb-4">
                <label
                  htmlFor="terms"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start learning today!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalPreguntas;
