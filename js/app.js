var Navigation = function() {
  this.nav = document.createElement('nav');
  this.ul = document.createElement('ul');

  this.navItems = ['story', 'information', 'reservation', 'photos'];
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
    if(item == "photos"){
      a.href = 'http://indianweddingsnap.pixieset.com/priyaandnaveen/';
      a.target = '_blank';
    } else {
    a.href = item + ".html";
    }
    a.appendChild(li);
    this.ul.appendChild(a);
  }.bind(this));

  this.header = document.getElementsByTagName('header')[0];
  this.header.appendChild(this.ul);
};

new Navigation();
