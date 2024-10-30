import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use './src/Components/styles/variables/_colors.scss' as c;
        @use './src/Components/styles/variables/_fonts.scss' as f;`,
			},
		},
	},
});
