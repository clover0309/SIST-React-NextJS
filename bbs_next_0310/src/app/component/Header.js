'use client';
import Link from "next/link";
import TokenStore from "../store/TokenStore";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Header() {
    //쿠키를 상수 cookiestore에 지정.
    // const cookieStore = await cookies();
    // cookiestore에서 accessToken이라는 이름을 가진 토큰을 가져와 상수 accessToken에 지정.
    // const accessToken = cookieStore.get("accessToken")?.value;

    const API_URL = "/api/v1/members/logout";

    const router = useRouter();

    //zustand를 통해 TokenStore 만든 것을 사용
    const {accessToken, setToken} = TokenStore();

    function logout() {
      axios.post(API_URL).then((res) => {
        if(res.status == 200) {
          if(res.data.msg === 'logout') {
            setToken(null);
            //sendRedirect 같은 함수이다.
            router.push("/");
          }
        }
      })
    }

    return(
    <header className="header">
        <div className="navBar">
          <Link href='/'>Home</Link>
          <Link href='/members'>Members</Link>
          <Link href='/bbs'>Board</Link>
        </div>
        <div className="fr">
        { accessToken == null ? (
          <Link href="/members/login">Login</Link>
        ) : (
          <Link href="" onClick={logout}>Logout</Link>
        )}
        <Link href="/members/signup">Sign up</Link>
        </div>
        </header>
    );
}