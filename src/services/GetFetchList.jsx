const cataloge = [
    { id:"0001", categorie:"libreria", title:"Lapicera azul", price:50, pictureUrl:"assets/lapicera-azul.png", stock:5 },
    { id:"0002", categorie:"libreria", title:"Lapicera roja", price:50, pictureUrl:"assets/lapicera-roja.png", stock:8 },
    { id:"0003", categorie:"libreria", title:"Lápiz", price:45, pictureUrl:"assets/lapiz.png", stock:10 },
    { id:"0004", categorie:"libreria", title:"Caja de 36 colores", price:450, pictureUrl:"assets/caja-36-colores.png", stock:7 },
    { id:"0005", categorie:"libreria", title:"Set de 4 resaltadores", price:230, pictureUrl:"assets/set-4-resaltadores.png", stock:6 },
    { id:"0006", categorie:"libreria", title:"Canopla marrón y naranja", price:310, pictureUrl:"assets/canopla-marron-naranja.png", stock:9 },
    { id:"0007", categorie:"lanas", title:"Ovillo de lana azul", price:280, pictureUrl:"assets/ovillo-lana-azul.png", stock:12 },
    { id:"0008", categorie:"merceria", title:"Set de 6 hilos para coser", price:470, pictureUrl:"assets/set-6-hilos.png", stock:14 },
    { id:"0009", categorie:"jugueteria", title:"Mono de peluche", price:1299, pictureUrl:"assets/mono-de-peluche.png", stock:3 },
    { id:"0010", categorie:"jugueteria", title:"Bloques de madera", price:599, pictureUrl:"assets/bloques-de-madera.png", stock:9 },
];

const GetFetchList = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(cataloge)
    }, 2000)
})

export default GetFetchList