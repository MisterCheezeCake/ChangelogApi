# ChangelogApi 2.0.0

## What's differant from 1.0

This version of ChangelogApi contains numerous improvements over 1.0. These include:

- More customizability in the message
- Better tracking of when changelogs have been displayed
- Essential Notifications rather than chat when availible
- The Changelog class is now default and named exported

## Migrating from 1.0

- You will need to require ChangelogApi2 and import the Changelog class from that module
- The `version` in the Changelog object now must be devoid of color codes
    - Formating of how `version` and `module` are displayed can be done with new formatter objects (see below)

## Formaters

Formaters are new things used to control how the changelog is shown. A formater is an object with specific keys and color codes. These are:
- `name` - Formatting codes to prefix the module name with
- `version`- Formatting codes to prefix the module version number with
- `changelog` - Formating codes to control how the "Changelog:" part of the message is displayed

Formaters can be passed to the `Changelog#writeChangelog` method


## Examples 

```js
import { Changelog } from "ChangelogAPI2/index.js";


const changelog = new Changelog(
    "ExampleModule",
    "1.0.1",
    "Made it work instead of crashing"
)

const formater = {
    name: "&1",
    version: "&a&l"
}

changelog.writeChangelog(formater);
```

```js
// Without formatter and with default import

import Changelog from "ChangelogApi2/index.js";

const changelog2 =  new Changelog(
    "ExampleModule",
    "1.4.2",
    "Did stuff I think"
)

changelog2.writeChangelog();
```
    