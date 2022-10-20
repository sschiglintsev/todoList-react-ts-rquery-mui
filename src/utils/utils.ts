export const formatDate = () => {
    const date = new Date();
    const curr_date = date.getDate();
    const curr_month = date.getMonth() + 1;
    const curr_year = date.getFullYear();
    const formatDate = (curr_year + "-" + curr_month + "-" + curr_date);
    return formatDate
};

export const formatDateShort = () => {
    const dateArr = ['Tomorrow Tasks']
    const date = new Date();
    const curr_date = date.getDate();
    const curr_month = date.getMonth() + 1;
    for (let i = 1; i < 5; i++) {
        const formatDate = (curr_date + i + "/" + curr_month);
        dateArr.push(formatDate + " Tasks")
    }
    return dateArr

};