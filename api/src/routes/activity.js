const { Router } = require("express");
const { Country, Activity, countries_activities } = require("../db.js");

const router = Router();

const createActivity = async (body) => {
  try {
    let [activity, create] = await Activity.findOrCreate({
      where: {
        name: body.name,
        difficulty: body.difficulty,
        duration: body.duration,
        season: body.season,
      },
    });
    await activity.setCountries(body.countriesIds);
    return activity;
  } catch (err) {
    console.log(err);
  }
};

const getActivitys = async () => {
  try {
    let activitys = await Activity.findAll({ include: { model: Country } });
    return activitys;
  } catch (err) {
    console.log(err);
  }
};

router.post("/", async (req, res) => {
  // console.log("El body que me pasan es: ", req.body);
  const activity = await createActivity(req.body);
  res.json(activity);
});

router.get("/", async (req, res) => {
  const activitys = await getActivitys();
  res.json(activitys);
});

module.exports = router;
