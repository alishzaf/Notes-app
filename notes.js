let addform = document.getElementById('addnote');
let removeform= document.querySelector('#crossicon');
let addbtn = document.querySelector('#addbtn');
            //    for add form 
addform.addEventListener('click', function(){
   document.querySelector('.addform').style.display='block'
   document.getElementById('tittle').value='';
   document.getElementById('Description').value='';
})
        //    for remove form 
removeform.addEventListener('click',function(){
    document.querySelector('.addform').style.display='none'
})


addbtn.addEventListener('click',function(){
    // When the button is clicked, hide the form
    document.querySelector('.addform').style.display='none'


   // Create a new <div> element to represent a note
    let div = document.createElement('div');


     // Add the class to the new div
      div.classList.add('myNote');


      // Set the inner HTML of the new div with the note's title, description, and a delete button
    div.innerHTML=`
    <h2>${document.getElementById('tittle').value}</h2>
    <p>${document.getElementById('Description').value}</p>
    <button> Delet</button>
    `  
   
     // Append the newly created div
    document.querySelector('.newNotes').appendChild(div)
    
      // Remove the newly created div
      div.querySelector('button').addEventListener('click',function(){
        div.remove();
    })

   

})