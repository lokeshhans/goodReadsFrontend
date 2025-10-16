import { Link } from "react-router-dom";

export default function Signup() {
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
        <form className="flex flex-col items-center gap-2" action="">
          <div className="flex flex-col gap-2  w-76">
            <input
              className="input input-bordered input-success w-full max-w-xs "
              type="text"
              placeholder="username"
              required
            />
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="email"
              placeholder="email"
              required
            />
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="password"
              placeholder="password"
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
