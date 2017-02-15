window.onload = function(){

    function greet() {
      let reply = [this.person, 'Is An Awesome', this.role].join(' ');
      console.log(reply);
    }

    var i = {
      person: 'Douglas Crockford', role: 'Javascript Developer'
    };

    greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer



    let animals = [
      {species: 'Lion', name: 'King'},
      {species: 'Whale', name: 'Fail'}
    ];

    for (var i = 0; i < animals.length; i++) {
        
      (function (i) { 
        this.print = function () { 
          console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
        } 
        this.print();
      }).call(animals[i],i);
    }
}