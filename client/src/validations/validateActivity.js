export default function validate(data) {
  let error = {};

  if (!data.name) {
    error.name = "Name is necessary";
  }

  if (!data.duration) {
    error.duration = "Duration is necessary";
  }

  if (!data.countriesIds.length) {
    error.countriesIds = "you need at least one country";
  }

  return error;
}
