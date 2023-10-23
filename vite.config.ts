import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	let config = {};

	// if (process.env.NODE_ENV == "production") {
	if (process.env.VITE_ENV == "production") {
		// console.log(process.env.NODE_ENV);
		config = {
			// server: { https: true },
			server: {
				https: {
					host: process.env.VITE_SERVER_HOST,
					key: fs.readFileSync("./certFiles/" + process.env.VITE_SERVER_KEY),
					cert: fs.readFileSync("./certFiles/" + process.env.VITE_SERVER_CERT),
					// host: 'dps-hzp.com',
					// key: fs.readFileSync('./certFiles/dps-hzp.key'),
					// cert: fs.readFileSync('./certFiles/dps-hzp_com.crt'),
				},
			},
			plugins: [
				react({
					// Add this line
					include: "**/*.jsx",
				}),
			],

			// plugins: [ mkcert() ],
			// server: {
			//   port: 5173
			// },
			preview: {
				port: process.env.VITE_SERVER_PORT,
				// port: 3036
			},
			define: {
				// Some libraries use the global object, even though it doesn't exist in the browser.
				// Alternatively, we could add `<script>window.global = window;</script>` to index.html.
				// https://github.com/vitejs/vite/discussions/5912
				_global: "({})",
			},
		};
	} else {
		// console.log(process.env.NODE_ENV);
		config = {
			plugins: [
				react({
					// Add this line
					include: "**/*.jsx",
				}),
			],
			// server: {
			//   port: 5173
			// },
			preview: {
				port: process.env.VITE_SERVER_PORT,
			},
			define: {
				// Some libraries use the global object, even though it doesn't exist in the browser.
				// Alternatively, we could add `<script>window.global = window;</script>` to index.html.
				// https://github.com/vitejs/vite/discussions/5912
				_global: {},
			},
		};
	}
	return config
});
// export default defineConfig({ config })
