import feedMenus from "./feedMenus.js";
import { feedNews } from "./feedNews.js";


function toggleElement (el){
    const  target = document.querySelector(el);
    target.style.display !== ("" || "none") ? target.style.display = "none" : target.style.display = ""; 
}


window.addEventListener('DOMContentLoaded', () =>{
    feedMenus();  // charge le contenu de la section à partir du fichier de datas (data/index.js)

    feedNews(); // charge le contenu du aside à partir du fichier de news (data/news.js)

    // listen sur les bts
    document.getElementById ('btn-section')
        .addEventListener('click', () => toggleElement("main section:nth-child(2)"));

    document.getElementById ('btn-aside')
        .addEventListener('click', () => toggleElement("aside")); 
})

