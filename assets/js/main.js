$(document).ready(function() {
    $("#pesquisar_historico").on('click', function(e) {
        console.clear()
        e.preventDefault();

        var now = new Date();
        var today = now.getFullYear() + "" + (now.getMonth() + 1) + "" + now.getDate()

        var date = $("#data_historico").val(),
            urlDate = date.replaceAll("-", ""),
            urlPast = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=" + urlDate + "&end_date=" + urlDate,
            urlNow = "https://economia.awesomeapi.com.br/last/USD-BRL"

        get_quota_by_date(urlPast, date);
        get_current_quota(urlNow);
    });
});

function get_quota_by_date(url, date) {
    $.ajax({
        url: url,
        dataType: "json",
        method: "get",
        success: function(data) {

            let response = data[0]
            
            var formated = new Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 3}).format(response.bid);
            console.log(formated)
            
            var temp = date.split('-');

            if (parseInt(temp[0]) <= 2010) {
                $("#old_quota_president").attr('src', 'assets/images/lulalindo.png');
            } else if (parseInt(temp[0]) >= 2011 && parseInt(temp[0]) <= 2016) {
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

function get_current_quota(url) {
    $.ajax({
        url: url,
        dataType: "json",
        method: "get",
        success: function(data) {
            let response = data.USDBRL
            
            var formated = new Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 3}).format(response.bid);

            $("#current_quota_president").attr('src', 'assets/images/bolsadecoco.png');
            $("#current_quota").text("R$" + formated);
        }
    });
}
