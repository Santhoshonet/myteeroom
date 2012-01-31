$(function() {
    $('input[type="submit"]').click(function() {
        return validateEmails();
    });
    $('form').submit(function() {
        return validateEmails();
    });
    function validateEmails()
    {
        var isFormInputsValid = true;
        var elements =  $('input[name="email[]"]');
        var elementsSize = elements.size();
        alert(elementsSize);
           elements.each(function () {
               // skipping the last element
               if (elements.index($(this)) + 1 < elementsSize )
               {
                    if(!$(this).validateEmail({ class: "errorinfo", alert:false,focus:true }))
                    {
                        isFormInputsValid = false;
                        $(this).parent().find('.error').html("input valid email!");
                        return false;
                    }
               }
           });
        if(isFormInputsValid)
        {
            document.forms[0].submit();
            return true;
        }
        else
            return false;
    }
    $('input[name="email[]"]').live('focus',function() {
        if ($('input[name="email[]"]').index($(this)) + 1 == $('input[name="email[]"]').size())
        {
            var reccurence = $(this).parents('li').eq(0);
            var clone = reccurence.clone();
            reccurence.after(clone);
            clone.find('.btnactionremove').remove();
            clone.append("<span class='btnactionremove'>-</span>");
        }
    });
    $('.btnactionremove').live('click', function() {
        $(this).parents('li').eq(0).remove();
    });
});