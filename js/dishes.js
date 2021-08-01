let listItems=document.querySelectorAll('.list-items');
let price=document.querySelector('.prices');
 

// on utilise la method foreach pour parcourur tous les elements du tableau
listItems.forEach((items,index)=>{
    items.addEventListener('click',products)
});


function products() {
    if (this.dataset.select==='false') {
        this.dataset.select='true';    
    }
    else{this.dataset.select='false'}  
    choice();
}


function choice() {
    //convertir listItems en tableau afin d'utiliser la methode mad ou reduce
     listItems=Array.from(listItems);
    // on filtre tout le donnée dont l'attribut data est passé à true
    let filterElementTrue=listItems.filter((listItem)=>{
        if(listItem.dataset.select==='true'){
            return listItem;
        }
        else{
            return false
        };    
});
// dans le tableau filtré on utilise la methode map afin de reccuperer le prix dans l'attribur data
let prices=filterElementTrue.map(filterElement=>Number(filterElement.dataset.price));
console.log(prices)
    displayPrice(prices)
}

// cette function permet d'afficher le resultat dans le DOM
function displayPrice(prices) {
    let total=(prices.length!==0)?prices.reduce((prev,current)=>prev+current):0;
    price.innerText=total;
    console.log(total)
}


export {listItems};