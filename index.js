// @ts-check
const { cac } = require("cac");

const cli = cac();

cli.option("--type <type>", "Choose a project type", {
  default: "node"
});

const parsed = cli.parse();

console.log(JSON.stringify(parsed, null, 2));
