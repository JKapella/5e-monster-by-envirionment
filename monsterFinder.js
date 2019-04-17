function setUpButtonEventListeners() {
    let buttons = document.querySelectorAll('button')

    buttons.forEach((button)=> {
        button.addEventListener('click', e => {
            let selection = e.target.value
            processUserEnvironmentSelection(selection)
        })
    })
}

function processUserEnvironmentSelection(selection) {
    var monstersForEnvironmentSelectedArray = getMonsterNamesForEnvironment(selection)
    console.log(monstersForEnvironmentSelectedArray)
}

setUpButtonEventListeners()

//Do a request to ... http://www.dnd5eapi.co/ ... get all monsters, using http://dnd5eapi.co/api/
//Each of these monsters has another URL to do an API call to get full info on the monster