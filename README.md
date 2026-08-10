[@zokugun/ini-parse-lite](https://github.com/zokugun/node-ini-parse-lite)
=========================================================================

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/ini-parse-lite.svg?colorB=green)](https://www.npmjs.com/package/@zokugun/ini-parse-lite)
[![Donation](https://img.shields.io/badge/donate-ko--fi-green)](https://ko-fi.com/daiyam)
[![Donation](https://img.shields.io/badge/donate-liberapay-green)](https://liberapay.com/daiyam/donate)
[![Donation](https://img.shields.io/badge/donate-paypal-green)](https://paypal.me/daiyam99)

> A high-performance parser that turns INI strings into structured records. It handles sections and key-value pairs while maintaining a simple, clean API for developers.

Features
--------

- **Easy Setup**: Quick integration with standard configuration files.
- **Structured Output**: Returns clean objects for easy data access.
- **Fast Conversion**: Rapidly turns raw text into usable data.
- **Safe Parsing**: Protects against common prototype pollution attacks.
- **Lite Parsing**: Handle the most common INI format (defined at [EditorConfig](https://spec.editorconfig.org/#file-format)). No fancy extra formats.

Installation
------------

```bash
npm add @zokugun/ini-parse-lite
```

Quick Start
-----------

```typescript
import { type IniResult, parseIni } from '@zokugun/ini-parse-lite';

function runSectionExample(): void {
	const iniString = `
timeout=30
log_level=debug

[database]
host=localhost
port=5432

[api]
key=secret_token
url=https://api.example.com
`;

	const config: IniResult = parseIni(iniString);

    const timeout = config.global.timeout;
	const dbHost = config.database.host;
	const apiKey = config.api.key;

    console.log(`Timeout: ${timeout}`);
	console.log(`Database Host: ${dbHost}`);
	console.log(`API Key: ${apiKey}`);
}
```

Contributions
-------------

Contributions are most welcome. Please:
- Open issues and feature requests under the repository discussions.
- Follow the [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Donations
---------

Support this project by becoming a financial contributor.

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
        <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
        <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
        <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
    </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
