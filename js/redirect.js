$(document).ready(function () {
  // This is a hack that our old github.io URL redirects to our new 101.o.o
  if(window.location.href.indexOf('github.io') > -1){
    window.location.replace('http://101.opensuse.org/');
  }
});
