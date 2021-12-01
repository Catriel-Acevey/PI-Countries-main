import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_NAME_COUNTRIES = "GET_NAME_COUNTRIES";
export const GET_NAME_COUNTRIES_FORM = "GET_NAME_COUNTRIES_FORM";
export const CLEAR_NAME_COUNTRIES_FORM = "CLEAR_NAME_COUNTRIES_FORM";
export const GET_DETAILS = "GET_DETAILS";

export function getCountries(page, orderBy, order, filter) {
  return async function (dispatch) {
    try {
      var json = await axios(
        "http://localhost:3001/countries?page=" +
          page +
          "&orderBy=" +
          orderBy +
          "&order=" +
          order +
          "&filter=" +
          filter
      );
      return dispatch({ type: GET_COUNTRIES, payload: json.data });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getNameCountries(name) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/countries?name=" + name);
      return dispatch({ type: GET_NAME_COUNTRIES_FORM, payload: json.data });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getNameCountriesForm(name) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/countries?name=" + name);
      return dispatch({ type: GET_NAME_COUNTRIES_FORM, payload: json.data });
    } catch (err) {
      console.log(err);
    }
  };
}
export function clearNameCountriesForm() {
  return function (dispatch) {
    return dispatch({ type: CLEAR_NAME_COUNTRIES_FORM });
  };
}
export function getDetails(id) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/countries/" + id);
      return dispatch({ type: GET_DETAILS, payload: json.data });
    } catch (err) {
      console.log(err);
    }
  };
}
export function postActivity(name, difficulty, duration, season, ids) {
  return async function (dispatch) {
    try {
      var response = await axios.post("http://localhost:3001/activity", {
        name,
        difficulty,
        duration,
        season,
        ids,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
}
