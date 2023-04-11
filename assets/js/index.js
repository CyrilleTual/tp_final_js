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

       

        for (const elt in (datas.section [item])) {

            // on créer un element de type article pour chaque menu
            const article = document.createElement('article')
            anchor.append(article);


            if (elt === "title"){ 
                console.log ("title du menu ", item)
                const domElt= document.createElement('h3')
                domElt.textContent = `The ${item}` ;
                article.append(domElt)
               

            }
            if (elt === "img"){
                let myImage=((datas.section [item])[elt]) 
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