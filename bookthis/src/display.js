function Display(props)
    {
        return(
            <li>
                <ul><img src={props.img}/></ul>
                <ul>Title:{props.Title}</ul>
                <ul>Author:{props.Author}</ul>
                <ul>Price:{props.Price}</ul>
            </li>
        )
    }
export default Display;