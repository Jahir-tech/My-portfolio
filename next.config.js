/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: "/about", destination: "/#about", permanent: true },
			{ source: "/pricing", destination: "/#contact", permanent: true },
			{ source: "/blog/:path*", destination: "/#work", permanent: true },
			{ source: "/ai-examples/:path*", destination: "/#work", permanent: true },
			{ source: "/docs/:path*", destination: "/#stack", permanent: true },
			{ source: "/error", destination: "/", permanent: true },
		];
	},
};

module.exports = nextConfig;
