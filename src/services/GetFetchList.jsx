const cataloge = [
    
    { id:"0001", 
    categorie:"libreria",
    title:"Lapicera azul", 
    price:50, 
    pictureUrl:"../assets/lapicera-azul.png", 
    stock:5 },

    { id:"0002", 
    categorie:"libreria", 
    title:"Lapicera roja", 
    price:50, 
    pictureUrl:"../assets/lapicera-roja.png", 
    stock:8 },

    { id:"0003", 
    categorie:"libreria", 
    title:"Lápiz", 
    price:45, 
    pictureUrl:"../assets/lapiz.png", 
    stock:10 },

    { id:"0004", 
    categorie:"libreria", 
    title:"Caja de 36 colores", 
    price:450, 
    pictureUrl:"../assets/caja-36-colores.png", 
    stock:7 },
    
    { id:"0005", 
    categorie:"libreria", 
    title:"Set de 4 resaltadores", 
    price:230, 
    pictureUrl:"../assets/set-4-resaltadores.png", 
    stock:6 },

    { id:"0006", 
    categorie:"libreria", 
    title:"Canopla marrón y naranja", 
    price:310, 
    pictureUrl:"../assets/canopla-marron-naranja.png", 
    stock:9 },
    
    { id:"0007", 
    categorie:"lanas", 
    title:"Ovillo de lana azul", 
    price:599, 
    pictureUrl:"../assets/ovillo-lana-azul.png", 
    stock:12 },
    
    { id:"0008", 
    categorie:"merceria", 
    title:"Set de 6 hilos para coser", 
    price:470, 
    pictureUrl:"../assets/set-6-hilos.png", 
    stock:14 },
    
    { id:"0009", 
    categorie:"jugueteria", 
    title:"Mono Lulo", 
    price:1299, 
    pictureUrl:"../assets/mono-de-peluche.png", 
    stock:3 },
    
    { id:"0010", 
    categorie:"jugueteria", 
    title:"Bloques de madera", 
    price:599, 
    pictureUrl:"../assets/bloques-de-madera.png", 
    stock:9 },

    { id:"0011", 
    categorie:"lanas", 
    title:"Ovillo de lana roja", 
    price:499, 
    pictureUrl:"../assets/ovillo-lana-roja.png", 
    stock:7 },

    { id:"0012", 
    categorie:"merceria", 
    title:"Bobina de hilo sisal", 
    price:499, 
    pictureUrl:"../assets/bobina-hilo-sisal.png", 
    stock:4 },

    { id:"0013", 
    categorie:"lanas", 
    title:"Bobina de hilo para tejer beige", 
    price:799, 
    pictureUrl:"../assets/bobina-hilo-tejer.png", 
    stock:6 },

    { id:"0014", 
    categorie:"merceria", 
    title:"Centímetro", 
    price:249, 
    pictureUrl:"../assets/centimetro.png", 
    stock:12 },

    { id:"0015", 
    categorie:"jugueteria", 
    title:"Grua mini", 
    price:699, 
    pictureUrl:"../assets/grua-mini.png", 
    stock:17 },

    { id:"0016", 
    categorie:"jugueteria", 
    title:"Avioncito", 
    price:649, 
    pictureUrl:"../assets/avioncito.png", 
    stock:13 },

    { id:"0017", 
    categorie:"jugueteria", 
    title:"Set de chiches para el agua", 
    price:649, 
    pictureUrl:"../assets/set-chiches-agua.png", 
    stock:10 },

    { id:"0018", 
    categorie:"jugueteria", 
    title:"Muñeca de tela", 
    price:999, 
    pictureUrl:"../assets/muñeca-tela.png", 
    stock:9 },

];

const GetFetchList = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(cataloge)
    }, 2000)
})

export default GetFetchList