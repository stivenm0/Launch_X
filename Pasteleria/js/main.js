let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let article = document.getElementById("article");


izquierda.addEventListener("click", ()=>{ LEFT()})
derecha.addEventListener("click", ()=>{ RIGHT()})



function LEFT(){ article.scroll(article.scrollLeft- 250, 0) }

function RIGHT(){ article.scroll(article.scrollLeft + 250, 0) }