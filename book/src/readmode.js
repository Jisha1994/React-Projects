
function ReadButton(props)
 {
    function clickToRead() 
    {
        window.alert("Getting into read mode");
    }

    return (
        <button onClick={clickToRead}>
            {props.children}
        </button>
    );
}

export default ReadButton;
;
