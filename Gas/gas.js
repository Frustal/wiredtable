function calculate() {
    var X = Number(document.getElementById("vol_gas").value);
    var p = Number(document.getElementById("den_gas").value);
    var knox = Number(document.getElementById("knox").value);
    var Qr = Number(document.getElementById("working_heat").value);
    var kN2o = Number(document.getElementById("kn2o").value);
    var Kco = Number(document.getElementById("kco").value);
    var Kch4 = Number(document.getElementById("kch4").value);
    var Kco2 = Number(document.getElementById("kco2").value);
    
    var B = X * p ;

    var Enox = 0.000000001 * knox * Qr * B ;
    var En2o = 0.000000001 * kN2o * Qr * B ; 
    var Eco = 0.000000001 * Kco * Qr * B ; 
    var Ech4 = 0.000000001 * Kch4 * Qr * B ; 
    var Eco2 = 0.000000001 * Kco2 * Qr * B ; 

    document.getElementById("text1").innerHTML = "Expenses of gas: " + B;
    document.getElementById("text2").innerHTML = "Emission of NOx: " + Enox;
    document.getElementById("text3").innerHTML = "Emission of N2O: " + En2o;
    document.getElementById("text4").innerHTML = "Emission of CO: " + Eco;
    document.getElementById("text5").innerHTML = "Emission of CH4: " + Ech4;
    document.getElementById("text6").innerHTML = "Emission of CO2: " + Eco2;
}