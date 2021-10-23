
const cataloge = [
    { id:"0001", title:"Lapicera azul", price:50, pictureUrl:"assets/lapicera-azul.png", stock:5 },
    { id:"0002", title:"Lapicera roja", price:50, pictureUrl:"assets/lapicera-roja.png", stock:8 },
    { id:"0003", title:"Lápiz", price:50, pictureUrl:"assets/lapiz.png", stock:10 },
    { id:"0004", title:"Caja de 36 colores", price:50, pictureUrl:"assets/caja-36-colores.png", stock:7 },
    { id:"0005", title:"Set de 4 resaltadores", price:50, pictureUrl:"assets/set-4-resaltadores.png", stock:6 },
    { id:"0006", title:"Canopla marrón y naranja", price:50, pictureUrl:"assets/canopla-marron-naranja.png", stock:9 },
];

const Item = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(cataloge)
    }, 2000)
})

export default Item