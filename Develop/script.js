$(function () {
  let descriptionEl = document.getElementsByClassName("description")
  let mainContainer = document.getElementById("mainContainer")
  // jQuery checking current format for the day
  $('#currentDay').html(moment().format('MMMM Do YYYY hh:mm'));
  var currentHour= "hour-" + `${moment().format('hh')}`;
  var idList= ["hour-9", "hour-10", "hour-11", "hour-12", "hour-1", "hour-2", "hour-3", "hour-4", "hour-5"] 
  var index=0;
  //instead of using new variable used every item in the list to traverse
  idList.forEach((item)=>{
  
    descriptionEl.item(idList.indexOf(item)).value = localStorage.getItem(item)
  
    if(item === currentHour){
      index=idList.indexOf(item)
    }
  })
  // for loop was used to give a class name and to assign a color to the elements
  for(var i=0;i<idList.length;i++){
    if(i<index){
      document.getElementById(idList[i]).className += "past"
  
    }
    if(i==index){
      document.getElementById(idList[i]).className += "present"
      
    }if(i>index){
  
      document.getElementById(idList[i]).className += "future"
      
    }
  }
  //map was created to store user data and id of the div
  //checking by calss name if user clicked on the save button
  // and saving it to local storage
  var userData = new Map();
  function userInput(event) {
    console.log("class name clicked",event.target.className)
    if(event.target.className === "btn saveBtn col-2 col-md-1" || event.target.className === "fas fa-save"){
      console.log("save button clicked")
      for(var i = 0;i<idList.length;i++){
        var decriptionValue = descriptionEl.item(i).value
        userData.set(idList[i], decriptionValue)
      }
      console.log(userData)
      idList.forEach((id)=>{
        localStorage.setItem(id, userData.get(id))
      });
    }
  }
  mainContainer.addEventListener("click", userInput)
  });
  
  

