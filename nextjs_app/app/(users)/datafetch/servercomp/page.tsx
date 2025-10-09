// import { log } from "console";

const DatafetchServer = async (props) => {
    const searchParams = await props.searchParams;

    const userName = searchParams.name
    
  const res =  await fetch(`https://api.genderize.io/?name=${userName}`)
  const data =  await res.json();
  console.log(data);
  
  
  
  return (
        <>
            <h1>Data fetching form backend - {data.name}</h1>
            <p>gender - {data.gender}</p>
            <p>Count - {data.count}</p>
            <p>chances - The chances are {data.probability * 100} out of 100</p>
        </>
    )
}

export default DatafetchServer;