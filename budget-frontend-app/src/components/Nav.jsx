//assets
import { Form, NavLink } from "react-router-dom"; //rrd imports
import website_img from "../assets/website_img.png";

//heroicons library import
import { TrashIcon } from "@heroicons/react/24/solid"

const Nav = ({userName}) => {
    return (
        <nav>
           <NavLink
           to="/"
           aria-label="Go to home page"
           >
           <img src={website_img} alt="" height={30}/>
           <span>Budget Frontend</span>
           </NavLink>
           {
            userName && (
                <Form 
                method="post" 
                action="/logout"
                onSubmit={(event) => {
                    if (!confirm("Delete user and all data?")) {
                        event.preventDefault()
                    }
                }} 
                >
                    <button type="submit" className="btn btn--warning">
                        <span>Delete Account</span>
                        <TrashIcon width={20} />
                    </button>

                </Form>
            )
           }
        </nav>
    )
}

export default Nav