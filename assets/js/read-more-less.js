$(document).ready(function(){
  $(".invisible-content").hide();
  $(document).on('click',"#btn",function(){
    var morelessButton=$(".invisible-content").is(":visible")?'Read more':'Read less';
    $(this).text(morelessButton);
    $(this).parent(".team-box").find(".invisible-content").toggle();
    $(this).parent(".team-box").find(".visible-content").toggle();
  });
});