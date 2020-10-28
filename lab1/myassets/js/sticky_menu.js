window.onscroll = function() {stickyMenu};

var navbar_var = document.getElementById("navbar-stick");

var sticky = navbar_var.offSetTop;

function stickyMenu(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-sticky")
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    }
