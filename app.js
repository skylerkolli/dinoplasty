const app = {
  init(selectors) 
    this.max = 0
    this.dinos = []
    this.list = document
      .querySelector(selectors.listSelector)
    this.template = document
      .querySelector(selectors.listSelector)
    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', this.addDino.bind(this))
    
    document
      .querySelector(selectors.formSelector)
      .addEventListener("submit", this.addDino.bind(this))
 },

  addDino(ev) {
    ev.preventDefault()

    const dino = {
      id: this.max + 1,
      name: ev.target.dinoName.value,
    }

    const listItem = this.renderListItem(dino)
    this.list.insertBefore(listItem,this.list.firstChild)
    
    this.dinos.unshift(dino)
    this.save()

    ++ this.max
    ev.target.reset()
  },

  save() { 
    localStorage
    .setItem("dinos", JSON.stringify(this.dinos))

  }

  

  renderListItem(dino) {
    const item = this.template.cloneNode(true)
    item.classList.remove("template")
    item.dataset.id = dino.id
    

    item
      .querySelector(".dino-name")
      .textContent = dino.name  

    item
      .querySelector("button.remove")
      .addEventListener("click", this.removeDino.bind(this))

    return item
  }

  removeDino(ev) {
    const listItem = ev.target.closest(".dino")
    listItem.remove()

    for (let i = 0; i < this.dinos.length; i++){
      const currentId = this.dinios[i].id.toString()
      if (listItem.dataset.id === currentId){
         this.dinos.splice(i,1)
         break;
         
      }      
    }
      this.save()
  },
}
  


app.init({
  formSelector: '#dino-form',
  listSelector: '#dino-list',
  templateSelector: ".dino.template",
})