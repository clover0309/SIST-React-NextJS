/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return[
            {   
                //해당부분은 하나만 존재해야하는 것이 아니라, 여러개가 존재할 수 있다.
                //source에서 지정한 경로는
                source: "/notice/:path*",
                //여기로 도착하게 된다.
                destination: "http://localhost:8080/notice/:path*",
            }
        ];
    }
};

export default nextConfig;
