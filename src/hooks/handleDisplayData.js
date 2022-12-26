//get current data -> onclick value in dropdown list
function displayCurrentData(currentValue, employeeList, tab, range) {
    if(currentValue === 0) {
        employeeList.filter((employee, index) => {
            if((currentValue - 1) <= index && index < range){
                tab.push(employee)
            }
            return employee
        })
    }
    return tab
}

 //get next data -> onclick next button
function displayNextData(currentValue, employeeList, tab, range) {
    employeeList.filter((employee, index) =>{   
        if(currentValue <= index && index < (currentValue + range)) {
            tab.push(employee)
        }
        return employee
    })
    return tab
}

 //get previous data -> on click previous button
 function displayPreviousData(currentValue, employeeList, tab, range) {
    employeeList.filter((employee, index) =>{   
        if((currentValue + range) > index && index >= currentValue ) {
            tab.push(employee)
        }
        return employee
    })
    return tab
}



export default function handleDisplay(currentValue, employeeList, range, status) {
    let tab = []
    switch(status) {
        case 'current':
            displayCurrentData(currentValue, employeeList, tab, range)
            break

        case 'increment':
            displayNextData(currentValue, employeeList, tab, range)
            break

        case 'decrement':
            displayPreviousData(currentValue, employeeList, tab,  range)
            break

        default :
            return console.log('status does not exist');
    }

    return [...new Set(tab)]
}
