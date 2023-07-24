import jwt from 'jsonwebtoken';
import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	token: string;
	secret?: string;
	options?: Record<string, any>;
};

export default defineOperationApi<Options>({
	id: 'jwt-verify',
	handler: ({ token, secret, options }, { env }) => {
		return jwt.verify(
			token,
			secret || env['SECRET'],
			options || undefined
		);
	},
});
