
import brain, { likely } from "brain.js";
import prepare from "./encode";
import obj from "./data";
import { readFileSync } from "fs";

const json = JSON.parse(readFileSync(__dirname + "/trained.json", 'utf8'))
const net = new brain.NeuralNetwork();
net.fromJSON(json);


console.log(likely(prepare("patlıyorum", obj.longest), net));

console.log(likely(prepare("geberdiler", obj.longest), net));

console.log(likely(prepare("geberdik", obj.longest), net));

console.log(likely(prepare("geberecektiniz", obj.longest), net));  
