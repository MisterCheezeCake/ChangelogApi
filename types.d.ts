export type startSymbol = "&" | "§"
export type color = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "a" | "b" | "c" | "d" | "e" | "f" | "l" | "m" | "n" | "o" | "k" |"r"

export type colorCode = `${startSymbol}${color}`

export interface Formater {
    name?: colorCode,
    version?: colorCode,
    changelog? : colorCode, // This colors the "changelog" text preceeding the changelog
}