//console.log('ok');
const tel = {
    telEvent : function openclosedSpoiler() {
        //console.log('ok');
        let counter = 0;
        // je récupère la div qui contient le lien cliquable
        const divClick = document.getElementById('spoiler');
        //console.log(divClick);
        //je recupère la div qui contient le num de telephone
        const divTel = document.querySelector('.contentSpoiler');
        console.log(divTel);
        divClick.addEventListener('click', () => {
            //console.log('ok');
                counter++;
                //console.log(counter);
                //divTel.classList.remove("contentSpoiler");
                //divTel.classList.add("#spoiler");
                if (divTel.classList.contains("contentSpoiler") == true) {
                    //console.log(divTel);
                    divTel.classList.remove("contentSpoiler");
                    divTel.classList.add("#spoiler");
                    console.log(divTel);
                } 
                else if (divTel.classList.contains("#spoiler") == true) {
                    divTel.classList.remove("#spoiler");
                    divTel.classList.add("contentSpoiler");
                    console.log(divTel);
                }
                    


    })
                        
    }

        
            


}

