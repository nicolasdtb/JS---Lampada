const switchLamp = document.getElementById('switchLamp');
const lamp = document.getElementById('lamp');
let isOn = false;


// ### A parte abaixo faz parte do código com um botão para ligar e outro para desligar

//const turnOff = document.getElementById('turnOff');
//const turnOn = document.getElementById('turnOn');
//turnOff.addEventListener('click', lampOff);


// ## Ao clicar no botão 'Interruptor', liga ou desliga a luz.
switchLamp.addEventListener('click', switchLights);

// ## Ao passar o mouse por cima da lâmpada, acende a luz.
lamp.addEventListener('mouseover', lampOn);

// ## Ao retirar o mouse de cima da lâmpada, desliga a luz.
lamp.addEventListener('mouseleave', lampOff);

// ## Ao dar um duplo clique sobre a lâmpada, ela se quebra.
lamp.addEventListener('dblclick', lampBroken);


// ## Função responsável pela ação de ligar a luz.
// #### Ao entrar na função, é validado se a lâmpada está quebrada. Caso não esteja, troca a imagem para a luz acesa e aponta para a variavel 'isOn' que ela está ligada.
function lampOn(){
    if (!isLampBroken()){
        lamp.src = './img/ligada.jpg';
        isOn = true;
        switchLamp.textContent = 'Apagar lâmpada.';
    }
}

// ## Função responsável pela ação de desligar a luz.
// #### Ao entrar na função, é validado se a lâmpada está quebrada. Caso não esteja, troca a imagem para a luz acesa e aponta para a variavel 'isOn' que ela está desligada.
function lampOff(){
    if (!isLampBroken()){
        lamp.src = './img/desligada.jpg';
        isOn = false;
        switchLamp.textContent = 'Acender lâmpada.';
    }
}

// ## Função responsável pela ação de quebrar a lâmpada.
// #### Quando acionada, muda a imagem da lâmpada para uma lâmpada quebrada e o texto do botão para 'Lâmpada quebrada'.
function lampBroken(){
    lamp.src = './img/quebrada.jpg';
    switchLamp.textContent = 'Lâmpada quebrada.';
}

// ## Função responsável por verificar se a lâmpada quebrou.
// #### Quando acionada, busca na string do source da imagem se existe a palavra 'quebrada'.
function isLampBroken (){
    return lamp.src.indexOf('quebrada') > -1;
}

// ## Função responsável pelo interruptor.
// #### Quando acionado, verifica se a lãmpada está ligada. Se sim, desliga a mesma, caso contrário, liga.
function switchLights (){
    if (!isLampBroken()){
        if (isOn == true){
            lampOff();
        }else{
            lampOn();
        }
    }
}