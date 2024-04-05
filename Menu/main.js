

console.log(localStorage.getItem('tema') );

let root = document.documentElement;

const contenedorTexto = document.querySelector('.contenedor')
const opcionPequenia = document.getElementById('pequenia')
const opcionMediana = document.getElementById('mediana')
const opcionGrande = document.getElementById('grande')
let letraActual;
let idioma;


let listaElementos= document.querySelectorAll('.list_button--click');


listaElementos.forEach(listaElemento => {
    listaElemento.addEventListener('click', () =>{
        listaElemento.classList.toggle('arrow')
        let height = 0;
        let menu = listaElemento.nextElementSibling;
        console.log(menu.clientHeight);
        if (menu.clientHeight=== 0){
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })
});

// Valida si existe un tema predefinido en el loca storage
 if (localStorage.getItem('tema') !== 'undefined' && localStorage.getItem('tema')){
   
    root.setAttribute('data-theme',localStorage.getItem('tema'))
    
 }else{
    root.setAttribute('data-theme','light')
    
    }
// Valida si hay un valor preferido para la letra
 if (localStorage.getItem('tamañoLetra') !== 'undefined' && localStorage.getItem('tamañoLetra')){
    letraActual = localStorage.getItem('tamañoLetra')
    console.log(`${letraActual} es la letra actual en LS`);
    contenedorTexto.classList.remove('mediana')
    contenedorTexto.classList.remove('grande')
    contenedorTexto.classList.remove('pequenia')
   
    contenedorTexto.classList.add(letraActual)
        
    }



const switchTemaOscuro= document.querySelector('#tLight')
const switchTemaClaro= document.querySelector('#tDark')
console.log(switchTemaOscuro);


switchTemaOscuro.addEventListener('click', setTema2)
switchTemaClaro.addEventListener('click', setTema)
let temaActual;

function setTema(){
    
    console.log('click en cambiar tema');
    root.setAttribute('data-theme','dark')
    temaActual = 'dark'
    localStorage.setItem('tema', temaActual)
}

function setTema2(){
    
    console.log('click en cambiar tema');
    root.setAttribute('data-theme','light')
    temaActual = 'light'
    localStorage.setItem('tema', temaActual)
}


opcionPequenia.addEventListener('click', e => {
    contenedorTexto.classList.remove('mediana')
    contenedorTexto.classList.remove('grande')
    contenedorTexto.classList.add('pequenia')
    letraActual = 'pequenia'
    localStorage.setItem('tamañoLetra',letraActual)

})

opcionMediana.addEventListener('click', e => {
    contenedorTexto.classList.remove('pequenia')
    contenedorTexto.classList.remove('grande')
    contenedorTexto.classList.add('mediana')
    letraActual = 'mediana'
    localStorage.setItem('tamañoLetra',letraActual)
})

opcionGrande.addEventListener('click', e => {
    contenedorTexto.classList.remove('pequenia')
    contenedorTexto.classList.remove('mediana')
    contenedorTexto.classList.add('grande')
    letraActual = 'grande'
    localStorage.setItem('tamañoLetra',letraActual)
})




// Fondos 

const body = document.querySelector('body')
const fondoPlaya = document.getElementById('playa')
const fondoBosque = document.getElementById('bosque')
const fondoCielo = document.getElementById('cielo')

fondoPlaya.addEventListener('click', e => {
    body.style.backgroundImage = 'url("/assets/img/playas-honduras.jpg")'
    body.style.backgroundSize = 'cover'
   
})

fondoBosque.addEventListener('click', e => {
    body.style.backgroundImage = 'url("/assets/img/bosque.jpg")'
    body.style.backgroundSize = 'cover'
})

fondoCielo.addEventListener('click', e => {
    body.style.backgroundImage = 'url("/assets/img/cielo.jpeg")'
    body.style.backgroundSize = 'cover'
})


    
    
    let en = document.getElementById('en')
    let es = document.getElementById('es')

    en.addEventListener('click', enTraduccion)
    es.addEventListener('click', esTraduccion)

    function esTraduccion (){
        let casa= document.getElementById('casa')
        casa.textContent = 'Casa'
        let aN= document.getElementById('aN')
        aN.textContent = 'Acerca de Nosotros'
        srv = document.getElementById('srv')
        srv.textContent = 'Servicios'
        con= document.getElementById('con')
        con.textContent = 'Contacto'
        
        let amenu = document.getElementById('menu')
        menu.textContent = 'Menu de Ajustes'
        let lang = document.getElementById('lang')
        lang.textContent = 'Idiomas'
        es = document.getElementById('es')
        es.textContent = 'Español'
        en = document.getElementById('en')
        en.textContent = 'Ingles'
        console.log(amenu);
        let tm = document.getElementById('tm')
        tm.textContent = 'Tema'
        let tLight = document.getElementById('tLight')
        tLight.textContent = 'Claro'
        let tDark = document.getElementById('tDark')
        tDark.textContent = 'Oscuro'
        let taml = document.getElementById('tam-l')
        taml.textContent = 'Tamaño de Letra'
        console.log(amenu);
    
        let pequenia = document.getElementById('pequenia')
        pequenia.textContent = 'Pequeña'
        let mediana = document.getElementById('mediana')
        mediana.textContent = 'Mediana'
        let grande = document.getElementById('grande')
        grande.textContent = 'Larga'
        let bg = document.getElementById('bg')
        bg.textContent = 'Fondo'
        console.log(amenu);
        let playa = document.getElementById('playa')
        playa.textContent = 'Playa'
        let Bosque = document.getElementById('bosque')
        Bosque.textContent = 'Bosque'
        let cielo = document.getElementById('cielo')
        cielo.textContent = 'Cielo'
        let h1 = document.getElementById('hm1')
        h1.textContent = 'Bienvenido este es un menu de ajustes'
        let p1 = document.getElementById('p1')
        p1.innerHTML = 
        `<p>
        El Menú de Ajustes es un conjunto de herramientas diseñadas para personalizar tu experiencia en nuestra plataforma de manera óptima. Aquí, puedes modificar una variedad de configuraciones según tus preferencias individuales, permitiéndote adaptar la plataforma a tu estilo y necesidades específicas.
        Idiomas: Con esta opción, puedes seleccionar el idioma en el que deseas interactuar con la plataforma. Ofrecemos una variedad de idiomas para garantizar que te sientas cómodo y comprendido mientras navegas por nuestra plataforma. 
        Tema: Elige entre diferentes temas de interfaz para personalizar la apariencia visual de la plataforma. Ya sea que prefieras un diseño claro y minimalista o uno más oscuro y elegante, aquí encontrarás opciones que se ajustan a tu gusto.
        Tamaño de Letra: Ajusta el tamaño de la letra según tus preferencias de lectura. Con esta opción, puedes aumentar o disminuir el tamaño del texto para una experiencia de lectura más cómoda y accesible.
        Fondos: Personaliza el fondo de la plataforma según tu estilo y estado de ánimo. Desde paisajes naturales hasta patrones abstractos, tenemos una variedad de fondos para que elijas aquel que te inspire y te haga sentir más conectado con la plataforma.
    
            </p>`
        
        idioma = 'es'
        localStorage.setItem('idioma',idioma)
        
    }

function enTraduccion (){
    let casa= document.getElementById('casa')
    casa.textContent = 'Home'
    let aN= document.getElementById('aN')
    aN.textContent = 'About Us'
    srv = document.getElementById('srv')
    srv.textContent = 'Services'
    con= document.getElementById('con')
    con.textContent = 'Contact'
    let amenu = document.getElementById('menu')
    menu.textContent = 'Settings Menu'
    let lang = document.getElementById('lang')
    lang.textContent = 'Languages'
    let es = document.getElementById('es')
    es.textContent = 'Spanish'
    en = document.getElementById('en')
    en.textContent = 'English'
    console.log(amenu);
    let tm = document.getElementById('tm')
    tm.textContent = 'Theme'
    let tLight = document.getElementById('tLight')
    tLight.textContent = 'Light'
    let tDark = document.getElementById('tDark')
    tDark.textContent = 'Dark'
    let taml = document.getElementById('tam-l')
    taml.textContent = 'Letter Size'
    console.log(amenu);

    let pequenia = document.getElementById('pequenia')
    pequenia.textContent = 'Small'
    let mediana = document.getElementById('mediana')
    mediana.textContent = 'Medium'
    let grande = document.getElementById('grande')
    grande.textContent = 'Large'
    let bg = document.getElementById('bg')
    bg.textContent = 'Background'
    console.log(amenu);
    let playa = document.getElementById('playa')
    playa.textContent = 'Beach'
    let Bosque = document.getElementById('bosque')
    Bosque.textContent = 'Forest'
    let cielo = document.getElementById('cielo')
    cielo.textContent = 'Sky'
    let h1 = document.getElementById('hm1')
    h1.textContent = 'Welcome this is a Settings Menu'
    let p1 = document.getElementById('p1')
    p1.innerHTML = 
    `<p>
        The Settings Menu is a set of tools designed to optimally personalize your experience on our platform. Here, you can modify a variety of settings based on your individual preferences, allowing you to tailor the platform to your specific style and needs.
        Languages: With this option, you can select the language in which you want to interact with the platform. We offer a variety of languages ​​to ensure you feel comfortable and understood while browsing our platform.
        : Choose between different interface themes to customize the visual appearance of the platform. Whether you prefer a light, minimalist design or a darker, sleeker one, you'll find options here to suit your taste.
        Theme: Choose between different interface themes to customize the visual appearance of the platform. Whether you prefer a light, minimalist design or a darker, sleeker one, you'll find options here to suit your taste.
       Font size: Adjust the font size according to your reading preferences. With this option, you can decrease or increase the text size for a more comfortable and accessible reading experience.
       Backgrounds: Customize the platform background according to your style and mood. From natural landscapes to abstract patterns, we have a variety of backgrounds for you to choose from that inspires you and makes you feel more connected to the platform.

        </p>`
    
    idioma = 'en'
    localStorage.setItem('idioma',idioma)
    
}


if (localStorage.getItem('idioma') !== 'undefined' && localStorage.getItem('idioma')){
    idioma = localStorage.getItem('idioma')
   if (idioma === 'es') {
       esTraduccion();
   }else{
       enTraduccion()
   }
           
 }