import { TokenTypes, parse_to_uint32array } from '@one-ini/wasm';
import { IniResult, Section } from './types.js';

export function parseIni<T extends IniResult = IniResult>(text: string): T {
	const parsed = parse_to_uint32array(Buffer.from(text));
	const result: IniResult = Object.create(null);

	let section: Section = Object.create(null);
	let key: string | undefined;

	result.global = section

	for (let i = 0; i < parsed.length; i += 3) {
		switch (parsed[i] as TokenTypes) {
			case TokenTypes.Section: {
				const name = text.slice(parsed[i + 1], parsed[i + 2])

				section = Object.create(null);

				result[name] = section

				break;
			}
			case TokenTypes.Key: {
				key = text.slice(parsed[i + 1], parsed[i + 2]);
				break;
			}
			case TokenTypes.Value: {
				if (key !== '__proto__') {
					const value = text.slice(parsed[i + 1], parsed[i + 2])

					section[key as string] = value;
				}
				break;
			}
			default:
				break;
		}
	}

	return result as T;
}

export const parseINI = parseIni;
