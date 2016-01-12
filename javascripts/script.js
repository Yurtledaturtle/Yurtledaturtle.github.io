console.log('scripts loaded');

function showTab(){
  var tab = $('.tab-content');
  tab.event("click", "tab.css('display','inline-block')");
}
