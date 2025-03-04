import Link from "next/link";

export default function Menuitem() {
    const link_item = [
        {title:"Home", path:"/"},
        {title:"Content", path:"/content"},
        {title:"Blog", path:"/blog"},
        {title:"About", path:"/about"}
    ];

    return(
        <>
        {link_item.map( (item) => ( 
                <span key={item.title}>
                <Link href={item.path}>
                {item.title}
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
        ))}
        </>
    );
}