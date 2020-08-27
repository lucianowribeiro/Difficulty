function Slide(css,level){
    
    return `<nav style="${css[0]}">
                <div id="${level[0]}"style="${css[1]}">${level[0]}</div>
                <div id="${level[1]}"style="${css[1]}">${level[1]}</div>
                <div id="${level[2]}"style="${css[1]}">${level[2]}</div>
            </nav>    
    `
}