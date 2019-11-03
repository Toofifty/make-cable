# make-cable

`make-cable` is an open-source visual USB cable designer built in React

## Local development

`make-cable` was bootstrapped with Create React App, so normal CRA commands will work.

Run `yarn` to install dependencies and `yarn start` to run the application.

## Contribute

### Making a contribution

I'm very option for contributions, since there are so many vendors and so many different options they offer. Just fork and submit a PR.

### How to add options

Part options (e.g. USB connectors, sleeving patterns, coil lengths) are all easily modifiable and open to extending. Each part has a file in `src/data/parts` which describes all the available options for the part. The properties for each option are as follows:

```ts
/**
 * Represents an option for a cable part
 */
interface PartOption<T = string> {
    /**
     * Generic value of the option. Must be unique per part.
     */
    value: T;

    /**
     * Label to display in interface
     */
    label: string;

    /**
     * List of vendors where this part is available.
     * Corresponds with Vendor.name
     */
    vendors?: string[];

    /**
     * Form interface icon
     */
    icon?: React.FC;

    /**
     * Graphic to render in the visualizer
     */
    graphic?: React.FC;

    /**
     * CSS color (hex, rgb, hsl, etc) for rendering the following parts:
     * - Heatshrink
     * - Sleeving (if pattern not provided)
     * - Double Sleeving (if pattern not provided)
     */
    color?: string;

    /**
     * Image URL for loading a pattern for both the interface and visualizer
     */
    pattern?: string;
}
```

Simply add more objects to the exported array, and they will appear in the app.

### How to add Vendors

Add vendors just like part options inside `src/data/vendors`. Here are the properties:

```ts
/**
 * A vendor or reseller that sells parts or custom builds cables
 */
interface Vendor {
    /**
     * Unique identifier name.
     * Corresponds with PartOption.vendors
     */
    name: string;

    /**
     * Label to display in interface
     */
    label: string;

    /**
     * Website URL
     */
    url: string;

    /**
     * Generic location (usually country or state)
     */
    location: string;
}
```
