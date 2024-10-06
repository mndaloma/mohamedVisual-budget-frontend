//React router dom import rrd
import { Outlet, useLoaderData } from "react-router-dom";
//helper function
import { fetchData } from "../helpers"
//assets
import wave from "../assets/wave.svg";
//components nav.jsx
import Nav from "../components/Nav";

//creating loader function
export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()
    return (
        <div className="layout">
            <Nav userName={userName}/>
            <h1>main</h1>
            <main>
            <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    )
}

export default Main