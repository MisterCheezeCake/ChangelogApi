/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import { Formater } from "./types"
const Essential = Java.type("gg.essential.api.EssentialAPI")
class Changelog {
    module: string;
    version: string;
    changelog: string;
    path: string;
    constructor(module, version, changelog) {
        this.module = module;
        this.version = version;
        this.changelog = changelog;
        this.path = `${Config.modulesFolder}/${this.module}/changelogs.json`
        }
    private writeCLFile(content: Boolean) {
        if (!FileLib.exists(this.path)) {
            FileLib.write(this.path, JSON.stringify({}));
        }
        let obj = JSON.parse(FileLib.read(this.path));
        obj[this.version] = content;
        FileLib.write(this.path, JSON.stringify(obj));
    }
    /**
     * Write the Changelog into chat or send the notification (depending on if the user has essentials installed)
     * 
     * @param {Formater} formater An optional formater object containing color codes to prefix the name and version
     */   
    public writeChangelog(formater? : Formater) {
        const _formater = formater  || {}
        const { name, version, changelog } = _formater
        if (!FileLib.exists(this.path)) {
            this.writeCLFile(false)
        } 
        if (JSON.parse(FileLib.read(this.path))[this.version]) return; 
        Essential.getNotifications().push("&5ChatTriggers", `${name || ""}${this.module}&r updated to ${version || ""}${this.version}&r\n${changelog || "&e"}Changelog:&r\n${this.changelog}`, 10)
        this.writeCLFile(true)
    }

    }


export default Changelog;

export { Changelog };