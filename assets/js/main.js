$(document).ready(function() {
    // https://api.exchangeratesapi.io/2010-01-12

    get_current_quota("https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL");

    $("#pesquisar_historico").on('click', function(e) {
        e.preventDefault();

        var date = $("#data_historico").val();

        $("#wrap_old_quota").remove('#old_quota_president');

        get_quota_by_date("https://api.exchangeratesapi.io/" + date, date);
    });
});

function get_current_quota(url) {
    $.ajax({
        url: url,
        dataType: "json",
        method: "get",
        success: function(data) {
            var formated = new Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 3}).format(data['rates']['BRL']);

            $("#current_quota").text("R$" + formated);
        }
    });
}

function get_quota_by_date(url, date) {
    $.ajax({
        url: url,
        dataType: "json",
        method: "get",
        success: function(data) {
            var formated = new Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 3}).format(data['rates']['BRL']);

            var temp = date.split('-');
            console.log(temp);

            if (parseInt(temp[0]) >= 2008 || parseInt(temp[0]) <= 2011) {
                $("#wrap_old_quota").append('<img src="assets/images/lulinha.jpg" class="img-fluid mt-3 mb-5" style="width: 50%;" id="old_quota_president">');
            } else if (parseInt(temp[0]) >= 2012 || parseInt(temp[0]) <= 2016) {
                $("#wrap_old_quota").append('<img src="assets/images/dilminha.jpg" class="img-fluid mt-3 mb-5" style="width: 50%;" id="old_quota_president">');
            } else if (parseInt(temp[0]) >= 2017 || parseInt(temp[0]) <= 2018) {
                $("#wrap_old_quota").append('<img src="assets/images/vampirao.jpg" class="img-fluid mt-3 mb-5" style="width: 50%;" id="old_quota_president">');
            } else {
                $("#wrap_old_quota").append('<img src="assets/images/presidente-bonoro.jpg" class="img-fluid mt-3 mb-5" style="width: 50%;" id="old_quota_president">');
            }

            $("#old_quota").text("R$" + formated);
        }
    });
}