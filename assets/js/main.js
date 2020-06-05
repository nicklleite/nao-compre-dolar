$(document).ready(function() {
    // https://api.exchangeratesapi.io/2010-01-12

    get_current_quota("https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL");

    $("#pesquisar_historico").on('click', function(e) {
        e.preventDefault();

        var date = $("#data_historico").val();
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
            console.log(parseInt(temp[0]));

            if (parseInt(temp[0]) <= 2011) {
                $("#old_quota_president").attr('src', 'assets/images/lulalindo.png');
            } else if (parseInt(temp[0]) >= 2012 && parseInt(temp[0]) <= 2016) {
                $("#old_quota_president").attr('src', 'assets/images/dilmae.png');
            } else if (parseInt(temp[0]) >= 2017 && parseInt(temp[0]) <= 2018) {
                $("#old_quota_president").attr('src', 'assets/images/vampiraodacabecona.png');
            } else {
                $("#old_quota_president").attr('src', 'assets/images/bolsadecoco.png');
            }

            $("#old_quota").text("R$" + formated);
        }
    });
}