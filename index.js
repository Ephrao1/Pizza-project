function PlaceOrder(){
    
        var name=$("input#name").val();
         var size=$("#pizza-size").val();
        var flavor=$("#pizza-flavor").val();
        var crust=$("#pizza-crust").val();
       
        var toppings=[];
        $.each($('input[name="toppings"]:checked'),
            function(){
                toppings.push($(this).val());
            }
        );
        var number=$("#quantity").val();
    
    
    
        var sizeCost;
            if(size === "Small"){
                sizeCost = 650;
            }
            else if(size==="Medium"){
                sizeCost = 900;
            }
            else if(size === "Large"){
                sizeCost = 1200;
            }
        
    
    
    
        var crustCost;
        if (crust === "Thick Crust"){
            crustCost = 200;
        }
        else if( crust === "Deep Crust"){ 
            crustCost = 250;
        }
        else if( crust === "Original"){ 
            crustCost = 150;
        }  
        else if( crust === "Cheese Filled"){ 
            crustCost = 150;
        }  
        else if( crust === "Thin Crust"){ 
            crustCost = 100;
        }
    
    
        var checkboxes= $('input[name="toppings"]:checked').length;
    
        
            if(size === "Small"){
                var toppingsCost = checkboxes * 50;
            }
            else if(size === "Medium"){
                var toppingsCost = checkboxes * 100;
            }
            else if(size === "Large"){
                var toppingsCost= checkboxes * 150;
            }
        

        $("input[type='checkbox']:not(:checked)").prop({ 
            disabled: true
        });
    
         
        $('#placeorder').prop('disabled', true);    
        
    
        $("#yourorder").show();
    
        var price =(sizeCost + crustCost +toppingsCost);
        var totalPrice = parseInt(price*number);
        
        $(".greetings").text("Hello " + name +" ! Confirm your order:");
        $(".pizza-size").append('<tr><td id="pizza-size">'+ size);
        $(".number").append('<tr><td id="number">' + number);
        $(".pizza-crust").append('<tr><td id="pizza-crust">' + crust);
        $(".pizza-flavor").append('<tr><td id="pizza-flavor">' + flavor);
        $(".pizzaTotal1").append('<tr><td id="pizzaTotal1">' + totalPrice);
        
    
        
        arrayTotal.push(totalPrice); 
          if (toppings == "") {
              $(".toppings").append('<tr><td id="pizza-toppings">' + "-");
          }
          if (toppings != "") {
              $(".toppings").append('<tr><td id="pizza-toppings">' + toppings);
          
          $(".name").text(name);
        }
         else {
          document.getElementById("pizza-toppings-help").innerHTML = "Please select a maximum of 3!";
    
          
          document.getElementById("pizza-toppings-help").style.cssText = 'color:red !important' 
      }
    
    
       
                       
    }

    function addOrder() {
        $('#placeorder').prop('disabled', false); 
        $("input[type='checkbox']").prop({ 
            disabled: false
        });
        $("input[type='checkbox']").prop({
            checked: false
        });
      } 
    

    function makeDelivery() {
        $("#deliveryConfirmation").show;
    
        
        var location=$("input#location").val();
        var phone=$("input#phone").val();
    
        $(".location").text(location);
        $(".phone").text(phone);
        $("#delivery").hide();
    
    
    }
    
    $(document).ready(function(){
        $("#orders").submit(function(event){
            event.preventDefault();
            placeOrder();
        });
        $("#deliveryInfo").submit(function(event) {
            event.preventDefault();
            makeDelivery();
        });
    });
    
    
    var arrayTotal = []; 
    
    
    function deliverychoice(){
        $("#choice").show();
        $("#deliverychoice").show();
        $("#orderDetails").hide();
        
    
        document.getElementById("orders").reset();
    
        
    
        $('#placeorder').prop('disabled', false);
    
        var checkoutTotal =0;
        arrayTotal.forEach(function(index){
            checkoutTotal =checkoutTotal + index;
        });
    
        $(".totalPick").text(checkoutTotal);
    
        var checkoutTotalDel = checkoutTotal +250;
    
        $(".totalDel").text(checkoutTotalDel);
    
    }
    
    
    function pickUp(){
        $("#pickUpConfirmation").show();
        $("#yourOrder").hide();
    }
    
    function delivery() {
        $("#delivery").show();
        $("#deliveryInfo").show();
        
      }
    
    function deliveryConfirm(){
        $("#deliveryConfirmation").show();
        $("#yourOrder").hide();
    }  
       
      
      function reloadPage() {
        location.reload(); 
      }
      
      function clearTextarea() {
        $("#messageForm").reset();
      }
      
     