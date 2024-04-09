import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Gif from "../../assets/Web/Reference-Nya-GIF-unscreen.gif";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmedPassword: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required!")
        .min(5, "Must be 5 characters or more!"),
      email: Yup.string()
        .required("Required!")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email!"
        ),
      password: Yup.string()
        .required("Required!")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7 to 19 characters and contains at least one letter, one number and one special character!"
        ),
      confirmedPassword: Yup.string()
        .required("Required!")
        .oneOf([Yup.ref("password"), null], "Password must match!"),
      phoneNumber: Yup.string()
        .required("Required!")
        .matches(
          /^(0|84)(2(0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[0-9]|5[124-9]|6[0369]|7[0-7]|8[0-9]|9[012346789])|3[2-9]|5[25689]|7[06-9]|8[0-9]|9[012346789])([0-9]{7})$/,
          "Must be a valid phone number!"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);

      Swal.fire({
        title: "Sign up successfull, Welcome to NerdCard :3",
        width: 600,
        padding: "3em",
        color: "#fefeff",
        background: `#fff  url('https://i.pinimg.com/564x/35/cc/cf/35cccf86ff4648d7c96d5e0acbc7b68b.jpg')`,
        backdrop: `
              rgba(0,0,123,0.4)
              url(${Gif})
              left bottom
              no-repeat
            `,
      });
    },
  });

  return (
    <section className="text-[12px] relative my-14 font-semibold md:my-6 md:grid md:grid-cols-3 md:items-center md:text-[1rem]">
      <form
        className="flex px-5 py-10 gap-[0.5rem] bg-white text-black rounded-xl flex-col md:col-span-1 md:col-start-2"
        onSubmit={formik.handleSubmit}
      >
        <header className="text-blue-400 text-[1.5rem] text-center font-bold">
          Sign Up
        </header>
        <label className="mt-5" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="input"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className="text-[0.75rem] text-red-500">{formik.errors.name}</p>
        )}
        <label className="mt-5" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="input"
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="text-[0.75rem] text-red-500">{formik.errors.email}</p>
        )}
        <label className="mt-5" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="input"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="text-[0.75rem] text-red-500">
            {formik.errors.password}
          </p>
        )}
        <label className="mt-5" htmlFor="confirmedPassword">
          Confirm Password
        </label>
        <input
          type="text"
          name="confirmedPassword"
          id="confirmedPassword"
          className="input"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && (
          <p className="text-[0.75rem] text-red-500">
            {formik.errors.confirmedPassword}
          </p>
        )}
        <label className="mt-5" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          className="input"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phoneNumber && (
          <p className="text-[0.75rem] text-red-500">
            {formik.errors.phoneNumber}
          </p>
        )}
        <button
          className="cursor-pointer p-[0.5rem] text-[1rem] bg-blue-400 self-end rounded-xl text-white"
          type="submit"
        >
          Continue
        </button>
      </form>
    </section>
  );
};

export default Signup;
