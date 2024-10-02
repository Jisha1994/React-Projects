import React,{useState, useEffect}  from 'react';

const SimpleFetchcomponent=()=>
{
    const [data, setData]= useState(null);
    useEffect(()=>{
        fetch('http://localhost:8080/departments')
        .then(response=>response.json())
        .then(result =>setData(result));
    },[]);
    return(
        <div >
      <h1>Fetched Posts:</h1>
      {data && data.map(post =>(
        <div key={post.departmentId}>
        <h2>{post.departmentName}</h2> 
        <p>{post.departmentAddress}</p>
        <p>{post.departmentCode}</p>
        </div>
        
      ))}
    </div>
    )
}
export default SimpleFetchcomponent;