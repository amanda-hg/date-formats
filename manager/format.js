'use strict';

const format = params => {
    let result = '';
    params = params.toLowerCase();
    let dateObject = new Date();
    let date = String(dateObject).split(' ').slice(1,4);
    const month = getMonth(date[0]);
    const year = date.pop();
    const day = date.pop();
    if (params.includes('-')) {
        const parts = params.split('-');
        if (parts[0] == 'dd' && parts[1] == 'mm') {
            result = `${day}-${month}-${year}`;
        } else if (parts[0] == 'yyyy' && parts[1] == 'mm') {
            result = `${year}-${month}-${day}`;
        } else if (parts[0] == 'mm' && parts[1] == 'dd'){
            result = `${month}-${day}-${year}`;
        } else {
            result = 'The formats allowed are: "YYYY-MM-DD", "DD-MM-YYYY", "MM-DD-YYYY"';
        }
    } else {
        const parts = params.split('/');
        if (parts[0] == 'dd' && parts[1] == 'mm') {
            result = `${day}/${month}/${year}`;
        } else if (parts[0] == 'yyyy' && parts[1] == 'mm') {
            result = `${year}/${month}/${day}`;
        } else if (parts[0] == 'mm' && parts[1] == 'dd'){
            result = `${month}/${day}/${year}`;
        } else {
            result = 'The formats allowed are: "YYYY/MM/DD", "DD/MM/YYYY", "MM/DD/YYYY"';
        }
    }
    return result;
};

const months = { 
    'Dec': 12,
    'Nov': 11,
    'Oct': 10,
    'Sep': 9,
    'Aug': 8,
    'Jul': 7,
    'Jun': 6,
    'May': 5,
    'Apr': 4,
    'Mar': 3,
    'Feb': 2,
    'Jan': 1
}

const getMonth = month => months[month];

module.exports = format;
