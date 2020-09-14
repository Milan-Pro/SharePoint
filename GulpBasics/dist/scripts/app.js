//App.js - main file
var data = [
    {
        id: 1,
        name: "Vijay"
    },
    {
        id: 2,
        name: "Ajay"
    },
    {
        id: 3,
        name: "Ramesh"
    }
];
​
(() => {
    var html = "";
​
    data.forEach((item) =>{
        html += `<div class="item">
                    ${ item.id } <br/>
                    ${ item.name }
                </div>`;
    });
​
    document.getElementById("output").innerHTML = html;
})();