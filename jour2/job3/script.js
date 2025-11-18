let count = 0;

function addone() {
    count ++;
    document.getElementById("compteur").textContent = count;
    document.body.insertBefore(count, button);
}

document.getElementById("button").addEventListener("click",addone);