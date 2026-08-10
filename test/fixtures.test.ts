import process from 'node:process';
import fse from '@zokugun/fs-extra-plus/sync';
import { xtry } from '@zokugun/xtry/sync';
import { expect, it } from 'vitest';
import YAML from 'yaml';
import { parseIni } from '../src/index.js';

const DEBUG = process.env.DEBUG === '1' || process.env.DEBUG === 'true' || process.env.DEBUG === 'on';
const ROOT = fse.join('.', 'test', 'fixtures');

const files = fse.walk(ROOT, {
	absolute: true,
	onlyFiles: true,
	collect: true,
	filter: (item) => item.path.endsWith('.yml'),
});

if(files.fails) {
	throw files.error;
}

for(const file of files.value) {
	const name = fse.leafName(file.path, 1);

	it(name, () => {
		const content = fse.readFile(file.path, 'utf8');
		if(content.fails) {
			throw content.error;
		}

		const document = xtry(() => YAML.parse(content.value) as unknown);
		if(document.fails) {
			throw document.error;
		}

		const { input, output } = document.value as { input: string, output: unknown };

		const result = parseIni(input);

		try {
			expect(result).to.eql(output);
		}
		catch (error) {
			if(DEBUG) {
				console.log(YAML.stringify(result));
			}

			throw error;
		}
	});
}
