let log = console.log;

let day = 0;
let year = 0;
let month = 0;

let dayMonth = 0;
let dayYear = 0;

const isLeapYear = year => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0 ;

let isNum = input => typeof(input) != 'boolean' && !isNaN(input) && input != null && input != undefined;

let calDayMonth = function(month, year) {
    for (let i = 1; i <= month; i++) {
        if(i - 1 == 0) {
            dayMonth = 0;
        } else if (i - 1 == 2) {
            if(isLeapYear(year)) {
                dayMonth += 29;
            } else {
                dayMonth += 28;
            }
        } else if (i - 1 == 4 || i - 1 == 6 ||i - 1 == 9 || i - 1 == 11) {
            dayMonth += 30;
        } else {
            dayMonth += 31;
        }
    } return dayMonth;
};

let calDayYear = function(year){ 
    for (let i = 1; i <= year; i++) {
        if (i == 1) {
            dayYear = 0;
        } else {
            if(isLeapYear(i-1)) {
                dayYear += 366;
            } else {
                dayYear += 365;
            };
        };
    } return dayYear;
};

let totalDay = (day , month , year) => {
    if(day <= 31 && day > 0 && isNum(day)) {

        let thirtyOneDays;

        if(day > 30) {
            thirtyOneDays = true;
        } else {
            thirtyOneDays = false;
        };

        if(month >= 1 && month <= 12 && (isNum(month))) {
            if(thirtyOneDays) {
                if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                    calDayMonth(month,year);
                } else {
                    log('Invalid month');
                }
            } else {
                calDayMonth(month,year);
            };
        }

        if (isNum(year)) {
                calDayYear(year);
        } else {
                log('Invalid year');
        };

    } else {
        log('Invalid day');
    };

    return sumDay = day + dayMonth + dayYear; 
};

let startDate = totalDay;
let endDate = totalDay;
let age = (startDay, startMonth, startYear, endDay, endMonth, endYear) => endDate(endDay, endMonth, endYear) - startDate(startDay, startMonth, startYear) + 1;

log(age(1,1,2020,31,12,2020));











