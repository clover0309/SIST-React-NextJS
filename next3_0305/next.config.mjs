/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        //외부통신을 위한 api경로가 여러개 일 수 있으니 배열로 받음.
        return[
            {
            source: "/api/:path*",
            destination: "https://makeup-api.herokuapp.com/api/:path*"
            }
        ]
    }
};

export default nextConfig;
