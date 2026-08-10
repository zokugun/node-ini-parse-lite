import { expect } from 'vitest';

declare module 'vitest' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Assertion<T = any> {
	}
}

expect.extend({
});
