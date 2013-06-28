
var validator = require("./validator");

if (process.argv.length < 3){
  console.log("Please specify a filename to validate.");
  process.exit(-1);
}

console.log("Validating " + process.argv[2])

validator.validate(process.argv[2], function (error) {
  if(error){
    console.log(error)
    process.exit(1)
  }
  process.exit(0)
})