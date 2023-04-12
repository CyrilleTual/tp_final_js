import feedMenus from "./feedMenus.js";
import { feedNews } from "./feedNews.js";

function toggleSection (){
    const section = document.querySelector("main section:nth-child(2)");
    section.style.display !== "flex" ? section.style.display = "flex" : section.style.display = ""; // couche ajoutée par dessus css  
}

function toggleAside(){
    const aside = document.querySelector("aside");
    aside.style.display !== "none" ? aside.style.display ="none" : aside.style.display ="";
}

window.addEventListener('DOMContentLoaded', () =>{
    feedMenus();  // charge le contenu de la section à partir du fichier de datas (data/index.js)

    feedNews(); // charge le contenu du aside à partir du fichier de news (data/news.js)

    // listen sur les bts
    document.getElementById ('btn-section')
        .addEventListener('click', toggleSection);

    document.getElementById ('btn-aside')
        .addEventListener('click', toggleAside);    
})

