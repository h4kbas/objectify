import prepare from "./encode";
import { readdirSync, readFileSync } from "fs";

export enum Person {
  Ben,
  Sen,
  O,
  Biz,
  Siz,
  Onlar
}


let data: any = [];
const files = readdirSync(__dirname + "/samples/");

files.forEach((x) => {
  data = data.concat(JSON.parse(readFileSync(`${__dirname}/samples/${x}`, "utf8")));
})

const samples = [];


const longest = data.reduce((a: { input: { length: number; }; }, b: { input: { length: number; }; }) =>
  a.input.length > b.input.length ? a : b).input.length;

for (let i = 0; i < data.length; i++) {
  samples.push({ input: prepare(data[i].input, longest), output: data[i].output })
}

export default { samples, longest };