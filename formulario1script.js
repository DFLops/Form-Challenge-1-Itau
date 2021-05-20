function insertGender() {
    if (document.getElementById('genderOther').checked) {
        document.getElementById('genderOtherInput').disabled = false;
    } else {
        document.getElementById('genderOtherInput').disabled = true;
    }
}

function formSubmit() {
    window.alert("Formulário Concluído! Muito obrigado!");
}