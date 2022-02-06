
const soccerBall = "<i class='soccer ball icon'></i>";
const ticketIcon = "<i class='ticket icon'></i>";

const showHide1 = () => {
  let readMoreDiv = document.querySelector("#more1");
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.transform = 'scale(0)'
     setTimeout(() => readMoreDiv.style.display = 'none', 1000)
     btn1.innerHTML = soccerBall + "Read More..."
  } else {
    readMoreDiv.style.display = "block";
    btn1.textContent = "Read Less..."
    setTimeout(()=> readMoreDiv.style.transform = 'scale(1)', 300)
  }
}


const showHide2 = () => {
  let readMoreDiv = document.querySelector("#more2");
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.transform = 'scale(0)'
     setTimeout(() => readMoreDiv.style.display = 'none', 1000)
    
    btn2.innerHTML = ticketIcon + "Read More..."
  } else {
    readMoreDiv.style.display = "block";
    btn2.textContent = "Read Less..."
    setTimeout(()=> readMoreDiv.style.transform = 'scale(1)', 300)
  }
}

$('#disclaimerButton').on('click',function() {
  $('#disclaimer').slideToggle('slow')
  })



const getRating1 = () => {
  let userRating = parseInt(prompt("Rate how big of a Fan you are of Totti (from 1 to 5 stars)"));
  if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
    alert("Try again with a number between 1 and 5!");
  } 
  else if (userRating == 1)
  {
    document.querySelector("#rating1").innerHTML = "You are not a real fan yet: ";
    for (let i = 1; i <= userRating; i++) {
      document.querySelector("#rating1").innerHTML += "<i class='orange heart icon'></i>";

  }
} 
  
  else if (userRating == 5)
  {
    document.querySelector("#rating1").innerHTML = "You are a TRUE fan of Totti: ";
    for (let i = 1; i <= userRating; i++) {
      document.querySelector("#rating1").innerHTML += "<i class='orange heart icon'></i>";
  
  }
}
  else
  {
    document.querySelector("#rating1").innerHTML = "You gave a rating of: ";
    for (let i = 1; i <= userRating; i++) {
      document.querySelector("#rating1").innerHTML += "<i class='orange heart icon'></i>";
    }
  }
}

const getRating2 = () => {
  let userRating = parseInt(prompt("How likely are you to visit the Stadium? (from 1 to 5 stars)"));
  if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
    alert("Try again with a number between 1 and 5!");
  } 
  else if (userRating == 5)
  {
      document.querySelector("#rating2").innerHTML = "Amazing, you will love the experience: ";
      for (let i = 1; i <= userRating; i++) {
        document.querySelector("#rating2").innerHTML += "<i class='yellow star icon'></i>";
      
  }
}
  else
  {
    document.querySelector("#rating2").innerHTML = "You gave a rating of: ";
    for (let i = 1; i <= userRating; i++) {
      document.querySelector("#rating2").innerHTML += "<i class='yellow star icon'></i>";
    }
  }
}


let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', showHide1);

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', showHide2);

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', getRating1);

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', getRating2);






