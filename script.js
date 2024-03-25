const now = new Date()
console.log(now)
const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
console.log((year))
console.log((month+1))
console.log((day))

const totalTime = (day)*86400+(month+1)*2629440+(year)*12*2629440;
console.log(totalTime)

// for displaying the error messages for each missing input 
const dayErrorMessage = document.getElementById('day-error-msg')
const yearErrorMessage = document.getElementById('year-error-msg')
const monthErrorMessage = document.getElementById('month-error-msg')

// getting the user informations 
const userYear = document.getElementById('year');
const userMonth = document.getElementById('month');
const userDay = document.getElementById('day');

// for highliting the error for the missing input 
const yearLabel = document.getElementById('year-label');
const monthLabel = document.getElementById('month-label');
const dayLabel = document.getElementById('day-label');

// the user ages 
var yearAge;
var monthAge;
var dayAge;

//the validity of the inputs 
var notValid = false;
// displaying the results to the screen 
const displayYear = document.getElementById('year-age');
const displayMonth = document.getElementById('month-age');
const displayDay = document.getElementById('day-age');

// main function for calculating the age and displaying it 
function calculate(){
checkValidation()
// this for displaying the user inputs 
console.log("the year is : ",userYear.value)
console.log("the month is : ",userMonth.value)
console.log("the day is : ",userDay.value)
if(!notValid){
    getAge()
    console.log("the year is : ",yearAge)
    console.log("the month is : ",monthAge)
    console.log("the day is : ",dayAge)
    displayYear.innerHTML = yearAge.toString()
    displayMonth.innerHTML = monthAge.toString()
    displayDay.innerHTML = dayAge.toString()
    }
}


// function for checking the missing inputs 
function checkValidation(){ 

    if(userDay.value === ""){
        dayErrorMessage.style.display = 'block'
        dayLabel.style.color = 'red'
        userDay.style.border = '1px solid red'
    }
    if(userMonth.value === ""){
        monthErrorMessage.style.display = 'block'
        monthLabel.style.color = 'red'
        userMonth.style.border = '1px solid red'
    }
    if(userYear.value === ""){
        yearErrorMessage.style.display = 'block'
        yearLabel.style.color = 'red'
        userYear.style.border = '1px solid red'
    }
    if(userYear.value === "" || userMonth.value === "" || userDay.value === ""){
        notValid = true;
    }else{
        notValid = false;
    }
}

userMonth.addEventListener("input", function () {
    monthErrorMessage.style.display = 'none'
    monthLabel.style.color = 'hsl(0, 1%, 44%)'
    userMonth.style.border = '1px solid hsl(0, 0%, 86%)'
})
userYear.addEventListener("input", function () {
    yearErrorMessage.style.display = 'none'
    yearLabel.style.color = 'hsl(0, 1%, 44%)'
    userYear.style.border = '1px solid hsl(0, 0%, 86%)'
})

userDay.addEventListener("input", function () {
    dayErrorMessage.style.display = 'none'
    dayLabel.style.color = 'hsl(0, 1%, 44%)'
    userDay.style.border = '1px solid hsl(0, 0%, 86%)'
})

// function to calulate the age 
function getAge(){
    const totalUser = (userDay.value)*86400+(userMonth.value)*2629440+(userYear.value)*12*2629440;
    console.log(totalUser)
    var ageSecond = totalTime - totalUser;
    console.log(ageSecond)
    yearAge = Math.floor((ageSecond / (365*24*60*60)))
    console.log(yearAge)
    ageSecond = ageSecond - (yearAge)*12*2629440
    monthAge = Math.floor((ageSecond / (30.44 * 24 * 60 * 60)))
    console.log(monthAge)
    ageSecond = ageSecond - (monthAge)*2629440
    dayAge = Math.floor((ageSecond / (24 * 60 * 60)))
    console.log(dayAge)
}