const app = {
  init(selectors) {
    this.max = 0
    this.dinos = []
    this.list = document.querySelector(selectors.listSelector)
    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', this.addDino.bind(this))
  },

  addDino(ev) {
    ev.preventDefault()

    const dino = {
      id: this.max + 1,
      name: ev.target.dinoName.value,
    }

    const listItem = this.renderListItem(dino)
    this.list.appendChild(listItem)

    ++ this.max
    ev.target.dinoName.value= " "
    this.dinos.push(dino)
  },

  

  renderListItem(dino) {
    const item = document.createElement('li')
    item.textContent = dino.name
    return item
  }
  
}

app.init({
  formSelector: '#dino-form',
  listSelector: '#dino-list',
})