//noakhali
document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault()


    const noakhaliAddMoney = getInputFieldValueById('input-noakhali-add-money');

    if (isNaN(noakhaliAddMoney) || noakhaliAddMoney <= 0) {
        alert('Invalid Number');
        return
    }
    const balance = parseFloat(document.getElementById('noakhali-balance').innerText);

    const newBalance = balance + noakhaliAddMoney;
    document.getElementById('noakhali-balance').innerText = newBalance.toFixed(2);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (accountBalance < 0 || noakhaliAddMoney > accountBalance) {
        alert('Failed to Donate,Please Try Again')
        return
    }
    const newAccountBalance = accountBalance - noakhaliAddMoney;
    document.getElementById('account-balance').innerText = newAccountBalance;

    document.getElementById('btn-noakhali').innerText;
    alert('Congratulations');


    const div = document.createElement('div');
    div.innerHTML = `<div class="mt-3">
    <h4 class="font-semibold">${noakhaliAddMoney} Taka is Donated for famine-2024 at Feni, Bangladesh </h4>
   <p>Date: ${new Date().toString()}</p>
    </div>

    `
    document.getElementById('history-section').appendChild(div)
})
//feni
document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault()

    const feniAddMoney = getInputFieldValueById('input-feni-add-money');

    if (isNaN(feniAddMoney) || feniAddMoney <= 0) {
        alert('Invalid Number');
        return
    }
    const balance = parseFloat(document.getElementById('feni-balance').innerText);

    const newBalance = balance + feniAddMoney;
    document.getElementById('feni-balance').innerText = newBalance.toFixed(2);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (accountBalance < 0 || feniAddMoney > accountBalance) {
        alert('Failed to Donate,Please Try Again')
        return
    }
    const newAccountBalance = accountBalance - feniAddMoney;
    document.getElementById('account-balance').innerText = newAccountBalance;

    document.getElementById('btn-noakhali').innerText;
    alert('Congratulations');

    const div = document.createElement('div');
    div.innerHTML = `<div class="mt-3">
    <h4 class="font-semibold">${feniAddMoney} Taka is Donated for Flood Relief in Feni,Bangladesh.</h4>
   <p>Date: ${new Date().toString()}</p>
    </div>

    `
    document.getElementById('history-section').appendChild(div)

})
// quota
document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault()


    const quotaAddMoney = getInputFieldValueById('input-quota-add-money');

    if (isNaN(quotaAddMoney) || quotaAddMoney <= 0) {
        alert('Invalid Number');
        return
    }
    const balance = parseFloat(document.getElementById('quota-balance').innerText);

    const newBalance = balance + quotaAddMoney;
    document.getElementById('quota-balance').innerText = newBalance.toFixed(2);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (accountBalance < 0 || quotaAddMoney > accountBalance) {
        alert('Failed to Donate,Please Try Again')
        return
    }
    const newAccountBalance = accountBalance - quotaAddMoney;
    document.getElementById('account-balance').innerText = newAccountBalance;

    document.getElementById('btn-quota').innerText;
    alert('Congratulations');

    const div = document.createElement('div');
    div.innerHTML = `<div class="mt-3">
    <h4 class="font-semibold" >${quotaAddMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.</h4>
   <p>Date: ${new Date().toString()}</p>
    </div>

    `
    document.getElementById('history-section').appendChild(div)

})

