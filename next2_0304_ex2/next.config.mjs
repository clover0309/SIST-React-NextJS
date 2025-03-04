/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return[
            {
                source: "/notice/:path*",
                destination: "http://localhost:8080/notice/:path*",
            }
        ];
    }
};

export default nextConfig;
