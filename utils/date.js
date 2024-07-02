export const isValid = (dateString,freq) => {
    const date = new Date(dateString);
    const day = date.toLocaleString('en-us', { weekday: 'long' });
    return freq.includes(day);
}