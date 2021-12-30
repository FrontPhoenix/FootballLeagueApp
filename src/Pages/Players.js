import Navbar from "../Components/NavBar";
import FilterSideBar from "../Components/FilterSideBar";
import { Link } from "react-router-dom";

const Players = () => {
  return (
    <div className="">
      <Navbar />
      <FilterSideBar />
      <Link to={"/players/add"}>
        <button className="bg-[#d21ba4] w-9/12 text-[#ffff8d] hover:bg-[#0d9fa7]  px-10 py-2">
          Add Players
        </button>
      </Link>
    </div>
  );
};

export default Players;
