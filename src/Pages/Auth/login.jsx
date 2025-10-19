import Layout from "Layouts/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "Redux/Slices/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const state = useSelector((state) => state.auth);

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSigninDetails({
      ...signinDetails,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    // handle form submission logic here
    const response = await dispatch(signin(signinDetails));
    if (response?.payload?.data) {
      // navigate to some other page
      navigator("/dashboard");
    }
    resetForm();
    console.log(response);
  }

  function resetForm() {
    setSigninDetails({
      email: "",
      password: "",
    });
  }
  useEffect(() => {
    console.log(state);
    if (state.token) {
      navigator("/dashboard");
    }
  }, []);

  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center h-screen gap-4">
        <div className="">
          <h1 className="text-5xl text-white font-semibold">
            Login your account
          </h1>
        </div>
        <div>
          <p className="flex gap-8 items-center">
            if haven't an account ?
            <Link to="/signup">
              <button className="btn btn-success  ">signup</button>
            </Link>
          </p>
        </div>
        <div>
          <form
            className="flex flex-col items-center gap-2"
            action=""
            onSubmit={onFormSubmit}
          >
            <div className="flex flex-col gap-2  w-76">
              <input
                className="input input-bordered input-success w-full max-w-xs"
                type="email"
                placeholder="email"
                name="email"
                value={signinDetails.email}
                onChange={handleChange}
                required
              />
              <input
                className="input input-bordered input-success w-full max-w-xs"
                type="password"
                placeholder="password"
                name="password"
                value={signinDetails.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button className="btn btn-success rounded-2xl">submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
