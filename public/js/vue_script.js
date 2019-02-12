/*
function MenuItem(name, kCal, lactose, gluten, img) {
    this.name = name;
    this.kCal = kCal;
    this.lactose = lactose;
    this.gluten = gluten;
    this.img = img;
}

// Objects are then instantiated using the new keyword
var menu = new MenuItem("Hot burger", 648, true, false, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KzXAxg1n5JTHwl6LtLTRPnBmBOd29vlsg0uJiBod_o5J9Tmp");
var menu1 = new MenuItem("Big burger", 434, true, true, "http://www.zarksburgers.ph/wp-content/uploads/2017/08/IMG_0052.jpg");
var menu2 = new MenuItem("Small burger", 357, false, true, "https://www.thespruceeats.com/thmb/ivY7T2DRygJN2nHwAFYqVxfbvs4=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg");
var menu3 = new MenuItem("Medium burger", 2405, true, true, "https://foremangrillrecipes.com/wp-content/uploads/2013/05/american-hamburger-foreman-grill.jpg");
var menu4 = new MenuItem("Cheese burger", 542, true, false, "https://cdn.dearcreatives.com/wp-content/uploads/2013/03/Hamburger-Recipes-All-American-Hamburger-Grilled-burger-recipes-perfect-for-grilling-season-and-beyond.-.jpg");
var menu5 = new MenuItem("Strange burger", 754, false, true, "https://cdn20.patchcdn.com/users/790386/20180525/063909/styles/T800x600/public/processed_images/shutterstock_337714676-1527287683-3245.jpg");

var menuItems = [menu,menu1,menu2,menu3,menu4,menu5];
*/
'use strict';
var socket = io();

new Vue({
  el: "#whole",
  data: {
    name: '',
    email: '',
    paymentMethod: '',
    gender: '',
    clicked: false,
    burgers: '',
    menues: food,
    orders: {},
    orderId: 0,
    details: {x: 0, y: 0},
    orderItems: [],
  },
  methods: {
    order: function(){
      this.burgers = "" + burgerOrder();
      this.orderItems = burgerOrder();
      console.log(this.burgers);
      this.clicked = true;
      this.addOrder();
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.details.x = event.clientX - 10 - offset.x;
      this.details.y = event.clientY - 10 - offset.y;
      this.orderId += 1;
      this.getNext();
      console.log(this.details.x, this.details.y);
    },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.orderId,
                                details: this.details,
                                orderItems: this.orderItems,
                                name: this.name,
                                email: this.email,
                                paymentMethod: this.paymentMethod,
                                gender: this.gender,
                              });
    }
  }
});
