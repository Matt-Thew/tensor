const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");
let { features, testFeatures } = loadCSV("clvertab_200123.csv", {
  dataColumns: ["profile_objectid", "profile_platform"]
});

console.log(features);
const data = tf.tensor(features);
console.log(data);
