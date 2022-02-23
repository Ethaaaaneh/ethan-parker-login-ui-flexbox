function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 

function switchVisible() {
  if (document.getElementById('signin-card')) {

      if (document.getElementById('signin-card').style.display == 'none') {
          document.getElementById('signin-card').style.display = 'flex';
          document.getElementById('login-card').style.display = 'none';
      }
      else {
          document.getElementById('signin-card').style.display = 'none';
          document.getElementById('login-card').style.display = 'flex';
      }
  }
}