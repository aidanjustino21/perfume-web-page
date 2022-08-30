


function checkData(){
	if (document.signup.SALUTATION.value=="")
	
	{
		alert("Please fill in the salutation.")
		document.signup.SALUTATION.focus()
		return false;
	}
	if (document.signup.NAME.value=="")
	{
		alert("Please fill in your name.")
		document.signup.NAME.focus()
		return false;
	}
	else if(document.signup.NAME.value.length<2)
	{
		alert("please enter full name.")
		document.signup.NAME.focus()
		return false;
	}
	else if(document.signup.NAME.value.search(/\d/g)!=-1)
	{
		alert("The name can not contain numbers")
		document.signup.NAME.focus()
		return false;
	}
	if (document.signup.COMMENTS.value=="")
	{
		alert("Please write the comment that you have to send.")
		document.signup.COMMENTS.focus()
		return false;
	}
	if (document.signup.GENDER.value=="")
	{
		alert("Please select the Gender.")
		document.signup.GENDER.focus()
		return false;
	}
	if (document.signup.EMAIL.value=="")
	{
		alert("Please enter the Email.")
		document.signup.EMAIL.focus()
		return false;
	}
else	if(document.signup.EMAIL.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
{
document.signup.EMAIL.focus();
return true;
}
else if(document.signup.EMAIL.value.match(/^[a-zA-Z_-]+$/))
{
alert("You have entered an invalid email address!");
document.signup.EMAIL.focus();
return false;
}
else
{
	alert("Form successfully submitted.")
		return true;
		
}
}
