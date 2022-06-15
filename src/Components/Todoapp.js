import React ,{useState} from 'react'
import CreateList from './CreateList'

function Todoapp() {
            
   const [inputList,setInputList] =useState("");
   const [Items,setItems] =useState([]);
   const h2 =document.getElementById('h2');

     const itemEvent =(event)=>{
            setInputList(event.target.value);
     };

        const listOfItems =() => {
            setItems((oldItems)=>{
                return [...oldItems,inputList];
            })
            h2.style.display = 'none';
            setInputList('');
           
            
	
        };

        const deletebtn =(id)=>{
          console.log('deleted');
          setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            })
        })  

        // var list = document.querySelector('ul');



        // // list.addEventListener("click", function(event) {
        // //   let element = event.target.nextElementSibling;
          
        // //   if (element?.classList.contains('checked')) { 
        // //     element?.classList.remove('checked');
        // //   }else{
        // //     element?.classList.add('checked');
        // //   }
        // // }, false);


        }

  return (
    <>
    <div>
    <div>
        <h1>All Tasks</h1>
        <div>
                  <input id="input" type="text" name="add" class="textinput" placeholder="Add a new task" value={inputList} onChange={itemEvent}/>
                  <button id="addbtn" class="button" onClick={listOfItems}>Add</button>
                  <ul id="myList" class="ul">
                   { Items.map((itemVal,index) =>{
                       return  <CreateList  
                       key ={index}
                       id={index}
                       text={itemVal}
                       onSelect={deletebtn} 
                       />
                    })}
               
        </ul>  
       </div>
    </div>
        <div>
            <h2 id="h2">Seems like a quiet day</h2>
        </div>
</div>
</>
  )

}

export default Todoapp