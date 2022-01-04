import { connect } from "react-redux";
import TeamModal from "./TeamModal";
import React, { useState } from "react";

const mapStateToProps = ({ database, teamSearchQuery, teamTypeFilter }) => ({
  database,
  teamSearchQuery,
  teamTypeFilter,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TeamsCard = (props) => {
  const [modalState, setmodalState] = useState({
    isDisplayModal: false,
    selectTeam: null,
  });

  console.log(props.database);

  if (!Array.isArray(props.database.teams)) return <p>Loading...</p>;

  const teamType = !["Club Teams", "National Teams"].includes(
    props.teamTypeFilter
  )
    ? props.database.teams
    : props.database.teams.filter((team) => {
        return team.teamType.value.includes(props.teamTypeFilter);
      });

  const displayedTeams =
    props.teamSearchQuery === ""
      ? teamType
      : teamType.filter((team) => {
          console.log(team);
          console.log(props.teamSearchQuery);
          return team.name
            .toLowerCase()
            .includes(props.teamSearchQuery.toLowerCase());
        });
  return (
    <>
      <div className="overflow-y-scroll h-96 mt-4 w-72">
        {displayedTeams.map((team, i) => {
          return (
            <div
              key={i}
              onClick={() =>
                setmodalState({ isDisplayModal: true, selectTeam: team })
              }
              onClickCapture={() => setmodalState({ isDisplayModal: false })}
              className="flex flex-wrap min-w-fit text-sm	cursor-pointer text-[#ffff8d] bg-[#0d9fa7] h-28 w-64 rounded m-2"
            >
              <div className="px-2 py-1">
                <p className="">{`${team.name} `}</p>
                <p>{`${team.teamCountry} `}</p>
                <p>{`${team.teamStadium} `}</p>
                <p>{`${team.dateOfFoundation} `}</p>
                <p>{`${team.teamType.value} `}</p>
              </div>
              <div>
                <img
                  className="rounded-full h-24 ml-3 mt-2 min-w-fit	 "
                  src={`${team.teamImg} `}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-40 left-80">
        {modalState.isDisplayModal && modalState.selectTeam && (
          <TeamModal team={modalState.selectTeam} />
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsCard);
