import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "Redux/Slices/AuthSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  async function onFormSubmit (e) {
    e.preventDefault();
    // handle form submission logic here
    // console.log(signupDetails);
    const response = await dispatch(signup(signupDetails));
    if (response?.payload?.data) {
      navigator('/login');
    }
    resetForm();
    console.log(response);
  }

  function resetForm() {
    setSignupDetails({
      username: '',
      email: '',
      password: '',
    });
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen gap-4">
      <div className="">
        <h1 className="text-5xl text-white font-semibold">
          Create a new account
        </h1>
      </div>
      <div>
        <p className="flex gap-8 items-center">
          Already have an account ?
          <Link to="/login">
            <button className="btn btn-success ">login</button>
          </Link>
        </p>
      </div>
      <div>
        <form className="flex flex-col items-center gap-2" action=""
          onSubmit={onFormSubmit}>
          <div className="flex flex-col gap-2  w-76">
            <input
              className="input input-bordered input-success w-full max-w-xs "
              type="text"
              placeholder="username"
              name="username"
              value={signupDetails.username}
              onChange={handleChange}
              required
            />
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="email"
              placeholder="email"
              name="email"
              value={signupDetails.email}
              onChange={handleChange}
              required
            />
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="password"
              placeholder="password"
              name="password"
              value={signupDetails.password}
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
  );
}
