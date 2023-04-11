import { datas } from "../../data/index.js";


// ancre : 2 eme section du main

const anchor = document.querySelector ('main section:nth-child(2)');


// parcours de l'objet section 

for (const item in datas.section) {
    if (item === "title") {         // on traite le titre (tableau)
        const domElt= document.createElement('h1')
        for (const word of (datas.section [item])) {
            domElt.innerText += word  
        }
        anchor.appendChild(domElt)
        
        
    }else{ // on est dans chaque menu et on va les parcourir

                   // on créer un element de type article pour chaque menu
            const article = document.createElement('article')
            anchor.append(article);

        for (const elt in (datas.section [item])) {

            if (elt === "title"){ 
                console.log ("title du menu ", (datas.section [item])[elt])
                const domElt= document.createElement('h3')
                domElt.textContent = (datas.section [item])[elt] ;
                article.append(domElt)
               
            }
            if (elt === "img"){
                let myImage=((datas.section [item])[elt])
                const domElt= document.createElement('img')
                domElt.src = myImage.url;
                domElt.alt = myImage.alt; 
                article.append(domElt)
                console.log(myImage)
            }
            if ( elt === "para"){    

                for (const paragraphe of (datas.section [item])[elt]) {  // tableau de paragraphes objets

                    // pour chaque objet paragraphe  on boucle et on affiche lnom 
                    for (const id in paragraphe) {

                        console.log (id);
                        console.log (paragraphe[id])
                        
                    }
                    
                }
             
            }
        
        }
        
    }
}