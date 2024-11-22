$("#up").click(function() {
    $('html, body').animate({scrollTop:0}, '500');
})

$("#progress1").progressbar({
    value: 95
})
$("#progress2").progressbar({
    value: 50
})
$("#progress3").progressbar({
    value: 90
})
$("#progress4").progressbar({
    value: 0
})
$("#progress5").progressbar({
    value: 85
})
$("#progress6").progressbar({
    value: 0
})
$("#sumbit").click(function sendEmail() {
    let name = $("#name").val();
    let email = $("email").val();
    let message = $("message").val();

    // Здесь можно добавить проверки и валидацию данных перед отправкой

    let subject = "Новое сообщение от " + name;
    let body = "Имя: " + name + "\n" +
               "Email: " + email + "\n" +
               "Сообщение: " + message;

    let mailtoLink = "mailto:maxim.kasym.shkm@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
})