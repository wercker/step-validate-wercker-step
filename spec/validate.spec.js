var path = require("path")
var validator = require("../validator")

describe("validator", function(){

  it("should return an error on invalid yaml", function(done) {
    validator.validate(path.join(__dirname, "invalid.yml"), function (error) {
      expect(error).not.toBeNull()
      done()
    })
  })

  it("should return an error on missing element in yaml", function(done) {
    validator.validate(path.join(__dirname, "incorrect-schema.yml"), function (error) {
      expect(error).not.toBeNull()
      done()
    })
  })

  it("should return an error if file doesn't exist", function(done) {
    validator.validate(path.join(__dirname, "no.yml"), function (error) {
      expect(error).not.toBeNull()
      done()
    })
  })
})