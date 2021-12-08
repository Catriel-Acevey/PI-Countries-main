import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_NAME_COUNTRIES = "GET_NAME_COUNTRIES";
export const GET_NAME_COUNTRIES_FORM = "GET_NAME_COUNTRIES_FORM";
export const CLEAR_NAME_COUNTRIES_FORM = "CLEAR_NAME_COUNTRIES_FORM";
export const GET_DETAILS = "GET_DETAILS";
export const FILTER_REGION = "FILTER_REGION";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export function getCountries(orderBy, order) {
  return async function (dispatch) {
    try {
      var json = await axios(
        "http://localhost:3001/countries?orderBy=" + orderBy + "&order=" + order
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
      return dispatch({ type: GET_NAME_COUNTRIES, payload: json.data });
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
export function postActivity(name, difficulty, duration, season, countriesIds) {
  return async function (dispatch) {
    try {
      var response = await axios.post("http://localhost:3001/activity", {
        name,
        difficulty,
        duration,
        season,
        countriesIds,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
}
export function filterRegion(payload) {
  return {
    type: FILTER_REGION,
    payload,
  };
}
export function filterActivity(payload) {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/activity");
      return dispatch({ type: GET_ACTIVITIES, payload: json.data });
    } catch (err) {
      console.log(err);
    }
  };
}
