//React router dom import rrd
import { useLoaderData } from "react-router-dom";
//helper function
import { fetchData } from "../helpers"
import Intro from "../components/Intro";
//library imports for toastify
import { toast } from "react-toastify";

//creating loader function
export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)
    } catch(e){
        throw new Error("There was a problem creating account.")
    }
    
}

const Dashboard = () => {
    const { userName } = useLoaderData()
    return (
        <>
            {userName ? (<p>{userName}</p>) : 
            <Intro /> }
        </>
    )
}

export default Dashboard