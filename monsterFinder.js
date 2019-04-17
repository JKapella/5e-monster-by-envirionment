//ON PAGE LOAD

//

function setUpButtonEventListeners() {
    let buttons = document.querySelectorAll('button')

    buttons.forEach((button)=> {
        button.addEventListener('click', e => {
            e.target.value
        })
    })
}


setUpButtonEventListeners()


//Do a request to ... http://www.dnd5eapi.co/ ... get all monsters, using http://dnd5eapi.co/api/
//Each of these monsters has another URL to do an API call to get full info on the monster