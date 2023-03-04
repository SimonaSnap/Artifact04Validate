// var frmvalidator  = new Validator("myform");
//  frmvalidator.EnableOnPageErrorDisplaySingleBox();
//  frmvalidator.EnableMsgsTogether();
 
//  frmvalidator.addValidation("FirstName","req","Please enter your First Name");
//   frmvalidator.addValidation("FirstName","maxlen=20",	"Max length for FirstName is 20");
//   frmvalidator.addValidation("FirstName","alpha_s","Name can contain alphabetic chars only");
  
//   frmvalidator.addValidation("LastName","req","Please enter your Last Name");
//   frmvalidator.addValidation("LastName","maxlen=20","For LastName, Max length is 20");
  
//   frmvalidator.addValidation("Email","maxlen=50");
//   frmvalidator.addValidation("Email","req");
//   frmvalidator.addValidation("Email","email");
  
//   frmvalidator.addValidation("Phone","maxlen=50");
//   frmvalidator.addValidation("Phone","numeric");
  
//   frmvalidator.addValidation("Address","maxlen=50");
//   frmvalidator.addValidation("Country","dontselect=0");
  
//     function DoCustomValidation()
//     {
//         var frm = document.forms["myform"];
//         if(frm.FirstName.value == 'Bob')
//         {
//             sfm_show_error_msg("Bob, you can't submit this form. Go away! ");
//             return false;
//         }
//         else
//         {
//             return true;
//         }
//     }
	
//   frmvalidator.setAddnlValidationFunction(DoCustomValidation);

  function validateForm(){
    //1) Create variable
    var validFirstname=false;
    var validLastname=false;
    var validEmail=false;
    var validPhone=false;
    var validAddress=false;
    var validCity=false;
    var validState=false;
    var validCountry=false;
    var validZipCode=false;
    //2) read value from HTML
    var firstname = document.getElementById("firstname").value;
    var validLastname = document.getElementById("lastname").value;
    var userEmail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20){
        errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
    }
    if (lastname==="null" || lastname==="" || lastname.length > 20){
        errorMessages += "<p>The lastname is required and cannot be greater than 20 characters</p>";
    } 
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
    }
    if (isNaN(phone) || phone.lenght >15 || phone===null || phone===""){
        errorMessages += "<p>Invalid phone number</p>";
    }
    if (address ===null){
        errorMessages += "<p>Invalid address value</p>"
    }
    if (city ===null){
        errorMessages += "<p>Invalid city value</p>"
    }
    if (state ===null){
        errorMessages += "<p>Invalid state value</p>"
    }
    if (country ===null){
        errorMessages += "<p>Invalid country value</p>"
    }
    else {
        validFirstname = true;
        validLastname = true;
        validEmail = true;
        validPhone = true;
        validAddress = true;
        validCity = true;
        validState = true;
        validCountry = true;
        if (country === "USA"){
            if (isNaN(zipcode) || zipcode.lenght > 5 || zipcode===null || zipcode===""){
                errorMessages += "<p>Invalid zipcode number</p>";
            }
            else {
                validZipCode = true;
            }
        }
        errorMessages += "<p>Fields filled out successfully! Thank you!</p>"
    }
    //4) Send error message to HTML
    document.getElementById("errorMessages").innerHTML = errorMessages;
    //5) return status of each field
    return (validFirstname && validLastname && validEmail && validPhone && validAddress && validCity && validState && validCountry && validZipCode);
    
}