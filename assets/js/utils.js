function creElt(elt){
    return document.createElement(elt);
}

function appDom(ref, elt){
    return ref.append(elt);
}

export {creElt, appDom}