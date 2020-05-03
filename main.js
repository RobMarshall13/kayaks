$("img").click(function(){
    $(this).toggleClass("carousel");
});

 $('.carousel').carousel({ interval: 10000  });
 
 function initMap() {
  // The location of Uluru
  var truro = {lat: 50.2607, lng:-5.1162};
  var carnbrea = {lat: 50.22409, lng:-5.26699}
  var atlreach = {lat: 50.40524, lng: -4.95971}
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 9, center:truro });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: carnbrea, map: map, title: 'Carn Brea Leisure Centre'});
  var marker = new google.maps.Marker({position: atlreach, map: map, title: 'Atlantic Reach Leisure Complex' });
}

$( ".link" ).mouseenter(function() {
  $( this ).addClass( "glow" );
  
});

$( ".link" ).mouseleave(function() {
  $( this ).removeClass( "glow" );
  
});