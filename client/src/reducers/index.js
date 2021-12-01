import {
  GET_COUNTRIES,
  GET_NAME_COUNTRIES,
  GET_NAME_COUNTRIES_FORM,
  CLEAR_NAME_COUNTRIES_FORM,
  GET_DETAILS,
} from "../actions";

const initialState = {
  countries: [],
  countriesForm: [],
  detail: {},
};

const cases = {};

function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}

export default rootReducer;
