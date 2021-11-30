var hody = [];
var pocetHodu = 0;

var timer = false;

document.getElementById('game').addEventListener('click',
    function(){
        if (!timer) {
            timer = true;
            timer1 = setInterval(prvniHod, 1000);
            timer2 = setInterval(druhyHod, 1000);
            timer3 = setInterval(tretiHod, 1000);
            this.innerHTML = "STOP";
        }
        else {
            timer = false;
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            this.innerHTML = "PLAY";
            hod()
        }
    }
);

function prvniHod() {
    hod1 = Math.ceil(Math.random()*6);
    document.getElementById("cube").src = `./img/kostka${hod1}.png`
}

function druhyHod() {
    hod2 = Math.ceil(Math.random()*6);
    document.getElementById("cube2").src = `./img/kostka${hod2}.png`
}

function tretiHod() {
    hod3 = Math.ceil(Math.random()*6);
    document.getElementById("cube3").src = `./img/kostka${hod3}.png`
}

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    pocetHodu++;
    hody.push(hod1);
    hody.push(hod2);
    hody.push(hod3);
    document.getElementById('result').innerHTML = `<p>Hody: ${hod1}, ${hod2}, ${hod3}</p>`;
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + pocetHodu + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejnižší hod: ' + minimum(hody) + '</p>';
}