import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES,
  GET_NAME_COUNTRIES,
  GET_NAME_COUNTRIES_FORM,
  CLEAR_NAME_COUNTRIES_FORM,
  GET_DETAILS,
  GET_ACTIVITYS,
  GET_ACTIVITYS_ALL,
} from "../actions";

const initialState = {
  countries: [],
  countriesForm: [],
  detail: {},
  idsActivitys: [],
  activitys: [],
};

const cases = {};

cases[GET_ALL_COUNTRIES] = (state, payload) => {
  return {
    ...state,
    countries: payload,
  };
};
cases[GET_COUNTRIES] = (state, payload) => {
  return {
    ...state,
    countries: payload,
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
cases[GET_ACTIVITYS_ALL] = (state, payload) => {
  return {
    ...state,
    activitys: payload,
  };
};
cases[GET_ACTIVITYS] = (state, payload) => {};

function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}

export default rootReducer;
