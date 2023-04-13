import { creElt, appDom } from "../utils.js";
class Bloc{

    constructor (anchor, content, typeOfElt){
        this.anchor = anchor;
        this.content =  content || null ;
        this.typeOfElt = typeOfElt;
        this.domElt = null;
        this.appendDom();
    }
    
    appendDom(){
    this.domElt = creElt(this. typeOfElt);
    if (this.content !== null)(this.domElt.textContent = (this.content) );
    appDom(this.anchor,this.domElt);
    }

    blocClassListAdd (myclass) {
        this.domElt.classList.add(myclass);
    }

    droplet(){
        const droplet1 = (creElt('i'));
        const droplet2 = (creElt('i'));
        droplet1.classList.add("fa-droplet","fa-solid");
        droplet2.classList.add("fa-droplet","fa-solid");
        this.domElt.insertAdjacentElement('afterbegin',droplet1);
        this.domElt.insertAdjacentElement('beforeend',droplet2);
    }

    addAttribute(att,value){
        this.domElt.setAttribute(att,value)
    } 

}

export default Bloc; 