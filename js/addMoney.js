//noakhali
document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault()

    // const noakhaliAddMoney = parseFloat(document.getElementById('input-noakhali-add-money').value);

    // if (isNaN(noakhaliAddMoney)) {
    //     alert('failed to add money');
    //     return
    // }

    // const balance = parseFloat(document.getElementById('noakhali-balance').innerText);

    // const newBalance = balance + noakhaliAddMoney;

    // document.getElementById('noakhali-balance').innerText = newBalance;
    const noakhaliAddMoney = getInputFieldValueById('input-noakhali-add-money');

    if (isNaN(noakhaliAddMoney)) {
        alert('failed to add money');
        return
    }
    const balance = parseFloat(document.getElementById('noakhali-balance').innerText);
    const newBalance = balance + noakhaliAddMoney;
    document.getElementById('noakhali-balance').innerText = newBalance.toFixed(2);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (accountBalance <= 0) {
        alert('failed to donate')
        return
    }
    const newAccountBalance = accountBalance - balance;
    document.getElementById('account-balance').innerText = newAccountBalance;
    
})
//feni
document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault()

    const noakhaliAddMoney = getInputFieldValueById('input-feni-add-money');

    if (isNaN(noakhaliAddMoney)) {
        alert('failed to add money');
        return
    }
    const balance = parseFloat(document.getElementById('feni-balance').innerText);
    const newBalance = balance + noakhaliAddMoney;
    document.getElementById('feni-balance').innerText = newBalance.toFixed(2);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (accountBalance <= 0) {
        alert('failed to donate')
        return
    }
    const newAccountBalance = accountBalance - balance;
    document.getElementById('account-balance').innerText = newAccountBalance;
    
})
// quota
document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault()

    const noakhaliAddMoney = getInputFieldValueById('input-quota-add-money');

    if (isNaN(noakhaliAddMoney)) {
        alert('failed to add money');
        return
    }
    const balance = parseFloat(document.getElementById('quota-balance').innerText);
    const newBalance = balance + noakhaliAddMoney;
    document.getElementById('quota-balance').innerText = newBalance.toFixed(2);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (accountBalance <= 0) {
        alert('failed to donate')
        return
    }
    const newAccountBalance = accountBalance - balance;
    document.getElementById('account-balance').innerText = newAccountBalance;
    
})
