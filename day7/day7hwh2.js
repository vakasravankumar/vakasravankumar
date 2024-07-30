function formValidation()
{
var uemail = document.registration.email;
if(ValidateEmail(uemail))
{

}
return false;
} 
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}