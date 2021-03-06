var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', function () {
    it('should generate correct message object', function() {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    }); // it ('should generate correct ......)

}); // descdribe('generateMessage.....)

describe('generateLocationMessage', function() {
    it('should generate correct location object', function() {
        var from = 'Deb';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
});