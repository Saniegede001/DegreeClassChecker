const body = document.querySelector('body')
const heading = document.querySelector('h2')
const span = document.querySelector('span')
const check = document.getElementById('check')
const myInput = document.querySelector('#input')

    // styling the The Variables (Elements)
    body.setAttribute('style', 'background: #333; text-align: center;')
    heading.setAttribute('style', 'color: #fff; font-size: 22px;')
    span.setAttribute('style', 'color: #fff; display: block; margin-bottom:8px;')
    myInput.setAttribute('style', 'width: 150px; padding: 2px 8px; outline:none;')
    check.style.cursor = 'pointer'
        
    check.addEventListener('click', ()=>{
        const myCgpa = myInput.value

        // Variables that display the class of CGPA and myRemarks(Texts)
        const myRemarks = document.querySelector('h3')
        const myText = document.querySelector('p')
        const myClass = document.querySelector('h4')

        // styling The Elements 
        myRemarks.style.color = 'white'
        myText.style.color = 'white'
        myClass.style.color = 'white'

        if (myCgpa > 5 ){
            myRemarks.innerHTML = ``
            myText.innerHTML = 'CGPA cannot be higher than 5.00'
            myClass.innerHTML = ''
            console.log(`CGPA cannot be higher than 5.00`)
        }
        else if (myCgpa >= 4.5 && myCgpa <=5) {
            myRemarks.innerHTML = `Congratulations!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = `First Class`
            console.log(`First Class`)
        }
        else if (myCgpa >=3.5 && myCgpa < 4.5){
            myRemarks.innerHTML = `Congratulations!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = `Second Class Upper`
            console.log(`Second Class Upper`)
        }
        else if (myCgpa >=2.5 && myCgpa < 3.5) {
            myRemarks.innerHTML = `Congratulations!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = `Second Class Lower`
            console.log(`Second Class Lower`)
        }
        else if (myCgpa >= 1.5 && myCgpa < 2.5) {
            myRemarks.innerHTML = `Congratulations!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = `Third Class`
            console.log(`Third Class`)
        }
        else if (myCgpa >= 1 && myCgpa < 1.5) {
            myRemarks.innerHTML = `Congratulations!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = `Pass`
            console.log(`Pass`)
        }
        else if (myCgpa > 0 && myCgpa < 1) {
            myRemarks.innerHTML = `Sorry!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = 'Fail'
            console.log(`Fail`)
        }
        else if (myCgpa== '0' ) {
            myRemarks.innerHTML = `Sorry!`
            myText.innerHTML = `Your CGPA is ${myCgpa}`
            myClass.innerHTML = 'Fail'
            console.log(`Fail`)
        }
        else if (myCgpa==''){
            myRemarks.innerHTML = ``
            myText.innerHTML = `Please Input Your CGPA`
            myClass.innerHTML = ''
            console.log('Please Input Your CGPA')
        }
        else{
            myRemarks.innerHTML = ``
            myText.innerHTML = `Invalid CGPA Format`
            myClass.innerHTML = ''
            console.log('Invalid CGPA Format')
        }
    })