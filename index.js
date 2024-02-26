
$(".tesdiq-button").on("click", function() {
    var umumiInput = $("#umumi-input").val();
    var duzgunInput = $("#duzgun-input").val();
    var yazilmayanInput = $("#yazilmayan-input").val();
    var balInput = $("#bal-input").val();

    if (umumiInput.length > 0 && duzgunInput.length > 0 && yazilmayanInput.length > 0 && balInput.length > 0 && umumiInput.length >= (duzgunInput.length + yazilmayanInput.length)) {
        umumiInput = $("#umumi-input").val();
        duzgunInput = $("#duzgun-input").val();
        yazilmayanInput = $("#yazilmayan-input").val();
        balInput = $("#bal-input").val();

        var intUmumi = parseFloat(umumiInput);
        var intDuzgun = parseFloat(duzgunInput);
        var intYazilmayan = parseFloat(yazilmayanInput);
        var intBal = parseFloat(balInput);

        var yanlisSualMiqdari = intUmumi - (intDuzgun + intYazilmayan);
        var sual4 = Math.floor(yanlisSualMiqdari/4);
        var duzgunSual = intUmumi - (yanlisSualMiqdari + sual4);
        var bal = duzgunSual*intBal;
        $(".span-1").text(bal + " bal");
    }
});