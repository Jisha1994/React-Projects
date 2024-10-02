const names=["JISHA", "MES", "MIN"] 
function getRandomName(max)
{
    return Math.floor(Math.random()*max+1);
}

function Random()
{
return( <h1> hello {names[getRandomName(2)]}</h1>);
}
export default Random;