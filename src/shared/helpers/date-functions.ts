export const convertMonth = (month: string) => {
    if (month[month.length - 1] === 'ь') {
        const monthAsArray = month.split('');
        monthAsArray.splice(monthAsArray.length - 1, 1, 'я');
        return monthAsArray.join('');
    }
    return `${month}а`;
};
