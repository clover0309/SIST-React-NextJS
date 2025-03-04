import Link from "next/link";
import "../css/style.css"
import Menuitem from "./Menuitem";

export default function MyNav() {
    return(
        <>
            <div>LOGO</div>
            <div className="nav">

                {/*<Link href="/">Home</Link>
                <Link href="/content">Content</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>*/}
                <Menuitem/>
            </div>
        </>
    );
}