import { Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function MyCard({ar}) {
    return(
        <Card style={{width:'500px', margin:'20px auto'}}>
            <CardContent>
            {ar.map ((item, i) => (
                <Link key={i} href={`/card/${item.b_idx}`}>
                <div className="list-item">
                    <h4 className="list-item-h4">{item.subject}</h4>
                    <p className="list-item-p">{item.write_date}</p>
                </div>
                </Link>
            ))}
            </CardContent>
        </Card>
    )
}