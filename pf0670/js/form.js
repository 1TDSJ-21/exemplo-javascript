
function validaCamposForm(){
    //Criando um array de elementos
    const inputs = document.querySelectorAll('input');
    let controle = true;
    //Percorrendo o array através dos elementos
    for(elemento of inputs){
        //Validando cada elemento
        if(elemento.value == ''){
            elemento.style.border = '2px solid #ff0000';
            controle = false;
        }
    }

    return controle;
}


//ROTAÇÃO DE BANNER
function bannerAnima1(){
    const girassol = document.getElementById('titImg');
    girassol.src = './img/banner-1.jpg';
    setTimeout('bannerAnima2()',1000);
}

function bannerAnima2(){
    const girassol = document.getElementById('titImg');
    girassol.src = './img/banner-2.jpg';
    setTimeout('bannerAnima3()',3000);
}

function bannerAnima3(){
    const girassol = document.getElementById('titImg');
    girassol.src = './img/banner-3.jpg';
    setTimeout('bannerAnima1()',2000);
}

bannerAnima1();