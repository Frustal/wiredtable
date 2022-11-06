
function print_res(){
    var q_max = parseFloat(document.getElementById("Q_max").value);
    var t_opal = parseFloat(document.getElementById("t_opal").value);
    var t_min = parseFloat(document.getElementById("t_min").value);
    var t_avrg = parseFloat(document.getElementById("t_avrg").value);
    var days_opal = parseFloat(document.getElementById("days_opal").value);
    var n_el_kotel = parseFloat(document.getElementById("n_el_kotel").value);
    var q_el_kotel = parseFloat(document.getElementById("q_el_kotel").value);
    var Q_avrg = q_max * (t_opal - t_avrg) / (t_opal - t_min);
    var N1 = 24 * Q_avrg * days_opal * n_el_kotel;
    var N2 = 24 * (Q_avrg - q_el_kotel) * days_opal * (1 - n_el_kotel);
    /*
    document.getElementById("first_div").innerHTML = "Q_avrg: " + Q_avrg;
    document.getElementById("second_div").innerHTML = "N1: " + N1;
    document.getElementById("third_div").innerHTML = "N2: " + N2;
    */

    var cost_el = parseFloat(document.getElementById("cost_el").value);
    var cost_gas = parseFloat(document.getElementById("cost_gas").value);
    var kkd_kotel = parseFloat(document.getElementById("kkd_kotel").value);
    var koef_q = parseFloat(document.getElementById("koef_q").value);
    var S_gas_kotel = (N1 + N2) / 9 * cost_gas / kkd_kotel;
    var S_tepl_nas = N2 / koef_q * cost_el;
    var S_el_kotel = N1 * cost_el;
    var Sum_costs = S_tepl_nas + S_el_kotel;
    var Div_costs = S_gas_kotel - Sum_costs;
    //document.getElementById("forth_div").innerHTML = "Sum gas: " + S_gas_kotel;
    //document.getElementById("fifth_div").innerHTML = "Div: " + Div_costs;

    var cost_kotel = parseFloat(document.getElementById("cost_kotel").value);
    var cost_tepl_nas = parseFloat(document.getElementById("cost_tepl_nas").value);
    var num_fancoil = parseFloat(document.getElementById("num_fancoil").value);
    var cost_fancoil = parseFloat(document.getElementById("cost_fancoil").value);
    var cost_el_kotel = parseFloat(document.getElementById("cost_el_kotel").value);
    var cost_gas_setup = parseFloat(document.getElementById("cost_gas_setup").value);
    var num_sys_kond = parseFloat(document.getElementById("num_sys_kond").value);
    var cost_sys_kond = parseFloat(document.getElementById("cost_sys_kond").value);
    let T_change = cost_kotel / Div_costs;
    let Sum_expl = cost_el_kotel + cost_tepl_nas + num_fancoil * cost_fancoil;
    let Sum_gas = cost_gas_setup + num_sys_kond * cost_sys_kond;
    let T_new = (Sum_expl - Sum_gas) / Div_costs;

    document.getElementById("sixth_div").innerHTML = "Payback with changing heating system (years): " + Math.floor(T_change);
    document.getElementById("seventh_div").innerHTML = "Payback with installing heating pump instantly (years): " + Math.floor(T_new);
}