//React router dom import rrd
import { useLoaderData } from "react-router-dom";
//helper function
import { createBudget, createExpense, fetchData, waiting } from "../helpers"
import Intro from "../components/Intro";
//library imports for toastify
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItemGoal from "../components/BudgetItemGoal";

//creating loader function
export function dashboardLoader(){
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets }
}

//Action to submit
export async function dashboardAction({request}) {
    await waiting();
    
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data)

    //new user submission
    if(_action === "newUser"){
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch (e) {
            throw new Error("There was a problem creating your account")
        }
    }

    if (_action === "createBudget"){
        try {
            //create budget
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount,
            })

            return toast.success("Budget created!")
        } catch(e){
            throw new Error("There was a problem creating budget.")
        }
    }

    if (_action === "createExpense"){
        try {
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            return toast.success(`Expense ${values.newExpense} created!`);
        } catch(e){
            throw new Error("There was a problem creating expense.")
        }
    }
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData()
    return (
        <>
            {userName ? (
                <div className="dashboard">
                    <h1>Welcome back, <span className="accent">
                        {userName}</span></h1>
                    <div className="grid-sm">
                        {
                            budgets && budgets.length > 0 
                            ? (
                            <div className="grid-lg">
                              <div className="flex-lg">
                                <AddBudgetForm />
                                <AddExpenseForm budgets={budgets} />
                            </div>
                            <h2>Existing Budget Goals</h2>
                            <div className="budgets">
                                {
                                    budgets.map((budget) =>(
                                        <BudgetItemGoal key={budget.id} budget={budget} />
                                    ))
                                }
                            </div>
                         </div>
                         )
                         : (
                            <div className="grid-sm">
                                <p>Make personal budgeting a life long mission.</p>
                                <p>Create budget to get started</p>
                                <AddBudgetForm />
                            </div>
                         )
                        }
                    </div>
                </div>
            ) : 
            <Intro /> }
        </>
    )
}

export default Dashboard