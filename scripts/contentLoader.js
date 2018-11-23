var sTargetSelector = 'article:first';
function loadExternalContent(sURL) {
  console.log('Sending request to ' + sURL);
  $.ajax({
    url : sURL
    , beforeSend:function() {

    }
    , error:function(oData) {
        console.log(oData);
        alert('There is some error');
    }
    , success:function(oData) {
        console.log(oData);
        $(sTargetSelector).html(oData);
    }
  });

  window.history.pushState({href:  sURL}, '', '#' + sURL);

}

$(document).ready(function() {
    $('.load-content').bind('click' , function(event){
        targetSrc = $(this).attr('href');
        event.preventDefault();
        if( $(this).data('target')) {
          targetSelector =  $(this).data('target');
        }
        loadExternalContent(targetSrc , targetSelector);
    });

    window.addEventListener('popstate', function(e){
      console.log(e);
      if(e.state)
        loadExternalContent(e.state.href);
   });

});
