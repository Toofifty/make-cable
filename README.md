# make-cable

`make-cable` is an open-source visual USB cable designer built in React

## Local development

`make-cable` was bootstrapped with Create React App, so normal CRA commands will work.

Run `yarn` to install dependencies and `yarn start` to run the application.

## Contribute

I'm very option for contributions, since there are so many vendors and so many different options they offer. Just fork and submit a PR.

All of the data can be found in `src/data` in CSV files, separated by part type. For descriptions of the data properties, see the interfaces in `src/utils/types.d.ts`: `PartOption` and `Vendor`.

Data is parsed from the CSV files at runtime.
