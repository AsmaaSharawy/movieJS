//side bar
$('.parent-option i').click(function () {
    let sideBar = $('.options').outerWidth();
    console.log(sideBar);
  
    let position = $('.parent-option').offset().left;
  
    console.log(position);
  
    if (position == 0) {
      $('.parent-option').css({
        left: `-${sideBar}px`,
        transition: 'all 1s',
      });
    } else {
      $('.parent-option').css({
        left: `0px`,
        transition: 'all 1s',
      });
    }
  });

  //movie gallery
  var myHttp= new XMLHttpRequest();
var allPosts=[];



function getData(){
    myHttp.open('GET','https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ddb68959fac26ed7618d1a9034951c8d');
    myHttp.send();
    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState==4 && myHttp.status==200){
            allPosts=JSON.parse(myHttp.response).results;
            console.log(allPosts);
            displayAllposts();
        }
    });

}
getData();
function displayAllposts(){
    var content=`` ;
    for(var i=0;i<allPosts.length;i++){
        content +=`  
        <div class="col-md-4">
          <div class="post">
              <img class="w-100" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" alt="">
              <h3 class="text-white">${allPosts[i].title}</h3>
                  <p class="text-white">${allPosts[i].overview}</p>
          </div>
        </div>`;
    }
    document.getElementById('PostsTabel').innerHTML=content;
}

//form validation
$(document).ready(function() { 
  $( "#submitform" ).on( "click", function() {
   
   var username = $('#username').val();
   var emailid = $('#emailid').val();
   var mobilenumber = $('#mobilenumber').val();
   var websiteurl = $('#websiteurl').val();
   var userpassword = $('#userpassword').val();
      // Hiding error messages 
   $('.errorMsg').hide();
   
   if(checkUsername(username) == false){    
         $('#errorusername').show();    
         return false;    
   }else if(checkEmail(emailid) == false){    
      $('#erroremail').show(); 
         return false;       
   }else if(checkMobileNumber(mobilenumber) == false){    
         $('#errormobile').show();     
         return false;       
   }else if(checkUrl(websiteurl) == false){    
      $('#errorwebsite').show(); 
         return false;       
   }else if(checkPassword(userpassword) == false){    
      $('#errorpassword').show();     
         return false;       
   }else{
    alert("successful")
   }
    
  });
  });
  //function used to check valid email
  function checkEmail(email)
  {
      //regular expression for email
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(pattern.test(email)){
          return true;
      } else {
          return false;
      }
  }
  
  
  //function used to validate username
  function checkUsername(username){
   //regular expression for username
      var pattern = /^[a-z0-9_-]{5,15}$/;
      if(pattern.test(username)){
          return true;
      }else{
          return false;
      }
  }
  
  //function used to validate password
  function checkPassword(password){
   //regular expression for password
      var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
      if(pattern.test(password)){
          return true;
      }else{
          return false;
      }
  }
  //function used to validate mobile number
  function checkMobileNumber(mobile){
   //regular expression for mobile number
      var pattern = /^[0-9]{10}$/;
      if(pattern.test(mobile)){
          return true;
      }else{
          return false;
      }
  }