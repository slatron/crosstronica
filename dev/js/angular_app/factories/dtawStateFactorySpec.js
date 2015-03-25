describe("drawStateFactory Unit Tests > ", function() {
  var drawStateFactory, testDrawState;

  beforeEach(module('Crosstronica'));
  beforeEach(inject(function(_drawStateFactory_) {
    drawStateFactory = _drawStateFactory_;
  }));

  it("Should begin in paint mode", function() {

    testDrawState = drawStateFactory.get();

    expect(testDrawState.drawMode).toEqual('paint');

  });

});
