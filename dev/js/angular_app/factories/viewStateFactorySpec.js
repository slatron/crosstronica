describe("Factory Unit Tests > ", function() {
  var viewStateFactory;

  beforeEach(module('Crosstronica'));
  beforeEach(inject(function(_viewStateFactory_) {
    viewStateFactory = _viewStateFactory_;
  }));

  describe("viewStateFactory Unit Tests > ", function() {

    it("Should start the view aligned right", function() {

      var testViewState = viewStateFactory.get();

      expect(testViewState.centered).toEqual(false);
    });

  });

});
