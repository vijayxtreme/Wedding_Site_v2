//nav
(function(){
  var Navigation = function() {
  this.nav = document.createElement('nav');
  this.ul = document.createElement('ul');
  this.ul.setAttribute('id', 'subnav');

  this.navItems = ['story', 'information', 'reservation', 'photos', 'honeymoon'];
  this.home = document.createElement('li');
  this.home.innerHTML = 'HOME';
  var a = document.createElement('a');
  a.href = 'index.html';
  a.appendChild(this.home);
  this.ul.appendChild(a);

  this.navItems.forEach(function(item){
    var li = document.createElement('li');
    li.innerHTML = item.toUpperCase();
    var a = document.createElement('a');
    a.href = item + ".html";
    a.appendChild(li);
    this.ul.appendChild(a);
  }.bind(this));

  this.header = document.getElementsByTagName('header')[0];
  this.header.appendChild(this.ul);
};
  new Navigation();

}());
//selection
$(document).ready(function(){
  $('#subnav a').each(function(index){
    if(this.href.trim() == window.location){
      var item = $(this);
        item.addClass('selected');
        item.addClass('selected:hover');
        item.css('color', 'white');
        item.css('border-bottom', 'none');
    }
  });
});

//carousel
(function(){
  var imgArray = [
                  'Priya&Naveen-Norwalk-133.jpg',
                  'Priya&Naveen-Norwalk-23.jpg',
                  'Priya&Naveen-Norwalk-3.jpg',
                  'Priya&Naveen-Norwalk-53.jpg',
                  'Priya&Naveen-Norwalk-67.jpg',
                  'Priya&Naveen-Norwalk-71.jpg',
                  'Priya&Naveen-Norwalk-72.jpg',
                  'Priya&Naveen-Norwalk-75.jpg'
                  ];

 for(var i=0; i<imgArray.length; i++){
  var bgImg = 'url(img/'+imgArray[i]+')';
  var div = $('<a href="img/'+imgArray[i]+'" rel="lightbox" data-lightbox="roadtrip"><div></div></a>');

  $(div).addClass('photo-img').css('background-image', bgImg);
  $("#photos").append(div);

 }
}());

var lightbox = lightbox || undefined;
if(lightbox){
  lightbox.option({
    'wrapAround':true,
    'alwaysShowNavOnTouchDevices':true
  })
}