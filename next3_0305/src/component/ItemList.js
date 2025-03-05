//list는 속성이자 인자값이기도 하다. 인자값을 여러개를 지정할 수 있기때문에, 한번에 통으로 받기 때문에
// 그냥 list를 사용하게 되면 list.list.length를 사용해야 한다.

import { Grid2 } from "@mui/material";
import styles from "./css/ItemList.module.css";
import Link from "next/link";

// 세분화 되서 필수적으로 반드시 받아야하는 인자값이면 {}를 사용해서 인자값을 받아야한다.
export default function ItemList({list}){
    return(
        <div>
            <Grid2 container>
            {list.map( (item) => (
                <Grid2 item size={{xs:3}} key={item.id}>
                    {/*다이나믹 라우터 사용 */}
                    <Link href="/views/[id]" as={'/views/'+item.id}>
                    <div className={styles.wrap}>
                    <img className={styles.img_item} src={item.image_link} alt={item.name}/>
                    <div className={styles.title_item}><strong>{item.name}</strong></div>
                    <span className={styles.txt_info}>{item.category} &nbsp; {item.product_type}</span>
                    <div className={styles.num_price}>
                        <strong>{item.price}$</strong>
                    </div>
                </div>
                </Link>
            </Grid2>
            ))}
            </Grid2>
        </div>
    );
}