// Define variables in JS
var email;
var password;

// Define functions in JS
function showalertemail(){
    $("#usernamealert").css("display","block");
    $("#exampleInputEmail1").css({"border-color": "#EBEDF3", "border-size": "2px"});
}

function hidealertemail(){
    $("#usernamealert").css("display","none");
    $("#exampleInputEmail1").css({"border-color": "transparent", "border-size": "0px"});
}

function showalertpassword(){
    $("#passwordalert").css("display","block");
    $("#exampleInputPassword1").css({"border-color": "#EBEDF3", "border-size": "2px"});
}

function hidealertpassword(){
    $("#passwordalert").css("display","none");
    $("#exampleInputPassword1").css({"border-color": "transparent", "border-size": "0px"});
}

// First event handler - documents loads in the window
$(document).ready(function(){
    // Log message for testing purposes
    console.log("Document loaded...");
    
    // Second event listener - user clicks the submit button
    $("#submit").click(function(){
        
       // Prevent the document re-loading in the browser window (default behavior of form OnSubmit)
       event.preventDefault();   
        
       // Assign variables with value
       email = $("#exampleInputEmail1").val();
       password = $("#exampleInputPassword1").val();
        
       // Log variable values to the console in one string (for testing purposes)
       console.log("Email: " + email + "; Password: "+ password);
        
       // If then rules in JS to check value of input    
       if(email === ""){
           // Call function to show alert for email
           showalertemail();
       }else if(password === ""){
           // Call function to hide alert for email, show alert for password
           hidealertemail();
           showalertpassword();
       }else{
           // Call funtions to hide all alerts, but fade in the success message
           hidealertpassword();
           $("#successalert").fadeIn("slow");
       }
        
    }); // End of second event listener for form submit
}); // End of first event listener for document load
