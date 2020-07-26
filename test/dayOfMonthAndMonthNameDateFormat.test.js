const guessFormat = require('../dist/bundle.js');

describe('Day of month followed by month name type dates', () => {
	test('# D Mon', () => {
		expect(guessFormat('1 Jan')).toBe('D MMM');
	});

	test('# DD Mon', () => {
		expect(guessFormat('01 Jan')).toBe('DD MMM');
	});

	test('# parse valid day of month', () => {
		expect(() => {
			guessFormat('32 Jan');
		}).toThrow(Error("Couldn't parse date"));
	});

	test('# day of month with ordinal', () => {
		expect(guessFormat('1st Jan')).toBe('Do MMM');
	});

	test('# full month name with D', () => {
		expect(guessFormat('1 January')).toBe('D MMMM');
	});

	test('# full month name with DD', () => {
		expect(guessFormat('31 January')).toBe('DD MMMM');
	});

	test('# full month name, day of month with ordinal', () => {
		expect(guessFormat('31st January')).toBe('Do MMMM');
	});

	test('# appended delimiter(s)', () => {
		expect(guessFormat('31st January, ')).toBe('Do MMMM, ');
	});

	test('# prepend day of week (shortest)', () => {
		expect(guessFormat('Su, 31st January')).toBe('dd, Do MMMM');
	});

	test('# prepend day of week (short)', () => {
		expect(guessFormat('Sun, 31st January')).toBe('ddd, Do MMMM');
	});

	test('# prepend day of week (full)', () => {
		expect(guessFormat('Sunday, 31st January')).toBe('dddd, Do MMMM');
	});

	test('# append year (short)', () => {
		expect(guessFormat('31st January, 20')).toBe('Do MMMM, YY');
	});

	test('# append year', () => {
		expect(guessFormat('31st January, 2020')).toBe('Do MMMM, YYYY');
	});

	test('# full date', () => {
		expect(guessFormat('Sunday, 31st January 2020')).toBe('dddd, Do MMMM YYYY');
	});
});
