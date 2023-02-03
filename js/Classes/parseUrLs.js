

export function parseUrl (URL) {
    let indexPrincipio = URL.indexOf("/d/") + 3;
    let indexFinal = URL.indexOf("/view");
    let URLFinal = "https://drive.google.com/uc?export=download&id=";
    
    while(indexPrincipio < indexFinal){
        URLFinal += URL[indexPrincipio];
        indexPrincipio++;
    }
    return URLFinal;
}