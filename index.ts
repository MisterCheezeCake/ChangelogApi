/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import { Formater } from "./types"
const File = Java.type("java.io.File");

class Changelog {
    module: string;
    version: string;
    changelog: string;
    constructor(module, version, changelog) {
        this.module = module;
        this.version = version;
        this.changelog = changelog;
        }
    private writeCLFile(content: Boolean) {
        if (!new File(`${Config.modulesFolder}/${this.module}/changelogs.json`).exists()) {
            FileLib.write(`${Config.modulesFolder}/${this.module}/changelogs.json`, JSON.stringify({}));
        }
        let obj = JSON.parse(FileLib.read(`${Config.modulesFolder}/${this.module}/changelogs.json`));
        obj[this.version] = content;
        FileLib.write(`${Config.modulesFolder}/${this.module}/changelogs.json`, JSON.stringify(obj));
    }
    /**
     * Write the Changelog into chat or send the notification (depending on if the user has essentials installed)
     * @param {Formater} formater An optional formater object containing color codes to prefix the name and version
     */   
    public writeChangelog(formater? : Formater) {
        const _formater = formater  || {}
        const { name, version, changelog } = _formater
        if (!new File(`${Config.modulesFolder}/${this.module}/changelogs.json`).exists()) {
            this.writeCLFile(false)
        } 
        if (JSON.parse(FileLib.read(`${Config.modulesFolder}/${this.module}/changelogs.json`))[this.version]) return; 
        if (new File('./essential/onboarding.json').exists() /* Aka if the user has essential */) {
            Java.type('gg.essential.api.EssentialAPI').getNotifications().push("&5ChatTriggers", `${name || ""}${this.module}&r updated to ${version || ""}${this.version}&r\n${changelog || "&e"}Changelog:&r\n${this.changelog}`, 10)
        } else {
            ChatLib.chat(`&f[&5ChatTriggers&f] ${name || ""}${this.module}&r updated to ${version || ""}${this.version}&r\n${changelog || "&e"}Changelog:&r ${this.changelog}`)
        }
        this.writeCLFile(true)
    }

    }


const cl =  new Changelog("ChangelogApi2", "1.1.0", "This is the changelog for ModuleName");
cl.writeChangelog({
    name: "&2",
    version: "&b",
    changelog: "&f"
})

export default Changelog;

export { Changelog };