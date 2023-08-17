// //Sum Input and Element Value
// document.getElementById('deposit-btn').addEventListener('click',() =>{
//     const newDepositAmount = getInputValueById('deposit-field');
//     const preDepositAmount = getElementValueById('deposit_total');
//     //sum Deposit
//     const newDepositTotal = preDepositAmount + newDepositAmount;
//     setTextElementValueById('deposit_total', newDepositTotal);
//     //Deposit Add Balance
//     const preBalanceAmount = getElementValueById('balance-total')
//     const newBalanceTotal = newDepositAmount + preBalanceAmount;
//     setTextElementValueById('balance-total', newBalanceTotal);
// } );


//Withdraw - Input and Element Value
document.getElementById('withdraw-btn').addEventListener('click',()=>{
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const preWithdrawAmount = getElementValueById('withdraw_total');
    //Sum Withdraw
    const newWithdrawTotal = preWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw_total', newWithdrawTotal);
    //Withdraw Connect Balance
    const preBalance = getElementValueById('balance-total');
    const newBalanceTotal = preBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal)
})