import { datas } from "../../data/index.js";
import { creElt, appDom } from "./utils.js";


function feed(){
    // ancre : 2 eme section du main
    const anchor = document.querySelector ('main section:nth-child(2)');

    // parcours de l'objet section 
    for (const item in datas.section) {

        if (item === "title") {         // on traite le titre (tableau) dans 2 span car couleur differents
            
            const domElt= creElt('h2');
            for (let i = 0; i < (datas.section [item]).length; i++){
                const span = creElt('span');
                span.innerText = (datas.section [item])[i];
                // coloration en vert du premier mot              
                if (i === 0){
                    span.classList.add('secondary-color');
                }
                appDom(domElt,span);
            }
            appDom(anchor, domElt);
            
        }else{ // on est dans chaque menu et on va les parcourir

            // on créer un element de type article pour chaque menu
            const article = creElt('article');
            appDom(anchor, article);
    
            // on crée le contenu de chaque article :
            for (const elt in (datas.section [item])) {
                if (elt === "title"){ 
                    const domElt = creElt('h3');
                    domElt.textContent = (datas.section [item])[elt] ;

                     // création des magnifiques goutees d'eau
                    const droplet1 = (creElt('i'));
                    const droplet2 = (creElt('i'));
                    droplet1.classList.add("fa-droplet","fa-solid");
                    droplet2.classList.add("fa-droplet","fa-solid");

                    appDom(article,domElt);
                    // accrochages des gouttes
                    domElt.insertAdjacentElement('afterbegin',droplet1);
                    domElt.insertAdjacentElement('beforeend',droplet2);
                }
                if (elt === "img"){
                    const myImage = ((datas.section [item])[elt]);
                    const domElt  = creElt('img');
                    domElt.src = myImage.url;
                    domElt.alt = myImage.alt; 
                    appDom(article, domElt);
                }
                if ( elt === "para"){    
                    for (const paragraphe of (datas.section [item])[elt]) {  // tableau de paragraphes objets
                        // pour chaque objet paragraphe  on boucle et on affiche lnom 
                        for (const id in paragraphe) {
                            const domElt = creElt('p');
                            domElt.textContent = (paragraphe[id]);
                            domElt.setAttribute ("id",id);
                            appDom(article, domElt);
                        }              
                    }        
                }
                if (elt === "a"){
                    const textA = ((datas.section [item])[elt]);
                    const domElt = creElt('a');
                    domElt.href = "#";
                    domElt.target = "_blank";
                    domElt.textContent = textA;
                    appDom(article, domElt);
                }     
            }       
        }
    }
}

export default feed;
