# Meaning of Terms used
 
 * Transition
 * Opacity
 * Box-shadow

 ## Transition

 Transition occur when theirs is a smooth transition from a particular style to another style, normallyb  the transition property is used followed by the number of seconds usually a more realistic and professional time interval is 0.15s.
 eg if we want to transition the color and background-color of a button to a different backgroung-color and color when we hover over the button or when we click the button, we will use the pseudo class **hover** and the **active** first we create a button element `<button class="button-send">Send</button>` and style the respective button in code.The transition property must added to the base code and what we transitioning specified with time
 ```
 .button-send{
  background-color:black;
  color:red;
  transition:background-color 0.15s, color:0.15s;
 }
 .button-send:hover{
  backbround-color:green;
  color:blue;
 }
 .button-send:active{
   backbround-color:green;
    color:yellow;
 }
 ```
 ## Opacity

 Opacity is the degree of see through of an element, it is usually between 0 and 1. when an object has 0 opacity it mean it is completely invisible and an opacity of 1 means the there is no opacity. Normally we vary the opacity between 0 and 1 say 0.15.

 ## Box-Shadow

 Box-Shadow is use to create a shadow effect, it normally takes four value the first value is the horizontal shadow,while the second value is the vertical shadow, the third is the degree of blur and the fourth value is the color.
 ```
 Box-shadow: 3px 3px 10px black;
for color we can use the rgba color model where a stands for opacity
Box-shadow: 3px 3px 10px rgba(0,0,0 0.15);
```
 
 


 
