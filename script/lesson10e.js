
/*
to make the three buttons on and off give them seperate functions name and change the operation for example the button that will be on all the time will retain it function while the other once will take the style of the off and you will check if the button has the off style then you can now decide to off and on
*/
         function controlLight1(){
              const buttonElem =  document.querySelector('.js-game');
            
               if(buttonElem.classList.contains('is-toggle')){
                        buttonElem.classList.add('game-button');
                        buttonElem.classList.remove('is-toggle');
                } else{
                         buttonElem.classList.remove('game-button')
                         buttonElem.classList.add('is-toggle');
                       
                }
               } 

           function controlLight2(){
                const button2Elem = document.querySelector('.js-music');
                 if( button2Elem.classList.contains('game-button')){
                         button2Elem.classList.add('is-toggle');
                         button2Elem.classList.remove('game-button');
               } else{
                       
                        button2Elem.classList.remove('is-toggle');
                        button2Elem.classList.add('game-button')
                }     

           } 

           function controlLight3(){
                   const button3Elem = document.querySelector('.js-tech');

                    if( button3Elem.classList.contains('is-toggle')){
                         button3Elem.classList.add('game-button');
                         button3Elem.classList.remove('is-toggle');
                }    
                else{
                 
                   button3Elem.classList.add('is-toggle');
                   button3Elem.classList.remove('game-button')
               }
           }
              

                
                

                  
                   
                   
              
              
              
            
   

