const root = document.querySelector( '#root')

function newElement(tag,text){
    const title = `<${tag}>${text}</${tag}>`
    root.insertAdjacentHTML('beforeend',title)
}

newElement('h1','Dificuldade'); 
