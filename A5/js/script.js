let jsonData = JSON.parse(jsonDataRestaurant);
let searchBox = document.querySelector("#menu-search-box");
let menuTable = document.querySelector("#menu");
let filteredMenu = [];
function searchMenu() {

    let searchBoxValue = searchBox.value;

    for (let i = 0; i < jsonData.length; i++) {
        let isCorrect = [];
        for (let j = 0; j < searchBoxValue.length; j++) {
            if (jsonData[i].DishName.charAt(j).toLowerCase() == searchBoxValue.charAt(j).toLowerCase()) {
                isCorrect.push(true);
            }
            else {
                isCorrect.push(false);
            }
        }
        if (!isCorrect.includes(false)) {
            filteredMenu.push(jsonData[i]);
        }
    }

    deleteTable();
    updateTable();
    console.log(filteredMenu);
    filteredMenu = [];
}

function deleteTable() {
    menuTable.innerHTML = null; // clear row
}

function updateTable() {

    let header = menuTable.createTHead(0);
    let hrow = header.insertRow(0);
    let hDishID = hrow.insertCell(0);
    hDishID.innerHTML = "<center><strong>Dish ID</strong></center>";
    let hDishName = hrow.insertCell(1);
    hDishName.innerHTML = "<center><strong>Dish Name</strong></center>";
    let hRecipeChef = hrow.insertCell(2);
    hRecipeChef.innerHTML = "<center><strong>Main Chef</strong></center>";
    let hPrepTimeMinutes = hrow.insertCell(3);
    hPrepTimeMinutes.innerHTML = "<center><strong>Prep Time</strong></center>";
    let hPrice = hrow.insertCell(4);
    hPrice.innerHTML = "<center><strong>Price</strong></center>";
    let hCurrentAvailability = hrow.insertCell(5);
    hCurrentAvailability.innerHTML = "<center><strong>Availability</strong></center>";

    if (filteredMenu.length > 0) {
        for (let i = 0; i < filteredMenu.length; i++) {
            let row = menuTable.insertRow(i+1);
            let DishID = row.insertCell(0);
            DishID.innerHTML = filteredMenu[i].DishID;
            let DishName = row.insertCell(1);
            DishName.innerHTML = filteredMenu[i].DishName;
            let RecipeChef = row.insertCell(2);
            RecipeChef.innerHTML = filteredMenu[i].RecipeChef;
            let PrepTimeMinutes = row.insertCell(3);
            PrepTimeMinutes.innerHTML = filteredMenu[i].PrepTimeMinutes + " minutes";
            let Price = row.insertCell(4);
            Price.innerHTML = "$" + filteredMenu[i].Price;
            let CurrentAvailability = row.insertCell(5);
            CurrentAvailability.innerHTML = filteredMenu[i].CurrentAvailability;
        }
    }
}