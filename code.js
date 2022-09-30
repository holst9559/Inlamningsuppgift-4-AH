console.log("JS laddat");

const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.querySelector("ul");
const showCompleted = document.querySelector("p");
const toDoArray = [];

let completedCount = 0;

//Funktion för att skapa nya element i listan.
function newElement(){
    const item = document.createElement("li");
    let myInput = input.value;

    //Lägga till i array
    const toDoObject = {};
    toDoObject.toDo = myInput;
    toDoArray.push(toDoObject);
    
    //Kontroll av input
    if(myInput.length == 0){
        warning.innerHTML = "You must write something";
    }
    else{
        warning.innerHTML = "";
        list.appendChild(item);
    }

    const itemLabel = document.createElement("span");
    itemLabel.innerText = myInput;
    item.appendChild(itemLabel);
    

    //Lägger till och tar bort completed
    itemLabel.addEventListener("click", function() {

        if(item.getAttribute("class") == "completed"){
            item.setAttribute("class", "");
            showCompleted.innerText = completedCount + " Completed";
            completedCount--;
            showCompleted.innerText = completedCount + " Completed";
            
        }
        else {
            item.setAttribute("class", "completed");
            showCompleted.innerText = completedCount + " Completed";
            completedCount++;
            showCompleted.innerText = completedCount + " Completed";
        }
    });

    console.log(toDoArray);
    /*

    //Flera olika försök till att ta bort object med completed class från arrayen.
    for ( let i = 0; i < toDoArray.length; i++) {
        if (toDoArray[i].classList === ("completed")){
            toDoArray.splice[i];
         }
    };
        
    toDoArray.forEach(toDoObject => {
         for (let key in toDoObject) {
            if (key === "class, completed") {
                 toDoArray.pop();
            }
                
        }
    })

    /*
    function removeObject(toDoArray, toDoObject) {
        return toDoArray.filter(function(ele){
            return ele == toDoObject;
        });
    }
    */
}


    








