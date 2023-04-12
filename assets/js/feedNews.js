import { news } from "../../data/news.js";
import { creElt, appDom } from "./utils.js";

const anchor = document.querySelector("aside>dl");


function injectNews(date, text){

    const dtElt = creElt( "dt" );
    const iElt  = creElt( "i" );
    iElt.classList.add( "fa-solid", "fa-comment" );
    iElt.setAttribute( "aria-hidden", "true" );

    // traitement de la date 
    const timeElt = creElt("time");
    timeElt.setAttribute("datatime",date.toLocaleDateString())
    timeElt.innerText = date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

    // mise en place des éléments dans le DOM
    appDom(dtElt,   iElt);
    appDom(dtElt,   timeElt);
    appDom(anchor,  dtElt);

    // traitement du texte
    const ddElt = creElt("dd")
    ddElt.innerText = text;

    appDom(anchor, ddElt)
}









function feedNews(){
    for (const item in news) {

        let date =  (new Date((news[item]).date));
        let text = (news[item]).text;

        injectNews(date, text);
    }
}

export {feedNews}
