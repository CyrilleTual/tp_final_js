import { datas } from "../../data/index.js";

function feed(){
    // ancre : 2 eme section du main
    const anchor = document.querySelector ('main section:nth-child(2)');

    // parcours de l'objet section 
    for (const item in datas.section) {

        if (item === "title") {         // on traite le titre (tableau) dans 2 span car couleur differents
            
            const domElt= document.createElement('h2');
            for (var i = 0; i < (datas.section [item]).length; i++){
                let span = document.createElement('span');
                span.innerText = (datas.section [item])[i];
                // coloration en vert du premier mot              
                if (i===0){
                    span.classList.add('secondary-color');
                }
                domElt.appendChild(span);  
            }
            anchor.appendChild(domElt)
            
        }else{ // on est dans chaque menu et on va les parcourir

            // on créer un element de type article pour chaque menu
            const article = document.createElement('article');
            anchor.append(article);
    
            // on crée le contenu de chaque article :
            for (const elt in (datas.section [item])) {
                if (elt === "title"){ 
                    const domElt= document.createElement('h3');
                    domElt.textContent = (datas.section [item])[elt] ;

                     // création des magnifiques goutees d'eau
                    const droplet1 = (document.createElement('i'));
                    const droplet2 = (document.createElement('i'));
                    droplet1.classList.add("fa-droplet","fa-solid");
                    droplet2.classList.add("fa-droplet","fa-solid");
              
                    article.append(domElt);
                    // accrochages des gouttes
                    domElt.insertAdjacentElement('afterbegin',droplet1);
                    domElt.insertAdjacentElement('beforeend',droplet2);
                }
                if (elt === "img"){
                    let myImage=((datas.section [item])[elt]);
                    const domElt= document.createElement('img');
                    domElt.src = myImage.url;
                    domElt.alt = myImage.alt; 
                    article.append(domElt);
                }
                if ( elt === "para"){    
                    for (const paragraphe of (datas.section [item])[elt]) {  // tableau de paragraphes objets
                        // pour chaque objet paragraphe  on boucle et on affiche lnom 
                        for (const id in paragraphe) {
                            const domElt= document.createElement('p')
                            domElt.textContent = (paragraphe[id]);
                            domElt.setAttribute ("id",id);
                            article.append(domElt);
                        }              
                    }        
                }
                if (elt === "a"){
                    let textA=((datas.section [item])[elt]);
                    const domElt= document.createElement('a');
                    domElt.href="#";
                    domElt.target = "_blanck";
                    domElt.textContent = textA;
                    article.append(domElt);
                }     
            }       
        }
    }
}

export default feed;
