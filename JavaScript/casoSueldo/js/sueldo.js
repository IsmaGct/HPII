function sueldo(dt,hl){
    var sueldo=dt*hl*0.13*25;
    return sueldo;
}
document.write("El sueldo es:");
document.write('<br>');
document.write(sueldo(21,8));