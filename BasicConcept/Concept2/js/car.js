function Car(name, price, maker){
    var name = name;
    var price = price;
    var maker = maker;
    this.getName = function() {return name;}
    this.getPrice = function() {return price;}
    this.getMaker = function() {return maker;}
    }