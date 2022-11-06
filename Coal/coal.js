
function calculate() {
    var kсажі = Number(document.getElementById("s_coef").value);
    var Qr = Number(document.getElementById("working_heat").value);
    var B = Number(document.getElementById("c_cons").value);
    var knox = Number(document.getElementById("knox").value);
    var kN2o = Number(document.getElementById("kn2o").value);
    var Kso2 = Number(document.getElementById("kso2").value);
    var Kco = Number(document.getElementById("kco").value);
    var Kнмлос = Number(document.getElementById("knmlos").value);
    var Kch4 = Number(document.getElementById("kch4").value);
    var Kco2 = Number(document.getElementById("kco2").value);
    
    var Eсажі = 0.000001 * kсажі * Qr * B ;
    var Enox = 0.000001 * knox * Qr * B ; 
    var En2o = 0.000001 * kN2o * Qr * B ; 
    var Eso2 = 0.000001 * Kso2 * Qr * B ;
    var Eco = 0.000001 * Kco * Qr * B ; 
    var Eнмлос = 0.000001 * Kнмлос * Qr * B ; 
    var Ech4 = 0.000001 * Kch4 * Qr * B ;
    var Eco2 = 0.000001 * Kco2 * Qr * B ;
    
    document.getElementById("text1").innerHTML = "Emission of soot: " + Eсажі;
    document.getElementById("text2").innerHTML = "Emission of NOx: " + Enox;
    document.getElementById("text3").innerHTML = "Emission of N2O: " + En2o;
    document.getElementById("text4").innerHTML = "Emission of SO2: " + Eso2;
    document.getElementById("text5").innerHTML = "Emission of CO: " + Eco;
    document.getElementById("text6").innerHTML = "Emission of НМЛОС: " + Eнмлос;
    document.getElementById("text7").innerHTML = "Emission of CH4: " + Ech4;
    document.getElementById("text8").innerHTML = "Emission of CO2: " + Eco2;
}