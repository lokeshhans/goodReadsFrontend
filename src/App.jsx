import "./App.css";

import Navbar from "Components/Navbar/Navbar";
import Home from "Pages/Home/Home";

function App() {
  return (
    <>
    <Navbar />
    <Home />
      <h1 className="heading">app</h1>
      <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
    </>
  );
}

export default App;
