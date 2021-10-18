window.addEventListener("DOMContentLoaded", function ()
{
    const b = document.getElementById("btn-count");
    b.addEventListener("click", countPrice);
});

function countPrice(event)
 {
    event.preventDefault();
    const price = document.getElementById("price");
    const count = document.getElementById("num");
    const total = document.getElementById("total");
    let result = price.value * count.value;

    if (!Number.isNaN(result) && price.value > 0 && count.value > 0) 
    {
        total.value = result;
    } 
    else 
    {
        alert("Допущена ошибка при вводе данных!");
    }
}