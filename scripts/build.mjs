// Copia i file del gioco da src/ a www/ (cartella usata da GitHub Pages e da Capacitor)
import { cpSync, rmSync, mkdirSync } from "node:fs";
rmSync("www", { recursive: true, force: true });
mkdirSync("www", { recursive: true });
cpSync("src", "www", { recursive: true });
console.log("Build pronta in www/");
