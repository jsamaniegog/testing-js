const gift = require('./gift');

test('get gift with a number less than 3', () => {
    expect(gift(-1)).toBe(null);
    expect(gift(0)).toBe(null);
    expect(gift(1)).toBe(null);
    expect(gift(2)).toBe(null);
});

test('get gift with five', () => {
    expect(gift(5)).toBe(
       "  *\n"
     + " ***\n"
     + "*****\n"
     + " ***\n"
     + "  *\n"
   );
});

test('get gift with six', () => {
    expect(gift(6)).toBe(null);
});

test('get gift with seven', () => {
    expect(gift(7)).toBe(
       "   *\n"
     + "  ***\n"
     + " *****\n"
     + "*******\n"
     + " *****\n"
     + "  ***\n"
     + "   *\n"
    );
});
