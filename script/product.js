
 function displayCost(){
              const inputElem = document.querySelector('.js-input');
              const cost = Number(inputElem.value);
              const costPrice = document.querySelector('.js-display');
           if(cost < 0){
              costPrice.innerHTML = 'Error: cost cannot be less than $0';
           }else{
              costPrice.innerHTML = `The cost of the product is $${cost}`;
           }
     
               
        } 
        function pickEnter(){
            if(event.key === 'Enter'){
             displayCost();    
        }    
    }
