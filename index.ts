import brain from "brain.js";
import { writeFileSync, readFileSync } from "fs";

const net = new brain.NeuralNetwork();

import obj from "./data";


console.log(net.train(obj.samples, {
  iterations: 20000
}));

writeFileSync(__dirname + "/trained.json", JSON.stringify(net.toJSON()));
