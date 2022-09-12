function main(){
    var name = document.getElementById('name')
    var price = document.getElementById('price')
    var tbody = document.getElementById('tbody')

    //add item at the list
    addItem(name, price, tbody);

    name.value = '';
    price.value = '';

}

function addItem(name, price, tbody){
    var newtr;
    var newName;
    var newPrice;
    
    //creat tr
    newtr = document.createElement("tr");
    tbody.appendChild(newtr);
    
    //create tds 
    newName = document.createElement("td");
    newPrice = document.createElement("td");

    //change tds content
    newName.innerHTML = name.value;
    newPrice.innerHTML = price.value;
    newtr.appendChild(newName);
    newtr.appendChild(newPrice);
}
