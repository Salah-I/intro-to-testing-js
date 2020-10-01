// Unit tests for the helloWorld function
describe('hello', function() {
    it('should be a defined function', function() {
      expect(typeof hello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof hello()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(hello()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(hello()).not.toBe(undefined);
    });


});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    });


}
describe('hello', function() {
    it('should be a defined function', function () {
        expect(typeof hello).toBe('function');
    });
    it('should return a string Hello Jane', function () {
        expect(typeof hello()).toBe("Hello, Jane");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(hello()).toBe("Hello, Alex");
    })
})

