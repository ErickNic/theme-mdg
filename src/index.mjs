import {chevron,chevron1,chevron2,heroButton,heroH1,heroImg,heroP,godowncontainer} from './Scripts/domTagRegister.mjs'
const gdc = godowncontainer;

var contador = 0;
contarmas(contador);
contarmenos(contador);

function contarmas(y){
    while(y>=0 && y<=5){
        y++;
        control(y);
    }
}
function contarmenos(y){
    while(y>=0 && y<=5){
        y--;
        control(y);
    }
}
function control(x){
    switch(x){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
    }
}

