$(function() {
    $('#button-review').click(function() {
       if($('input[name="email"]').validateEmail({ class: "errorinfo", alert:false }))
        document.forms[0].submit();
       else
        $('.error').html("input valid email!");
    });
    $('form').submit(function() {
       if($('input[name="email"]').validateEmail({ class: "errorinfo", alert:false }))
            return true;
        $('.error').html("input valid email!");
        return false;
    });
});