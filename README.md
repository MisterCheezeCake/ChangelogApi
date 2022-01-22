# ChangelogLib - 1.0.0

## Biggest Change
The module has been renamed to ChangelogLib, to better reflect what it actually does.

Because of CT 2.0's new features for Changelogs, this module is designed to offer you more control of how they are shown.
## What's differant from ChangelogAPI

ChangelogLib contains numerous improvements over ChangelogAPI.  These include:

- More customizability in the message
- Better tracking of when changelogs have been displayed
- Essential Notifications rather than chat when availible
- The Changelog class is now default and named exported

## Migrating from ChangelogAPI

- You will need to require ChangelogLib and import the Changelog class from that module
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
import { Changelog } from "ChangelogLib/index.js";


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

import Changelog from "ChangelogLib/index.js";

const changelog2 =  new Changelog(
    "ExampleModule",
    "1.4.2",
    "Did stuff I think"
)

changelog2.writeChangelog();
```
    