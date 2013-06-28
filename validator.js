var jsYaml = require("js-yaml")
var fs = require("fs")
var path = require("path")
var JSV = require("JSV").JSV
var underscore = require("underscore")


var werckerBoxSchema = JSON.parse(fs.readFileSync(path.join(__dirname, 'wercker-box-schema.json')).toString())

exports.validate = function (filename, callback) {
  if(!path.existsSync(filename)){
    return callback("File " + filename + " does not exist.")
  }

  var yamlContents = fs.readFileSync(filename).toString();
  var yaml;
  try{
    yaml = jsYaml.load(yamlContents);
  }
  catch(error){
    return callback(JSON.stringify(error))
  }

  var env = JSV.createEnvironment()
  var report = env.validate(yaml, werckerBoxSchema)

  if(report.errors.length !== 0){
    var errorMessage = "";
    underscore.each(report.errors, function (error) {
      var elementName = error.schemaUri.replace("http://jsonschema.net/", "").replace("#", "")
      errorMessage += error.message + ": " + elementName + "\n";
    });
    return callback(errorMessage);
  }

  return callback(null);
}