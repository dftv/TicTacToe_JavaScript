var round;
var partida = 0;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var ide;
var esc = true;

window.onload = page;

function page(){
    esc = true;
    document.getElementById("type").disabled = false;
}

function tipo() {
    if(esc == true) {
        document.getElementById("type").innerHTML = "IMAGEM";
        esc = false;
    }else{
        document.getElementById("type").innerHTML = "ESCRITO";
        esc = true;
    }
}

function start() {
    round = "X";
    partida = 0;
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.getElementById("vez").innerHTML = "Vez do: " + round;
    for (var x = 1; x <= 9; x++) {
        document.getElementById("area_" + x).disabled = false;
        document.getElementById("area_" + x).innerHTML = "";
    }
    document.getElementById("type").disabled = true;
}

function jogada(clicked_id) {
    document.getElementById(clicked_id).disabled = true;
    ide = clicked_id;
    if(round == "X") {
        if(esc == true){
            document.getElementById(clicked_id).innerHTML = round;
        }else{
            document.getElementById(clicked_id).innerHTML = '<img src="lib/X.png" class="im"></img>';
        }
        verifica();
        round = "O"
    }else if(round == "O") {
        if(esc == true){
            document.getElementById(clicked_id).innerHTML = round;
        }else{
            document.getElementById(clicked_id).innerHTML = '<img src="lib/O.png" class="im"></img>';
        }
        verifica();
        round = "X";
    }
    partida++;
    document.getElementById("vez").innerHTML = "Vez do: " + round;
}

function verifica() {
    for(var y = 1; y <= 9; y++) {
        if(ide == "area_" + y) {
            if(round == "X") {
                arr[y] = 1;
            }else if(round == "O") {
                arr[y] = 2;
            }
        }
    }

    horizontal();
    vertical();
    diagonal();

    if(partida == 9){
        alert("Deu velha! Ninguém ganhou :(");
        start();
    }
}

function horizontal() {
    if(arr[1] != 0 && arr[2] != 0 && arr[3] != 0 && arr[1] == arr[2] && arr[2] == arr[3]) {
        ganhou();
    }else if(arr[4] != 0 && arr[5] != 0 && arr[6] != 0 && arr[4] == arr[5] && arr[5] == arr[6]){
        ganhou();
    }else if(arr[7] != 0 && arr[8] != 0 && arr[9] != 0 && arr[7] == arr[8] && arr[8] == arr[9]){
        ganhou();
    }
}

function vertical() {
    if(arr[1] != 0 && arr[4] != 0 && arr[7] != 0 && arr[1] == arr[4] && arr[4] == arr[7]) {
        ganhou();
    }else if(arr[2] != 0 && arr[5] != 0 && arr[8] != 0 && arr[2] == arr[5] && arr[5] == arr[8]){
        ganhou();
    }else if(arr[3] != 0 && arr[6] != 0 && arr[9] != 0 && arr[3] == arr[6] && arr[6] == arr[9]){
        ganhou();
    }
}

function diagonal() {
    if(arr[1] != 0 && arr[5] != 0 && arr[9] != 0 && arr[1] == arr[5] && arr[5] == arr[9]) {
        ganhou();
    }else if(arr[3] != 0 && arr[5] != 0 && arr[7] != 0 && arr[3] == arr[5] && arr[5] == arr[7]){
        ganhou();
    }
}

function ganhou() {
    alert(round + " ganhou!");
    document.location.reload(true);
}
