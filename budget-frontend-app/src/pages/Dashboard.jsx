//React router dom import rrd
import { useLoaderData } from "react-router-dom";
//helper function
import { fetchData } from "../helpers"

//creating loader function
export function dasboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()
    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
}

export default Dashboard