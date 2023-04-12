import { datas } from "../../data/index.js";
import { creElt, appDom } from "./utils.js";
import Bloc from "./class/Bloc.js";

function feed(){
    // ancre : 2 eme section du main
    const anchor = document.querySelector ('main section:nth-child(2)');

    // on traite le titre (tableau) 
    let blocTitle = new Bloc(anchor,"","h2");
    
    // traitement du contenu du H2
    for (let i = 0; i < (datas.section.title).length; i++){
        let anchor = document.querySelector(blocTitle.typeOfElt)
        let blocSpan = new Bloc (anchor,(datas.section.title)[i],"i")
        if (i === 0){
           blocSpan.blocClassListAdd('secondary-color');
        }   
    }  

    // on enleve le titre à l'objet "section", il ne reste que les menus 
    delete datas.section.title; 

    // ensuite on passe en revue tous les menus 
    for (const item in datas.section) {

        // on créer un element de type article pour chaque menu,
        // servira d'ancre pour les éléments de chaque menu

       let article = (new Bloc(anchor,"",'article')).domElt;
       
        // affectation par décomposition des elements du menu 
        const {title, img, para, a } = (datas.section [item]);

        // on traite le titre;      
        (new Bloc (article,title ,"h3")).droplet();
       
        // on traite l'image : 
        const myImg = new Bloc(article, img,"img");;
        myImg.addAttribute("src",img.url);
        myImg.addAttribute("alt",img.alt);

        // on traite les paragraphes
        for (const paragraphe of (para)) {  // tableau de paragraphes objets
            // pour chaque objet paragraphe  on boucle  
            for (const id in paragraphe) {
                new Bloc(article,paragraphe[id],'p' );
            }              
        }  

        // et le lien
        let aElt = new Bloc(article, a, 'a');
        aElt.addAttribute("href","#")
        aElt.addAttribute("target","_blank") 
    }
}

export default feed;
