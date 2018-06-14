var Test = artifacts.require("./Test.sol");

contract('Test', function(accounts) {
  it("should return argument value", function() {
    return Test.deployed().then(function(instance) {
      return instance.getBalance.call(12345);
    }).then(function(response) {
      assert.equal(response.valueOf(), 12345, "12345 was not returned");
    });
  });
});
