export default async function Page(props){
    return(
        <div>
            <h2>{props.params.num}</h2>
        </div>
    );
}