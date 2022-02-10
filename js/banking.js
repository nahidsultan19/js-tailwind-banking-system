//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balaceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balaceTotal.innerText;
    const newBalanceTotalAmount = parseFloat(previousBalanceTotal) + newDepositTotal;
    balaceTotal.innerText = newBalanceTotalAmount;
    // for clear input fieldn 
    depositInput.value = '';



});

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    // update withdraw amount 
    const withdrawTolal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTolal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);

    withdrawTolal.innerText = newWithdrawTotal;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText
    const newBalanceTotal = parseFloat(previousBalanceTotal) - newWithdrawTotal;

    balanceTotal.innerText = newBalanceTotal;

    // clear input
    withdrawInput.value = '';
});