import Navbar from "../Components/NavBar";
import TeamFilterSideBar from "../Components/TeamFilterSideBar";
import { Link } from "react-router-dom";
import TeamsCard from "../Components/TeamsCard";

const Teams = () => {
  return (
    <div className="">
      <Navbar />

      <div class="border bg-[#49494993] absolute left-80 top-28  shadow rounded-md p-2 max-w-xl h-96 w-full m-auto">
        <h1 className="text-[#ffffff] text-xl font-bold pb-2 text-center">
          Select A Team To Read Details
        </h1>
        <div class="animate-pulse flex  space-x-4">
          <div class="rounded-full bg-[#9e9e9e] h-24 w-24"></div>
          <div class="flex-1 space-y-6 py-8">
            <div class="h-2 bg-[#9e9e9e] rounded"></div>
            <div class="space-y-8">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-[#9e9e9e] rounded col-span-2"></div>
                <div class="h-2 bg-[#9e9e9e] rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-[#9e9e9e] rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-[#9e9e9e] rounded col-span-2"></div>
                <div class="h-2 bg-[#9e9e9e] rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-[#9e9e9e] rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-[#9e9e9e] rounded col-span-2"></div>
                <div class="h-2 bg-[#9e9e9e] rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-[#9e9e9e] rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-[#9e9e9e] rounded col-span-2"></div>
                <div class="h-2 bg-[#9e9e9e] rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-[#9e9e9e] rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-[#9e9e9e] rounded col-span-2"></div>
                <div class="h-2 bg-[#9e9e9e] rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-[#9e9e9e] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <TeamFilterSideBar />
      <div className=" flex flex-col ">
        <TeamsCard />
      </div>
    </div>
  );
};

export default Teams;
