/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
            {
                //destination에 있는 링크를 제외한 경로를 넣어주면된다.
                source:'/board/:path*' ,
                destination: 'http://localhost:8080/board/:path*'
            }
        ]
    }
};

export default nextConfig;
