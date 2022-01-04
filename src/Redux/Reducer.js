import { State } from "@amcharts/amcharts5/.internal/core/util/States";
import {
  ADD_PLAYER,
  ADD_TEAM,
  ADD_COACH,
  TEAM_SEARCH,
  PLAYER_SEARCH,
  COACH_SEARCH,
  TEAM_TYPE_FILTER,
  PLAYER_POSITION_SEARCH,
  COACH_TEAM_SEARCH,
} from "./constants";

const initialState = {
  coachTeamSearch: "",
  playerPositionSearch: "",
  teamTypeFilter: "",
  teamSearchQuery: "",
  playerSearchQuery: "",
  coachSearchQuery: "",
  database: {
    teams: [
      {
        name: "Bayern Munich ",
        teamCountry: " Munich, Germany",
        teamStadium: "Allianz Arena",
        dateOfFoundation: "1900",
        teamType: { value: "Club Teams" },
        teamAttackNumber: 99,
        teamMIDFIELDNumber: 99,
        teamDEFENSENumber: 99,
        teamImg:
          "data:image/png;base64,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",
      },
    ],
    players: [
      {
        name: "Thomas Müller",
        playerPosition: "Forward",
        playerCurrentTeam: "Bayern Munich",
        dateOfBirth: "September 13, 1989",
        playerOffensiveAwareness: 99,
        playerBallControl: 99,
        playerDribbling: 99,
        playerTightPossession: 99,
        playerLowPass: 99,
        playerLoftedPass: 99,
        playerFinishing: 99,
        playerHeading: 99,
        playerSetPieceTaking: 99,
        playerCurl: 99,
        playerSpeed: 99,
        playerAcceleration: 99,
        playerKickingPower: 99,
        playerJump: 99,
        playerPhysicalContact: 99,
        playerBalance: 99,
        playerStamina: 99,
        playerImg:
          "data:image/jpeg;base64,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",
      },
    ],
    coaches: [
      {
        name: "Julian Nagelsmann",
        dateOfBirth: "23 July 1987",
        coachNationality: "German",
        coachCurrentTeam: "Bayern Munich",
        coachImg:
          "https://cdn.vox-cdn.com/thumbor/2LqTwd6tVo7rRlXDbk66EErkD8I=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22740954/1189274686.jpg",
        coachExperience: 99,
        coachLeadershipSkills: 99,
        coachCoachingHistory: 99,
      },
    ],
  },
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM: {
      const obj = JSON.parse(JSON.stringify(state));

      obj.database.teams.push(action.payload);

      return obj;
    }
    case ADD_PLAYER: {
      const obj = JSON.parse(JSON.stringify(state));

      obj.database.players.push(action.payload);

      return obj;
    }
    case ADD_COACH: {
      const obj = JSON.parse(JSON.stringify(state));

      obj.database.coaches.push(action.payload);

      return obj;
    }
    case TEAM_SEARCH: {
      return {
        ...state,
        teamSearchQuery: action.payload,
      };
    }
    case PLAYER_SEARCH: {
      return {
        ...state,
        playerSearchQuery: action.payload,
      };
    }
    case COACH_SEARCH: {
      return {
        ...state,
        coachSearchQuery: action.payload,
      };
    }
    case TEAM_TYPE_FILTER: {
      return {
        ...state,
        teamTypeFilter: action.payload,
      };
    }
    case PLAYER_POSITION_SEARCH: {
      return {
        ...state,
        playerPositionSearch: action.payload,
      };
    }
    case COACH_TEAM_SEARCH: {
      return {
        ...state,
        coachTeamSearch: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
