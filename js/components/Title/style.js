
const root = document.querySelector("#root")
const content = "WELCOME"
const subContent = "in my kindom"

const title = Title`
    color: #900090;
    font-size: 30px;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    ${content}       
    ${subContent}
`

root.insertAdjacentHTML('beforeend',title)