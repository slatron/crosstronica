describe("patternFactory Unit Tests > ", function() {
  var patternFactory, testPattern, httpMock;

  var patternSpec = {
    name: 'Test Pattern',
    rows: 6,
    cols: 4
  };

  beforeEach(module('Crosstronica'));
  beforeEach(inject(function(_patternFactory_, $httpBackend) {
    patternFactory = _patternFactory_;
    httpMock = $httpBackend;
  }));

  it("Should create a new pattern from a given spec object", function() {

    // httpMock.expectGET("/data").respond("pig");
    // controllerService('cDashboard', {$scope: scope});
    // httpMock.flush();

    patternFactory.createNew(patternSpec);

    testPattern = patternFactory.get();

    expect(testPattern.name).toEqual(patternSpec.name);
    expect(testPattern.grid.length).toEqual(patternSpec.rows);
    expect(testPattern.grid[0].length).toEqual(patternSpec.cols);

  });

  it("Should hold test data through its tests", function() {

    expect(testPattern.name).toEqual(patternSpec.name);
    expect(testPattern.grid.length).toEqual(patternSpec.rows);
    expect(testPattern.grid[0].length).toEqual(patternSpec.cols);

  });

});
