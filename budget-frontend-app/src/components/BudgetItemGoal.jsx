import { calculateSavedByBudget, formatCurrency, formatPercentage } from "../helpers";

const BudgetItemGoal = ({budget}) => {
    const {id, name, amount, color} = budget;
    const saved = calculateSavedByBudget(id);


    return (
        <div 
           className="budget"
           style={{
            "--accent": color
           }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={saved}>
                {formatPercentage(saved / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(saved)} saved</small>
                <small>{formatCurrency(amount - saved)} remaining</small>
            </div>
        </div>
    )
}

export default BudgetItemGoal