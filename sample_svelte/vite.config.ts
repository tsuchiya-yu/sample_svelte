import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
    },
	server: {
		host: true,
		fs: {
			allow: ['./lib/graphql/apollo.ts']
		}
	}
});
