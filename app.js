// Cuentas

var cuentas = [
    {nombre: 'Mali',
    saldo: 200,
    pagina: 'mali.html'
},
    {nombre: 'Gera',
    saldo: 290,
    pagina: 'gera.html'
},  
    {nombre: 'Maui',
    saldo: 67,
    pagina: 'maui.html'
}
]

//login
function pswdMali() {
    var pswd = prompt('¡Hola Mali! Por favor ingresa tu password')
    if (pswd == "Mali1234") {
        location='mali.html';
    }else{
        alert('Password inorrecto, intenta de nuevo')
    }
}

function pswdGera() {
    var password = prompt('¡Hola Gera! Por favor ingresa tu password')
    if (password == "Gera1234") {
        location='gera.html';
    }else{
        alert('Password inorrecto, intenta de nuevo')
    }
}

function pswdMaui() {
var password = prompt('¡Hola Maui! Por favor ingresa tu password')
    if (password == "Maui1234") {
        location='maui.html';
    }else{
        alert('Password inorrecto, intenta de nuevo')
    }
}

//Funciones Mali
function consultaMali() {
    alert('Tu saldo es de $' + (cuentas[0].saldo)+' MXN')
}
function ingresarMontoMali() {
    var depositar = Number(prompt('Ingrese el monto a depositar'))
    if (Number(depositar)) {
        if((depositar + cuentas[0].saldo) <= 990) {
            alert('Haz depositado $'+depositar+' MXN'+'. Tu nuevo saldo es de: $'+ (depositar + cuentas[0].saldo)+' MXN')
        }else{
            alert('Tu cuenta no debe tener mas de $990 MXN. Ingresa un monto valido')
        }
    }
}
function retirarMontoMali(){
    var retirar = Number(prompt('Ingrese el monto a retirar'))
    if (Number(retirar)) {
        if ((cuentas[0].saldo - retirar <= 10)){
            alert('Haz retirado $'+retirar+' MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retirar)+' MXN')
        }
    }else{
        alert('Por favor ingresa un monto valido');
    }
    if ((cuentas[0].saldo - retirar <= 10)){
        alert('Tu saldo no puede ser menor a $10 MXN. Ingresa un monto valido');
    }
}

//Funciones Gera
function consultaGera() {
    alert('Tu saldo es de $' + (cuentas[1].saldo)+' MXN')
}
function ingresarMontoGera() {
    var depositar = Number(prompt('Ingrese el monto a depositar'))
    if (Number(depositar)) {
        if((depositar + cuentas[1].saldo) <= 990) {
            alert('Haz depositado $'+depositar+' MXN'+'. Tu nuevo saldo es de: $'+ (depositar + cuentas[1].saldo)+' MXN')
        }else{
            alert('Tu cuenta no debe tener mas de $990 MXN. Ingresa un monto valido')
        }
        
    }
}
function retirarMontoGera(){
    var retirar = Number(prompt('Ingrese el monto a retirar'))
    if (Number(retirar)) {
        if ((cuentas[1].saldo - retirar >= 10)){
            alert('Haz retirado $'+retirar+' MXN'+'. Tu nuevo saldo es de: $'+(cuentas[1].saldo - retirar)+' MXN')
        }
    }else{
        alert('Por favor ingresa in monto valido');
    }
    if ((cuentas[1].saldo - retirar <= 10)){
        alert('Tu saldo no puede ser menor a $10 MXN. Ingresa un monto valido');
    }
}

//Funciones Maui
function consultaMaui() {
    alert('Tu saldo es de $' + (cuentas[2].saldo)+' MXN')
}
function ingresarMontoMaui() {
    var depositar = Number(prompt('Ingrese el monto a depositar'))
    if (Number(depositar)) {
        if((depositar + cuentas[2].saldo) <= 990) {
            alert('Haz depositado $'+depositar+' MXN'+'. Tu nuevo saldo es de: $'+ (depositar + cuentas[2].saldo)+' MXN')
        }else{
            alert('Tu cuenta no debe tener mas de $990 MXN. Ingresa un monto valido')
        }
    }
}
function retirarMontoMaui(){
    var retirar = Number(prompt('Ingrese el monto a retirar'))
    if (Number(retirar)) {
        if ((cuentas[2].saldo - retirar >= 10)){
            alert('Haz retirado $'+retirar+' MXN'+'. Tu nuevo saldo es de: $'+(cuentas[2].saldo - retirar)+' MXN')
        }
    }else{
        alert('Por favor ingresa un monto valido');
    }
    if ((cuentas[2].saldo - retirar <= 10)){
        alert('Tu saldo no puede ser menor a $10 MXN. Ingresa un monto valido');
    }
}
