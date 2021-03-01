module.exports = function date() {

    let text = document.getElementById('today');

    let todayDate = new Date();
    let dd = String(todayDate.getDate()).padStart(2, '0');
    let mm = String(todayDate.getMonth() + 1).padStart(2, '0');
    let yyyy = String(todayDate.getFullYear());

    return(todayDate = dd + '/' + mm + '/' + yyyy);

    let data = document.createTextNode('  ' + todayDate);

    text.appendChild(data);
}