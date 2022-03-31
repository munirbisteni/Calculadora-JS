let visor = window.document.querySelector('.visor-text')
let under = window.document.querySelector('.visor-under')
let operation = false;
let variable1 = 0;
let variable2 = 0;
let text;
let result;
let type;
let changedNow = true;

var value = (nmr) => {
    /*Calls function to see if has a opertaion */
    variableOneOrTwo(nmr)

    if(operation == true && changedNow == true) {
        changedNow = false;
        visor.textContent = 0;
    }

    putOnVisor(nmr);

}

var operate = (simbol) => {

    if(operation == false && simbol != 'frac' && simbol != 'pow' && simbol != 'sqrt' && simbol != 'CE' ){
        operation = true    
        under.textContent = visor.textContent + ' ' + simbol
    }

    if (simbol != '=') type = simbol
    if (simbol == '=') exit(type)
    if (simbol == 'frac' || simbol == 'pow' || simbol == 'sqrt' || simbol == 'C' || simbol == 'CE') special(type)
}

var reset = () => {
    final()
    visor.textContent = 0
    under.textContent = ''
    variable1 = 0
}
exit = (type) => {
    console.log(type)
    if (type == '÷') result = variable1 / variable2
    if (type == '+') result = variable1 + variable2
    if (type == '-') result = variable1 - variable2
    if (type == '*') result = variable1 * variable2
    
    under.textContent +=  ' ' + variable2;
    final();
}

special = () => { 

    if (type == 'frac'){
        under.textContent =  '1/' + variable1
        result = 1/variable1
    }

    if (type == 'pow'){
        under.textContent = 'srq (' + variable1 + ')' 
        result = Math.pow(variable1, 2)
    }

    if (type == 'sqrt'){
        under.textContent = '√ (' + variable1 + ')' 
        result = Math.sqrt(variable1)
    }

    if (type == 'C'){
        final()
        visor.textContent = 0
        under.textContent = ''
        variable1 = 0
        return;
    }

    if (type == 'CE'){ /* needs repair */
        if (variableOneOrTwo() == false) variable1 = 0
        if (variableOneOrTwo() == true) variable2 = 0
        visor.textContent = 0;
        return;
    }
    final()
}   

final = () => {

    visor.textContent = result
    variable1 = result
    result = 0
    variable2 = 0
    type = ''
    operation = false
    changedNow = true
}


var putOnVisor = (digit) => { 

    if (visor.textContent == 0) {
        visor.textContent = digit
        return;
    }
    if (visor.textContent != 0){
        visor.textContent += digit.toString()
        return;
    }
}

var variableOneOrTwo = (nmr) =>{

    if (operation== false) {
        variable1 += nmr
        return false
    }
    if (operation == true) {
        variable2 += nmr
        return true
    }
}

