

function Concept(props)
{
    return(
    <li>
        <ul><img src={props.img}/></ul>
        <ul>Title {props.Title}</ul>
        <ul>Description {props.Description}</ul>
    </li>
);
}
export default Concept;
