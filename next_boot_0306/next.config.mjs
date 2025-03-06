/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return[
            {
                //board로 시작하는 모든것들을 의미함.
                source: "/board/:path*",
                destination: "http://localhost:8080/board/:path*"
            }
        ];
    }
};

export default nextConfig;
