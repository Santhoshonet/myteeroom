$(function() {
    $('#button-review').click(function() {
        return validateEmails();
    });
    $('form').submit(function() {
        return validateEmails();
    });
    function validateEmails()
    {
	$('.error').html('');
        var isFormInputsValid = true;
        var elements =  $('input[name="email[]"]');
        var elementsSize = elements.size();
        elements.each(function () {
               // skipping the last element
               if (elements.index($(this)) + 1 < elementsSize )
               {
                    if(!$(this).validateEmail({ class: "errorinfo", alert:false,focus:true }))
                    {
                        isFormInputsValid = false;
                        $(this).next().html("input valid email!");
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
            var html = "<label>Friend's email</label><input type='text' name='email[]' class='referencesEmails'><label class='error'></label>";
	    $(this).next().after(html);
        }
    });
});
