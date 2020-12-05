const text= document.querySelector("#text");
const add= document.querySelector("#add");
const list =document.querySelector("#list");
const deletes =document.querySelectorAll(".spans");
const items = list.children;



add.addEventListener("click",addItem);
list.addEventListener("click",deletecheck);

//functions

function addItem(){
    if(text.value==""){
        alert("Must type something");
        return null;
    }
        
        const item =document.createElement("li");
        item.id= `item${items.length+1}`;
        item.innerHTML=text.value+'<button class="spans"><img width="28.5px" height="32.57px" src="img/delete.svg" alt=""></button>';
        list.appendChild(item);
        text.value="";
        console.log(deletes);
        
        deletes =document.querySelectorAll(".spans");
        console.log(deletes);
   
}
function deletecheck(e){
    let trash=e.target;
    if(trash.classList[0]==="spans"){
       const item = trash.parentElement;
       item.remove();
    }
}


 
