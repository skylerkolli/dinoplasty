const app = {
    init(formSelector) {
        document
            .querySelector(formSelector)
            .addEventListener("submit",this.addDino )
    },
    
    addDino(ev) {
        ev.preventDefault()
        const dinoName = ev.target.dinoName.value
        console.log("submitted!")
    },
}

app.init("#dino-form")