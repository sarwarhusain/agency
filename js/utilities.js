function getInputFieldValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

//routing
function showSection(id) {
    document.getElementById('section-all').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    
    document.getElementById(id).classList.remove('hidden');
}

