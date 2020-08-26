
const root = document.querySelector("#root")
const content = "difficulty"

const title = Title`
    color: #c56cf0;
    font-size: 2rem;
    letter-spacing: 1.2px;
    ${content}      
`

root.insertAdjacentHTML('beforeend',title) 