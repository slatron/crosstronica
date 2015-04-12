describe("viewStateFactory Unit Tests > ", function() {
  var viewStateFactory, testViewState;

  beforeEach(module('Crosstronica'));
  beforeEach(inject(function(_viewStateFactory_) {
    viewStateFactory = _viewStateFactory_;
  }));

  it("Should start the view aligned center", function() {

    testViewState = viewStateFactory.get();

    expect(testViewState.centered).toEqual(true);

  });

  it("Should center view upon command", function() {

    testViewState = viewStateFactory.get();
    viewStateFactory.centerGrid(true);

    expect(testViewState.centered).toEqual(true);

    viewStateFactory.centerGrid(false);

    expect(testViewState.centered).toEqual(false);

  });

});
