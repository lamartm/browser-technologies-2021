const form = document.querySelector('form')

export function localStorageCheck() {
    const test = "test"
    try {
        localStorage.setItem(test, test)
        localStorage.removeItem(test)
        return true
    } catch(e) {
        return false
    }
}

function answers() {
    const answer = document.querySelectorAll('form input')

    answer.forEach(i => {
        const savedAnswer = localStorage.getItem(`${form.id}-${i.name}`)

        if(savedAnswer) {
            if(i.type === 'radio' && i.value === savedAnswer) {
                i.checked = true
            } else if(i.type !== 'radio') {
                i.value = savedAnswer
            }
        }
    })
}
if (localStorageCheck() === true) {
    form.addEventListener('focusout', function(e) {
        if(e.target.type !== 'submit'){
        localStorage.setItem(`${form.id}-${e.target.name}`, e.target.value)
        }
    })
    window.addEventListener('load', answers)
    console.log(localStorage)
} else {
    console.log('no sir')
}
