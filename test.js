import test from 'ava';
import eurekaBase58Converter from '.';

test('title', t => {
	const err = t.throws(() => {
		eurekaBase58Converter(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(eurekaBase58Converter('unicorns'), 'unicorns & rainbows');
});
