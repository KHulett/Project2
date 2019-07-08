//controls carousel speed:
// $(document).ready(function(){
//     jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 7000 // 7 seconds
// });

// Game logo swap

let imgTracker = 0;

function logoSwap() {
  // let image = document.getElementById('playstationLogo');
  // if(imgTracker == 'psLogo'){
  //   image.src = 'photos\switchlogo.jpg';
  //   imgTracker = 'switchLogo';
  // }
  // else{
  //   image.src = 'photos\pslogo.png';
  //   imgTracker = 'psLogo';
  // }

  let image = document.getElementById('playstationLogo');
  if(imgTracker == 0){
    document.getElementById("playstationLogo").setAttribute('src','photos\switchlogo.jpg');
psLogo++;
  }
  else{
    document.getElementById("playstationLogo").setAttribute('src','photos\pslogo.png');
psLogo--;
  }
}


// form validation

function formValidation()                                    
{                 
    let email = document.forms["contactForm"]["eMail"];    
    let password = document.forms["contactForm"]["passWord"];  
  
             
    if (email.value == "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    // if (email.value.indexOf("@", 0) < 0)                 
    // { 
    //     window.alert("Please enter a valid e-mail address."); 
    //     email.focus(); 
    //     return false; 
    // } 
   
    // if (email.value.indexOf(".", 0) < 0)                 
    // { 
    //     window.alert("Please enter a valid e-mail address."); 
    //     email.focus(); 
    //     return false; 
    // } 
          
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    return true;
  }
    