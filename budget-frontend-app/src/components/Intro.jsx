import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid"
import growth from "../assets/growth.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Financial literacy begins <span className="accent">with just a steps.</span>
                </h1>
                <p>
                    Good money management is the secret to financial literacy.
                </p>
                <Form method="post">
                    <input type="text" 
                    name="userName" 
                    required
                    placeholder="Enter name to begin journey"
                    aria-label="Your Name" 
                    autoComplete="given-name"
                    />
                    <input type="hidden" 
                    name="_action" 
                    value="newUser" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20}/>
                    </button>
                </Form>
            </div>
            <img src={growth} alt="Climbing the ladder" />
        </div>
    )
}


export default Intro