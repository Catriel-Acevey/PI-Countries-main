import {
  GET_COUNTRIES,
  GET_NAME_COUNTRIES,
  GET_NAME_COUNTRIES_FORM,
  CLEAR_NAME_COUNTRIES_FORM,
  GET_DETAILS,
  GET_ACTIVITIES,
  FILTER_REGION,
  FILTER_ACTIVITY,
} from "../actions";

const initialState = {
  allCountries: [],
  countries: [],
  countriesForm: [],
  detail: {},
  activities: [],
};

const cases = {};

cases[GET_COUNTRIES] = (state, payload) => {
  return {
    ...state,
    countries: payload,
    allCountries: payload,
  };
};
cases[GET_NAME_COUNTRIES] = (state, payload) => {
  return {
    ...state,
    countries: payload,
  };
};
cases[GET_NAME_COUNTRIES_FORM] = (state, payload) => {
  return {
    ...state,
    countriesForm: payload,
  };
};
cases[CLEAR_NAME_COUNTRIES_FORM] = (state) => {
  return {
    ...state,
    countriesForm: [],
  };
};
cases[GET_DETAILS] = (state, payload) => {
  return {
    ...state,
    detail: payload,
  };
};
cases[GET_ACTIVITIES] = (state, payload) => {
  return {
    ...state,
    activities: payload,
  };
};
cases[FILTER_REGION] = (state, payload) => {
  let allCountries = state.allCountries;

  let filtCountries =
    payload === "All"
      ? allCountries
      : allCountries.filter((country) => country.continent === payload);
  return {
    ...state,
    countries: filtCountries,
  };
};

cases[FILTER_ACTIVITY] = (state, payload) => {
  return {
    ...state,
    countries: state.allCountries.filter((country) =>
      country.activities.map((activity) => activity.name).includes(payload)
    ),
  };
};

function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}

export default rootReducer;
