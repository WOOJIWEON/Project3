function initMap(){
  var home = {lat: 36.6308659, lng: 127.4194848};
  var university = {lat: 36.629238, lng : 127.456371};
  var cheongjuriver = {lat: 36.636343, lng : 127.484030};
  var downtown = {lat : 36.636981, lng: 127.489452};
  var highschool = {lat : 36.701957, lng: 127.420036};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12.5, center: home
    }
  );

  var marker1 = new google.maps.Marker({
    position: home,
    map: map
  });
  
  var marker2 = new google.maps.Marker({
    position: university,
    map: map
  });
  
  var marker3 = new google.maps.Marker({
    position: cheongjuriver,
    map: map
  });
  
  var marker4 = new google.maps.Marker({
    position: downtown,
    map: map
  });
  
  var marker5 = new google.maps.Marker({
    position: highschool,
    map: map
  });
}