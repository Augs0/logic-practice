exports.queueTime = (customers, tills) => {
    if(tills === 1){
        return customers.reduce((sumEveryIteration, finalSum) => {
          return sumEveryIteration + finalSum;
        }, 0)
    } else if(customers.length === tills){
        return Math.max(...customers);
    } else{
        let allTills = [];
        for (let i = 0; i < tills; i++) {
          allTills[i] = customers[i];
        }
        for (let i = allTills.length; i < customers.length; i++) {
            const nextCustomerTime = customers[i];
            const shortestTime = allTills.indexOf(Math.min(...allTills))
            allTills[shortestTime] += nextCustomerTime;
          }
          return Math.max(...allTills);
    } 
}