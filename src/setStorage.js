export const setStorage = async (key, value) => {
    
    try {

        const set = await localStorage.setItem(key, JSON.stringify(value))
    } catch(error) {
        console.log("error", error);
    }
}