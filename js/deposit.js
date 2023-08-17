//Sum Input and Element Value
document.getElementById('deposit-btn').addEventListener('click',() =>{
    const newDepositAmount = getInputValueById('deposit-field');
    const preDepositAmount = getElementValueById('deposit_total');
    //sum Deposit
    const newDepositTotal = preDepositAmount + newDepositAmount;
    setTextElementValueById('deposit_total', newDepositTotal);
    //Deposit Add Balance
    const preBalanceAmount = getElementValueById('balance-total')
    const newBalanceTotal = newDepositAmount + preBalanceAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
} );



















// Deposit Function
// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const newDeposit = getInputValue('deposit-field');
//     const preDeposit = getInputValue('deposit_total');
//     const totalDeposit = preDeposit + newDeposit;
//     const totalDepo = getTotalId('deposit_total');
//     totalDepo.innerText = totalDeposit;
    
    
//     // Deposit Add Balance
//     const preBalance = getInputValue('balance-total');
//     const newBalanceTotal = preBalance + newDeposit;
//     const balanceTotal = getInputValue('balance-total');
//     const totalBala = getTotalId('balance_total');
//     totalBala.innerText = balanceTotal;
    
// });



// const preBalance = getInputValue('balance-total');
// console.log(preBalance);
// const newBalance = preBalance + newDeposit;
// const totalBalance = getTotalId('balance-total');
// totalBalance.innerText = newBalance;
// console.log(newDeposit);

// First Step

// function getInputValue(getInput){
//     const getInputValue = document.getElementById(getInput);
//     const inputValueString = getInputValue.value || getInputValue.innerText;
//     getInputValue.value = '';
//     const inputValue = parseFloat(inputValueString);
//     return inputValue;
// }