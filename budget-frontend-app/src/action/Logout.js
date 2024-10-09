// The logout.js file handles the deletion of account and message relayed after such action
import { redirect } from "react-router-dom";

//import helpers to handle import
import { deleteItem } from "../helpers";
//toast library import
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName"
    })
    toast.success("Account deleted") //if using a database use a promise to wait on response
    // return redirect
    return redirect("/")
}