function insertGender() {
    if (document.getElementById('genderOther').checked) {
        document.getElementById('genderOtherInput').disabled = false;
    }
    if (document.getElementById('man').checked) {
        document.getElementById('genderOtherInput').disabled = true;
    }
    if (document.getElementById('woman').checked) {
        document.getElementById('genderOtherInput').disabled = true;
    }
    if (document.getElementById('nonBinary').checked) {
        document.getElementById('genderOtherInput').disabled = true;
    }
}

function formSubmit() {
    window.alert("Formulário Concluído! Muito obrigado!");
}