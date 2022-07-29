#!/usr/bin/env node

process.removeAllListeners("warning")

import en from "./en.js";
import fr from "./fr.js";
import menu from './menuInput.js'
import flat from "flat";
import translate from "translate";
import ProgressBar from 'progress'
import fs from 'fs'

const mode = process.argv?.[2] !== "-f" ? "missing" : "full"


function objectDeepKeys(obj) {
    return Object.keys(obj)
        .filter((key) => obj[key] instanceof Object)
        .map((key) => objectDeepKeys(obj[key]).map((k) => `${key}.${k}`))
        .reduce((x, y) => x.concat(y), Object.keys(obj));
}


async function test() {
   try {
    const enKeys = objectDeepKeys(en);

    const frKeys = objectDeepKeys(fr);

    const missings = [];

    enKeys.forEach((enKey) => {
        missings.push({ enKey, isMissing: !frKeys.includes(enKey) });
    });

    const newObj = {};

    translate.engine = "google";

    const flatedEn = flat.flatten(en)
    const flatedFr = flat.flatten(fr)

    let done = 0;
    var bar = new ProgressBar(`fix ${mode} [:bar] :rate/fixPerSecond :percent `, {
        complete: '=',
        incomplete: ' ',
        width: 100,
        total: missings.length
    });
    for (const i of missings) {
        if (enKeys.find((j) => j.startsWith(i.enKey + "."))) {
            newObj[i.enKey] = {}
        } else {
            if (i.isMissing) {
                let text = flatedEn[Object.keys(flatedEn).find(j => j === i.enKey)]
                text = await translate(text, 'fr')
                newObj[i.enKey] = text
            } else if (!i.isMissing && mode === "full") {
                let text = flatedFr[Object.keys(flatedFr).find(j => j === i.enKey)]
                // text = await translate(text, 'fr')
                newObj[i.enKey] = text
            }
        }
        done++;
        bar.update(done / missings.length)
    }


    fs.writeFile('output.json', JSON.stringify(
        flat.unflatten(newObj,{object: false}),
        null,
        4
    ), 'utf8', () => console.log("Done!"));
   } catch (error) {
    console.error(error)
   }
}

async function fixMenu() {
    const result = []
    for (const item of menu) {
        const enName = item.name.find(i => i.language === "en-US")?.text;
	const frNames = item.name.filter(i => i.language === "fr-CA")
        if (frNames.length > 1)
	    {
		    const secondFrNameIndex = item.name.findIndex(i => i.language === 'fr-CA')
		    item.name.splice(secondFrNameIndex, 1)
	    }
        if (enName && frNames.length === 0) {
            const frName = await translate(enName, 'fr')
            item.name.push({ language: "fr-CA", text: frName })
        }
        result.push(item)
    }
    fs.writeFile('menuFr.json', JSON.stringify(
        result,
        null,
        4
    ), 'utf8', () => console.log("Done!"));
}

fixMenu();

// test()
