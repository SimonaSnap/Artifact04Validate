var frmvalidator  = new Validator("myform");
 frmvalidator.EnableOnPageErrorDisplaySingleBox();
 frmvalidator.EnableMsgsTogether();
 
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
  frmvalidator.addValidation("FirstName","maxlen=20",	"Max length for FirstName is 20");
  frmvalidator.addValidation("FirstName","alpha_s","Name can contain alphabetic chars only");
  
  frmvalidator.addValidation("LastName","req","Please enter your Last Name");
  frmvalidator.addValidation("LastName","maxlen=20","For LastName, Max length is 20");
  
  frmvalidator.addValidation("Email","maxlen=50");
  frmvalidator.addValidation("Email","req");
  frmvalidator.addValidation("Email","email");
  
  frmvalidator.addValidation("Phone","maxlen=50");
  frmvalidator.addValidation("Phone","numeric");
  
  frmvalidator.addValidation("Address","maxlen=50");
  frmvalidator.addValidation("Country","dontselect=0");
  
    function DoCustomValidation()
    {
        var frm = document.forms["myform"];
        if(frm.FirstName.value == 'Bob')
        {
            sfm_show_error_msg("Bob, you can't submit this form. Go away! ");
            return false;
        }
        else
        {
            return true;
        }
    }
	
  frmvalidator.setAddnlValidationFunction(DoCustomValidation);