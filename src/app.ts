import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'jwt-verify',
	name: 'Verify JWT',
	icon: 'search_check',
	description: 'Verify a JSON Web Token (JWT)',
	overview: ({ token }) => [
		{
			label: 'Token',
			text: token,
		},
	],
	options: [
		{
			field: 'token',
			name: 'Token',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
			},
		},
		{
			field: 'secret',
			name: 'Secret',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				note: 'Defaults to the <a href="https://docs.directus.io/self-hosted/config-options.html#security" target="_blank" title="Configuration Options">secret string for the project</a>.',
				options: {
					iconRight: 'vpn_key',
				},
			},
		},
		{
			field: 'options',
			name: 'Options',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
				note: 'An object passed to the <a href="https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback" target="_blank">`jwt.verify` options argument</a>.',
				options: {
					language: 'json',
					placeholder: JSON.stringify(
						{
							maxAge: '1d',
						},
						null,
						2,
					),
					template: JSON.stringify(
						{
							maxAge: '1d',
						},
						null,
						2,
					),
				},
			},
		},
	],
});
