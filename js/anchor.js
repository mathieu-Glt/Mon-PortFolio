//console.log('ok');
const anchor = {
    anchorEvent : function () {
    //console.log('ok'); 
    const anchor = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        })
    }); 

    }


} 

