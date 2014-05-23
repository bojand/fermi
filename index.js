function merge(a, b) {
  var keys = Object.keys(b);
  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i];
    a[key] = b[key]
  }
  return a;
}

module.exports = function fermi(population, assumoptions) {
  var options = {
    people_per_house: 2,
    houses_with_piano_percent: 5.0,
    tuning_per_piano_per_year: 1,
    tuning_time_hours: 2,
    tuner_work_hours_per_day: 8,
    tuner_work_days_per_week: 5,
    tuner_work_weeks_oer_year: 50
  };

  if (assumoptions) {
    options = merge(options, assumoptions);
  }

  var tunings_per_year = population
    / options.people_per_house
    * (options.houses_with_piano_percent / 100.0)
    * options.tuning_per_piano_per_year;

  var tuner_average = options.tuner_work_weeks_oer_year
    * options.tuner_work_days_per_week
    * options.tuner_work_hours_per_day
    / options.tuning_time_hours;

  if (tuner_average <= 0) {
    return 0;
  }

  return Math.round(tunings_per_year / tuner_average);
};