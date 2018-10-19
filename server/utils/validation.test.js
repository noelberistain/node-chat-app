const expect = require('expect');
const { isRealString } = require('./validation');

describe("isRealString", function () {

    it("should reject non-string values", function () {
        var res = isRealString(98);
        expect(res).toBe(false);
    }); //it("should reject non-string...

    it("should reject string with only spaces", function () {
        var res = isRealString('  ');
        expect(res).toBe(false);
    });//it("should reject string with only spaces....

    it("should allow string with non-space caracters", function () {
        var res = isRealString('  Andrew  ');
        expect(res).toBe(true);
    });//it("should allow string with non-space c...

});//describe("isRealString", ...