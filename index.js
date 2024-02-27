function pointCalcuator() {
    var umumiInput = $("#umumi-input").val();
    var duzgunInput = $("#duzgun-input").val();
    var yazilmayanInput = $("#yazilmayan-input").val();
    var balInput = $("#bal-input").val();

    var intUmumi = parseFloat(umumiInput);
    var intDuzgun = parseFloat(duzgunInput);
    var intYazilmayan = parseFloat(yazilmayanInput);
    var intBal = parseFloat(balInput);

    if (umumiInput.length > 0 && duzgunInput.length > 0 && yazilmayanInput.length > 0 && balInput.length > 0 && intUmumi >= (intDuzgun + intYazilmayan)) {
        umumiInput = $("#umumi-input").val();
        duzgunInput = $("#duzgun-input").val();
        yazilmayanInput = $("#yazilmayan-input").val();
        balInput = $("#bal-input").val();

        intUmumi = parseFloat(umumiInput);
        intDuzgun = parseFloat(duzgunInput);
        intYazilmayan = parseFloat(yazilmayanInput);
        intBal = parseFloat(balInput);

        var yanlisSualMiqdari = intUmumi - (intDuzgun + intYazilmayan);
        var sual4 = Math.floor(yanlisSualMiqdari/4);
        var duzgunSual = intUmumi - (yanlisSualMiqdari + sual4 + intYazilmayan);
        var bal = duzgunSual*intBal;
        var umumiBalMiqdari = intUmumi * intBal;
        var faiz = Math.floor((bal/umumiBalMiqdari)*100);
        $(".span-1").text(bal + " bal(" + faiz + "%)"); 
    }
    else {
        $(".span-1").text("Səhvlik etmisiniz!");
    }
}

$(".tesdiq-button").on("click", function() {
    pointCalcuator();
});

$(".clear-button").on("click", function(){
    $(".input-pointer").val('');
});
