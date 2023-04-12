import { datas } from "../../data/index.js";
import { creElt, appDom } from "./utils.js";


function injectSectionTitle (anchor, title){
    const domElt= creElt('h2');
    // différents span car coloration du premier mot
    for (let i = 0; i < (title).length; i++){
        const span = creElt('span');
        span.innerText = (title)[i];
        // coloration en vert du premier mot              
        if (i === 0){
            span.classList.add('secondary-color');
        }
        appDom(domElt,span);
    }
    appDom(anchor, domElt);
}


function injectTitle (anchor, title){

    const domElt = creElt('h3');
    domElt.textContent = (title) ;

    // création des magnifiques goutees d'eau
    const droplet1 = (creElt('i'));
    const droplet2 = (creElt('i'));
    droplet1.classList.add("fa-droplet","fa-solid");
    droplet2.classList.add("fa-droplet","fa-solid");

    appDom(anchor,domElt);
    // accrochages des gouttes
    domElt.insertAdjacentElement('afterbegin',droplet1);
    domElt.insertAdjacentElement('beforeend',droplet2);
}

function injectImg(anchor, img){
    const domElt    = creElt('img');
    domElt.src      = img.url;
    domElt.alt      = img.alt; 
    appDom(anchor, domElt);
}

function injectPara(anchor, para){
    for (const paragraphe of (para)) {  // tableau de paragraphes objets
    // pour chaque objet paragraphe  on boucle  
        for (const id in paragraphe) {
            const domElt = creElt('p');
            domElt.textContent = (paragraphe[id]);
            appDom(anchor, domElt);
        }              
    }        
}

function injectA(anchor, a){

    const domElt = creElt('a');
        domElt.href         = "#";
        domElt.target       = "_blank";
        domElt.textContent  = a;
    appDom(anchor, domElt);
}


function feed(){

    // ancre : 2 eme section du main
    const anchor = document.querySelector ('main section:nth-child(2)');

    // l'objet section est composé d'un titre et de menus (en nombre variable)

    // on traite le titre (tableau) 
    injectSectionTitle (anchor, (datas.section.title))   

    // on enleve le titre à l'objet "section", il ne reste que les menus 
    delete datas.section.title; 

    // ensuite on passe en revue tous les menus 
    for (const item in datas.section) {

        // on créer un element de type article pour chaque menu,
        // cet article servira d'ancre pour les éléments de chaque menu
        const article = creElt('article');
        appDom(anchor, article);

        // affectation par décomposition des elements du menu 
        const {title, img, para, a } = (datas.section [item]);

        // on traite le titre;      
        injectTitle (article, title);

        // on traite l'image : 
        injectImg (article, img)

        // on traite les paragraphes
        injectPara (article, para)

        // et le lien
        injectA (article, a)       
       
    }
}

export default feed;
