function compra(b,f,a){
    var pago=b+f+a;
    return pago;
}
document.write("Las compras en el supermercado");
document.write("<br>");
document.write(Math.round(compra(80.642,15.842,60.741)*100)/100);
