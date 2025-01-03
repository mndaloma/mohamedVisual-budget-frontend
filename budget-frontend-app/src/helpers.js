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

// create expense
export const createExpense = ({
    name, amount, budgetId
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? []
    return localStorage.setItem("expenses",
        JSON.stringify([...existingExpenses, newItem]))
}

// delete items
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}

// amount total saved 
export const calculateSavedByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSaved = expenses.reduce((acc, expense) => {
        if(expense.budgetId !== budgetId) return acc

        return acc += expense.amount

    }, 0)
    return budgetSaved
}

//Formating currency

//percentage formating
export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0
    })
}

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    })
}