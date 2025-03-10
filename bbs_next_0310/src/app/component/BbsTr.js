export default function BbsTr(props) {
    return(
    <tr>
        <td>{props.b_idx}</td>
        <td>{props.title}</td>
        <td>{props.writer}</td>
        <td>{props.write_date}</td>
        <td>{props.hit}</td>
    </tr>
    );
}