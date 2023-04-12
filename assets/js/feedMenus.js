import { datas } from "../../data/index.js";
import { creElt, appDom } from "./utils.js";
import Bloc from "./class/Bloc.js";



function injectSectionTitle (anchor, title){

    let blocTitle = new Bloc(anchor,"","h2");
    // traitement du contenu du H2
    for (let i = 0; i < (title).length; i++){
        let anchor = document.querySelector(blocTitle.typeOfElt)
        let blocSpan = new Bloc (anchor,(title)[i],"i")
        if (i === 0){
           blocSpan.blocClassListAdd('secondary-color');
        }   
    }
}


function injectTitle (anchor, title){
    let blocArticleTitle = new Bloc (anchor,title ,"h3")
    blocArticleTitle.droplet();
}


function injectImg(anchor, img){
    let myImg = new Bloc(anchor, img,"img");;
    myImg.addAttribute("src",img.url);
    myImg.addAttribute("alt",img.alt);
}


function injectPara(anchor, para){        
    for (const paragraphe of (para)) {  // tableau de paragraphes objets
    // pour chaque objet paragraphe  on boucle  
        for (const id in paragraphe) {
            let paragraph = new Bloc(anchor,paragraphe[id],'p' );
            paragraph.appendDom()
        }              
    }        
}

function injectA(anchor, a){
    let aElt = new Bloc(anchor, a, 'a');
    aElt.appendDom();
    aElt.addAttribute("href","#")
    aElt.addAttribute("target","_blank")
}

function feed(){
    // ancre : 2 eme section du main
    const anchor = document.querySelector ('main section:nth-child(2)');

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
