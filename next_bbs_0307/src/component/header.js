import Nav from "./nav";

export default function Header() {
    return(
        <div style={{width: "90%", margin: "auto", paddingTop: "20px"}}>
            {/* public 경로는 /만 사용해서 경로 이동이 가능하다. */}
            <img src="/images/1.png" alt="logo"/>
            <Nav/>
        </div>
    );
}