const lapiceraazul = { id:"0001", title:"Lapicera azul", brand:"Filgo", description:"Lapicera azul trazo fino. Precisión al escribir. Alta durabilidad.", price:50, pictureUrl:"assets/lapicera-azul.png", stock:5 };

const GetFetchDetail = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(lapiceraazul)
    }, 2000)
})

console.log(lapiceraazul)
export default GetFetchDetail