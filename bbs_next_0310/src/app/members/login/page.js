"use client";
import { useState } from "react";
import styles from "../../page.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const API_URL = "/api/v1/members/login";
  const [member, setMember] = useState({});
  const router = useRouter();

    function signIn() {
      axios.post(API_URL, JSON.stringify(member), {
        headers:{
          "Content-Type":"application/json"
        }
      }).then((res) => {
        if(res.status == 200) {
          //성공시 localhost:3000/으로 가게됨.
          router.push("/");
        }
      });
    }
    //인자로 이벤트를 받는 handleChange
    function handleChange(e) {
      //이벤트 객체의 name과 value를 얻어옴.
      //let name = e.target.name;
      //let value = e.target.value;

      //위에서 선언한 것을 한줄로 줄이려면. 이렇게 사용하면됨.
      let {name,value} = e.target;

      //위에 있는 useState에 지정된 member를 복사 후 setMember에 지정함.
      setMember({...member, [name]:value})
    }

    

  return (
    <main className={styles.main}>
      <h1>로그인</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">사용자이름</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="mid"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">비밀번호</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="mpwd"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className={styles.txtCenter}>
                <button type="button" onClick={signIn}>
                  로그인
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </main>
  );
}
