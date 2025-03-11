"use client";
import styles from "../../page.module.css";

export default function Page() {
    function signIn() {

    }

    function handleChange() {

    }

    function handleSubmit() {
        
    }
  return (
    <main className={styles.main}>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
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
