import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { addCoach } from "../Redux/Coaches/CoachesActions";
import "react-dropdown/style.css";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    submitCoach: (obj) => dispatch(addCoach(obj)),
  };
};
const AddCoachForm = ({ submitCoach }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [coachImgInputValue, setcoachImgInputValue] = useState("");
  const [coachNameInputValue, setcoachNameInputValue] = useState("");
  const [coachNationalityInputValue, setcoachNationalityInputValue] =
    useState("");
  const [coachCurrentTeamInputValue, setcoachCurrentTeamInputValue] =
    useState("");
  const onsubmit = () => {
    submitCoach({
      name: coachNameInputValue,
      coachID:
        "C-" + Date.now().toString(36) + Math.random().toString(36).substr(2),
      dateOfBirth: new Date(startDate).toISOString().substring(0, 10),
      coachNationality: coachNationalityInputValue,
      coachCurrentTeam: coachCurrentTeamInputValue,
      coachImg: coachImgInputValue,
      coachExperience: Math.floor(Math.random() * (95 - 65 + 1) + 65),
      coachLeadershipSkills: Math.floor(Math.random() * (95 - 65 + 1) + 65),
      coachCoachingHistory: Math.floor(Math.random() * (95 - 65 + 1) + 65),
    });
    navigate("/dashboard/coachcontrol");
  };
  return (
    <div className="absolute h-full w-4/5 right-0 bg-gray-800">
      <Link to={"/dashboard/coachcontrol"}>
        <button className=" text-[#494949] bg-[#9e9e9e] hover:bg-[#c9c9c9] rounded-br-xl shadow-xl text-center w-40 py-2">
          Back
        </button>
      </Link>
      <div className="flex flex-col p-2 absolute font-bold rounded w-5/12 mt-8 h-5/6 justify-center left-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className="flex flex-wrap flex-col my-5 p-1">
          <label htmlFor="PlayerName" className="m-auto pb-2">
            Coach Full Name
          </label>
          <input
            value={coachNameInputValue}
            onChange={(e) => setcoachNameInputValue(e.target.value)}
            id="PlayerName"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Coach Full Name"
          />
        </div>
        <div className=" flex flex-wrap flex-col my-5 p-1">
          <label htmlFor="Nationality" className="m-auto pb-2">
            Nationality
          </label>
          <input
            value={coachNationalityInputValue}
            onChange={(e) => setcoachNationalityInputValue(e.target.value)}
            id="Nationality"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write His Nationality"
          />
        </div>
        <div className=" flex flex-wrap flex-col my-5 p-1">
          <label htmlFor="Currentteam" className="m-auto pb-2">
            Current Team
          </label>
          <input
            value={coachCurrentTeamInputValue}
            onChange={(e) => setcoachCurrentTeamInputValue(e.target.value)}
            id="Currentteam"
            type="text"
            className="text-[#494949]  placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Coach Current Team"
          />
        </div>
        <div className=" flex flex-wrap flex-col my-5 p-1">
          <label className="m-auto pb-2" htmlFor="datepicker">
            Choose Coach's BirthDay
          </label>
          <span>
            <DatePicker
              id="datepicker"
              className="ml-56"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="text-[#494949] text-center flex flex-wrap m-auto bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-1/2 py-1"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 absolute font-bold rounded w-5/12	mt-8 h-5/6  justify-center right-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className="flex flex-col p-1">
          <label htmlFor="Imageu" className="m-auto">
            Input Coach Image URL{" "}
          </label>
          <input
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mt-3 w-full py-1"
            placeholder="Input Coach Image URL"
            id="Imageu"
            type="text"
            value={coachImgInputValue}
            onChange={(e) => setcoachImgInputValue(e.target.value)}
          />
          <img className="h-40 my-20 mx-auto" src={coachImgInputValue} />
          <button
            onClick={() =>
              !startDate ||
              !coachImgInputValue ||
              !coachNameInputValue ||
              !coachNationalityInputValue ||
              !coachCurrentTeamInputValue
                ? alert("Please Fill All Fields")
                : onsubmit()
            }
            className="bg-[#ffffff] text-[#494949] mt-4 hover:bg-[#c9c9c9] shadow-xl w-full rounded-xl pr-24 pl-24 py-1"
          >
            Add Coach
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoachForm);
