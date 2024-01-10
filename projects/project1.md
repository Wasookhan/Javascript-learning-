# projectt1 
# js code:

```javascript
 const buttons = document.querySelectorAll(".button");
 const body = document.querySelector('body');
  let text  = document.querySelector('#text');
  let text2  = document.querySelector('#text2');

 buttons.forEach( (btn) =>{
    btn.addEventListener('click', (event) => {
      if (event.target.id === "black") {
        body.style.backgroundColor = event.target.id;
        text.style.color = "white"
        text2.style.color = "white"
        document.querySelector("#black").style.border = "1px solid white"
      }
      if (event.target.id === "white") {
        body.style.backgroundColor = event.target.id;
        text.style.color = "black"
        text2.style.color = "black"
      }
      if (event.target.id === "grey") {
        body.style.backgroundColor = event.target.id;
        document.querySelector("#grey").style.border = "1px solid white"
     
      }
      if (event.target.id === "blue") {
        body.style.backgroundColor = event.target.id;
        document.querySelector("#blue").style.border = "1px solid white";
        document.getElementsByClassName("span").style.color = "white";
      
      }
      if (event.target.id === "yellow") {
        body.style.backgroundColor = event.target.id;
        document.querySelector("#yellow").style.border = "1px solid white"
      
      }
    })
 })
 ```