import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr({ exportAsDefault: false })],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use './src/Components/styles/variables/_colors.scss' as c;
        @use './src/Components/styles/variables/_fonts.scss' as f;`,
			},
		},
	},
});
