import { FaUserAstronaut } from "react-icons/fa";

export default function BookCard({ title,author, description }) {
  return (
    <div className="card card-side bg-base-200 my-4 shadow-sm h-7s0 w-8/10">
      <figure>
        <img
          className="w-full"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-5xl uppercase">{title}</h2>
        <div className="mt-15 flex  items-center justify-between">
          <div className="flex  items-center justify-between gap-2">
            <div>
              <FaUserAstronaut />
            </div>
            <div>
              <span>{author}</span>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Details</button>
          </div>
        </div>
        <div className="text-white ">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
