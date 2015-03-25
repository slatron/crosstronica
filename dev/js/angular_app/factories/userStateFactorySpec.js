describe("userStateFactory Unit Tests > ", function() {
  var viewStateFactory, testUserState;

  beforeEach(module('Crosstronica'));
  beforeEach(inject(function(_userStateFactory_) {
    userStateFactory = _userStateFactory_;
  }));

  it("Should default to unauthorized access status", function() {

    testUserState = userStateFactory.get();

    expect(testUserState.authorized).toEqual(false);

  });

});
