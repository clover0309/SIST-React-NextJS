import { Button } from '@mui/material';
import styles from './css/Item.module.css';

//컴포넌트를 사용할 곳에서 item이라고 인자명을 명시적으로 지정하였으므로,
// 인자값으로 {item}을 사용한다, 현재 item에는 json형태의 값이 여러가지 들어와 있다.
export default function Item({item}){
    //json안의 변수명만 전부 써주고, 위에서 인자값으로 쓰인 item을 사용하면 전부 알아서
    // 변수명에 맞게 들어간다.
    const {
        id, name, price, image_link,
        description,updated_at,category,
        product_type,product_link
    } = item;
    return(
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={image_link} alt={name}/>
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{name}</strong>
                    <strong className={styles.num_price}>{price}</strong>
                    <span className={styles.txt_info}>
                        {/* 삼항연산자를 통해, category /를 출력하거나,
                        화이트 스페이스를 출력하거나를 지정, 여기서도 백틱이 사용됨 */}
                        {category? `${category}/`:""}
                        {product_type}
                    </span>
                    <Button variant='contained' color='error'>
                        구매하기
                    </Button>
                </div>
            </div>
            <div className={styles.disWrap}>
                <h3>Description</h3>
                <div style={{paddingBottom:20, fontSize:17}}>
                    {description}
                </div>
            </div>
        </>
    );
}