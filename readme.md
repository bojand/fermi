# fermi

Estimate the number of piano tuners in a city given the population.

[Fermi_problem](http://en.wikipedia.org/wiki/Fermi_problem).

# example

``` js
var fermi = require('fermi');
var n = fermi(5000000);
console.log(n);
```

# methods

``` js
var fermi = require('fermi');
```

## fermi(population, assumptions)

Return the estimated number of piano tuners in a city given the city `population`.

`assumptions` Optional assumptions for the estimate.
* `people_per_house` average number of persons in each household. Default is 2.
* `houses_with_piano_percent` number of households that have a piano that is tuned regularly as a percentage. Default is 5.0.
* `tuning_per_piano_per_year`: average number of times per year a (regularly tuned) piano is tuned. Default is 1.
* `tuning_time_hours` number of hours it takes a piano tuner to tune a piano, including travel time. Default is 2.
* `tuner_work_hours_per_day` number of hours per day a tuner works. Default is 8.
* `tuner_work_days_per_week` number of days a week a tuner works. Default is 5.
* `tuner_work_weeks_oer_year` number of weeks a year a tuner works. Default is 50.

# install

With [npm](http://npmjs.org) do:

```
npm install fermi
```

# license

MIT