const spock = require('./spock');

test('papel gana a piedra', () => {
    expect(spock('papel', 'piedra')).toBe('papel');
});

test('papel gana a spock', () => {
    expect(spock('papel', 'spock')).toBe('papel');
});

test('papel pierde contra piedra', () => {
    expect(spock('papel', 'lagarto')).toBe('lagarto');
});

test('papel pierde contra piedra', () => {
    expect(spock('papel', 'tijeras')).toBe('tijeras');
});

test('tijeras gana a papel', () => {
    expect(spock('tijeras', 'papel')).toBe('tijeras');
});

test('tijeras gana a lagarto', () => {
    expect(spock('tijeras', 'lagarto')).toBe('tijeras');
});

test('tijeras pierde contra piedra', () => {
    expect(spock('tijeras', 'piedra')).toBe('piedra');
});

test('tijeras pierde contra piedra', () => {
    expect(spock('tijeras', 'spock')).toBe('spock');
});

test('lagarto gana a papel', () => {
    expect(spock('lagarto', 'papel')).toBe('lagarto');
});

test('lagarto gana a spock', () => {
    expect(spock('lagarto', 'spock')).toBe('lagarto');
});

test('lagarto pierde contra tijeras', () => {
    expect(spock('lagarto', 'tijeras')).toBe('tijeras');
});

test('lagarto pierde contra piedra', () => {
    expect(spock('lagarto', 'piedra')).toBe('piedra');
});

test('spock gana a piedra', () => {
    expect(spock('spock', 'piedra')).toBe('spock');
});

test('spock gana a tijeras', () => {
    expect(spock('spock', 'tijeras')).toBe('spock');
});

test('spock pierde contra papel', () => {
    expect(spock('spock', 'papel')).toBe('papel');
});

test('spock pierde contra lagarto', () => {
    expect(spock('spock', 'lagarto')).toBe('lagarto');
});

test('piedra gana a lagarto', () => {
    expect(spock('piedra', 'lagarto')).toBe('piedra');
});

test('piedra gana a tijeras', () => {
    expect(spock('piedra', 'tijeras')).toBe('piedra');
});

test('piedra pierde contra papel', () => {
    expect(spock('piedra', 'papel')).toBe('papel');
});

test('piedra pierde contra spock', () => {
    expect(spock('piedra', 'spock')).toBe('spock');
});


test('papel empata contra papel', () => {
    expect(spock('papel', 'papel')).toBe('empate');
});

test('tijeras empata contra tijeras', () => {
    expect(spock('tijeras', 'tijeras')).toBe('empate');
});

test('lagarto empata contra lagarto', () => {
    expect(spock('lagarto', 'lagarto')).toBe('empate');
});

test('spock empata contra spock', () => {
    expect(spock('spock', 'spock')).toBe('empate');
});

test('piedra empata contra piedra', () => {
    expect(spock('piedra', 'piedra')).toBe('empate');
});