

function Button(props)
{
    function handleClick()
    {
        console.log("button clicked")
    }
    return(
    <div>
        <button onClick={handleClick}/>{props.Children}
        {/* <><button onClick={props.onSelect}>{props.children}</button></> */}
        </div>
);
}
export default Button