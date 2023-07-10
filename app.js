let boton_izq = document.querySelector(".btn1");
let boton_der = document.querySelector(".btn2");
let hero__back = document.querySelector(".hero");
let titulo = document.querySelector(".body__title");
let cuerpo = document.querySelector(".body__paragraph");
let index = 1;
hero__back.classList.add(`hero__${index}`);

boton_der.addEventListener("click", ()=>{
    if (index == 3){
        index = 1;
        hero__back.classList.remove(`hero__3`);
        hero__back.classList.add(`hero__${index}`);
    }else{
        hero__back.classList.remove(`hero__${index}`);
        index++;
        hero__back.classList.add(`hero__${index}`);
    }
    console.log(index);
    changeText();
});

boton_izq.addEventListener("click", ()=>{
    if (index == 1){
        index = 3;
        hero__back.classList.remove(`hero__0`);
        hero__back.classList.add(`hero__${index}`);
    }else{
        hero__back.classList.remove(`hero__${index}`);
        index--;
        hero__back.classList.add(`hero__${index}`);
    }
    console.log(index);
    changeText();
});

function changeText(){
    switch (index) {
        case 1: 
            titulo.innerHTML = "Discover innovative ways to decorate";
            cuerpo.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            break;
        case 2: 
            titulo.innerHTML = "We are available all across the globe";
            cuerpo.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today";
            break;
        case 3: 
            titulo.innerHTML = "Manufactured with the best materials";
            cuerpo.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            break;
        default:
            break;
    }
}