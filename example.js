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



// You don't need to use a formatter

import Changelog from "ChangelogLib/index.js";

const changelog2 =  new Changelog(
    "ExampleModule",
    "1.4.2",
    "Did stuff I think"
)

changelog2.writeChangelog();