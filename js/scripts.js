//Constructor for pizza object
  var Pizza = function(size){
    this.size = size;
    this.toppings = [];
    this.price = 0;
  }

//Creates a method to calculate the price of sm, md, or lg pizza
  Pizza.prototype.findSizePrice = function(){
    if(this.size ==='small')
    {
      this.price += 9;
    }
    else if(this.size === 'medium')
    {
      this.price += 11;
    }
    else if(this.size === 'large')
    {
      this.price += 13;
    }
  }

  Pizza.prototype.findToppingPrice = function(){
    for(i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] == "chicken" || this.toppings[i] == "ham" || this.toppings[i] == "pepperoni" || this.toppings[i] == "sausage") {
          this.price += 2;
        }
        else {
            this.price += 1;
        }
      }
    }

  $(document).ready(function(){
  $("form#pizza-order").submit(function(event){
  event.preventDefault();

  var userSizeSelection = $("input:radio[name=pizza-size]:checked").val(); //Uses JQuery to find the user's size selection from radio buttons
  var userPizza = new Pizza(userSizeSelection);
  //Creates a new instance of the Pizza object
  userPizza.findSizePrice();
  //Runs the findSizePrice method on the new Pizza instance -- grabs the price of the pizza size per that method.

  $("input[type='checkbox']:checked").each(function(){
      userPizza.toppings.push($(this).val());
  });
      userPizza.findToppingPrice();
      console.log(userPizza);
  $("#pizzaPrice").text("Your total will be " + "$" + userPizza.price)
  });
});
