function currentYear() {
    let d = new Date()
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

window.onload = function() {
    currentYear()
}