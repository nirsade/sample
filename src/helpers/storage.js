export const saveToLocal = (key, value) => {
    localStorage.setItem(key, value);
}

export const getFromLocal = key => {
    return localStorage.getItem(key);
}

export const removeFromLocal = key => {
    localStorage.removeItem(key);
}