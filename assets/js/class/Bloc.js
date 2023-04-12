import { creElt, appDom } from "../utils.js";
class Bloc{

    constructor (anchor, content, typeOfElt){
        this.anchor = anchor;
        this.content =  content;
        this.typeOfElt = typeOfElt;
        this.domElt = null;
        this.appendDom();

        
    }
    
    appendDom(){
    this.domElt = creElt(this. typeOfElt);
    this.domElt.textContent = (this.content) ;
    appDom(this.anchor,this.domElt);
    }

    blocClassListAdd (myclass) {
        this.domElt.classList.add(myclass);
    }

    droplet(){
        const droplet1 = (creElt('i'));
        const droplet2 = (creElt('i'));
        this.domElt.insertAdjacentElement('afterbegin',droplet1);
        this.domElt.insertAdjacentElement('beforeend',droplet2);
        droplet1.classList.add("fa-droplet","fa-solid");
        droplet2.classList.add("fa-droplet","fa-solid");
    }

    addAttribute(att,value){
        this.domElt.setAttribute(att,value)
    } 

}

export default Bloc; 