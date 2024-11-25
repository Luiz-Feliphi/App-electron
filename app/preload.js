const {contextBridge} = require ('electron')
contextBridge.exposeInMainWorld('api', {
  verElectron: () => process.versions.electron
})

window.addEventListener('DOMContentLoaded', () =>{
  const dataAtual = document.getElementById('dataAtual').innerHTML = obterData()
})

function obterData(){
  const data = new Date()
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  }
  return data.toLocaleDateString('pt-BR',options)
}

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })