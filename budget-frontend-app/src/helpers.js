export const waiting = () => new Promise(res => 
    setTimeout (res, Math.random() * 800))

//colors scheme
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}
//Used for routing our application
//Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? []
    return localStorage.setItem("budgets",
        JSON.stringify([...existingBudgets, newItem]))
}

// delete items
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}