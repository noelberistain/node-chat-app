var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', function() {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    }); // it ('should generate correct ......)
    
}); // descdribe('generateMessage.....)