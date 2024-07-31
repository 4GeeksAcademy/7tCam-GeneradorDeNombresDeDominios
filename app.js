window.onload = () => {
    document.querySelector('#dominio').innerHTML= generator();
};
function generator(){
    let extension = {
        world : "www"
    };
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extension2 = ['.com', '.pe','.gob', '.mx','.png', '.jpg'];
    let container = [];

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {  
                for (let m = 0; m < extension2.length; m++) {   
                    container.push(`${extension.world}.${pronoun[i]}${adj[j]}${noun[k]}${extension2[m]}`)                 
                }
            }
        }
    }
    return container.join(" <br> ")
}




