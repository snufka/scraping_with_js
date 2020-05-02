const createUrl = require('./createURL');


test('url thst is being created', () => {
    expect(createUrl('en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart')).toBe('https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart');
    expect(createUrl('https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart')).toBe('https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart');
    // expect(createUrl('http://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart')).toBe('https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart');


});