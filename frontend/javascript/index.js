import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

function updateFirstFriday() {
    const today = new Date();
    let firstFriday = new Date(today.getFullYear(), today.getMonth(), 1);
  
    while (firstFriday.getDay() !== 5) {
      firstFriday.setDate(firstFriday.getDate() + 1);
    }
  
    if (today.getMonth() === firstFriday.getMonth() && today.getDate() >= firstFriday.getDate()) {
      firstFriday = today;
    }
  
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = firstFriday.toLocaleDateString('en-US', options);
  
    const FFSR = document.getElementById('FFSR');
    FFSR.textContent = formattedDate;
  }
  
  function updateSecondSaturday() {
    const today = new Date();
    let secondSaturday = new Date(today.getFullYear(), today.getMonth(), 8);
    
    while (secondSaturday.getDay() !== 6) {
      secondSaturday.setDate(secondSaturday.getDate() + 1);
    }
    
    if (today.getMonth() === secondSaturday.getMonth() && today.getDate() >= secondSaturday.getDate()) {
      secondSaturday.setMonth(secondSaturday.getMonth() + 1);
    }
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = secondSaturday.toLocaleDateString('en-US', options);
    
    const COWC = document.getElementById('COWC');
    COWC.textContent = formattedDate;
  }

  function updateFirstAndThirdWednesday() {
    const today = new Date();
    let firstWednesday = new Date(today.getFullYear(), today.getMonth(), 1);
    let thirdWednesday = new Date(today.getFullYear(), today.getMonth(), 1);
    let count = 0;
    
    while (firstWednesday.getDay() !== 3 || thirdWednesday.getDay() !== 3) {
      firstWednesday.setDate(firstWednesday.getDate() + 1);
      thirdWednesday.setDate(thirdWednesday.getDate() + 1);
      if (firstWednesday.getDay() === 3) count++;
      if (count === 2) break;
      if (thirdWednesday.getDay() === 3) count++;
      if (count === 2) break;
    }
    
    if (today.getMonth() === firstWednesday.getMonth() && today.getDate() >= firstWednesday.getDate()) {
      firstWednesday = today;
    }
    
    if (today.getMonth() === thirdWednesday.getMonth() && today.getDate() >= thirdWednesday.getDate()) {
      thirdWednesday = today;
    } else {
      thirdWednesday.setMonth(thirdWednesday.getMonth() + 1);
      while (thirdWednesday.getDay() !== 3) {
        thirdWednesday.setDate(thirdWednesday.getDate() + 1);
      }
    }
    
    const formattedFirstWednesday = firstWednesday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const formattedThirdWednesday = thirdWednesday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const dates = `${formattedFirstWednesday} & ${formattedThirdWednesday}`
  
    const COMM = document.getElementById('COMM');
    COMM.textContent = dates;
  }
 
updateFirstAndThirdWednesday();
updateSecondSaturday();
updateFirstFriday();


