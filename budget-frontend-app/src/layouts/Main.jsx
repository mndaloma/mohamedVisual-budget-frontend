//React router dom import rrd
import { Outlet, useLoaderData } from "react-router-dom";
//helper function
import { fetchData } from "../helpers"
import wave from "../assets/wave.svg";

//creating loader function
export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()
    return (
        <div>
            <h1>main</h1>
            <main>
            <Outlet />
            </main>
            <img src="{wave}" alt="" />
        </div>
    )
}

export default Main