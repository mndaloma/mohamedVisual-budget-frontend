//Used for routing our application
//Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}