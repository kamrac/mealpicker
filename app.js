// Create dynamic elements
const btnRandom = document.getElementById("submit")

btnRandom.addEventListener("click", () => {
    
})
// Meal arrays

const caribbean = ["Saltfish and Ackee", "Jerk chicken with rice & peas", "Oxtail Stew", "Goat Curry", "Doubles", "Mofongo", "Brown Stew Chicken"]
const westAfrica = ["Thieboudienne", "Red Red", "Chicken or Fish Yassa", "Suya", "Jollof Rice", "Fufu", "Groundnut Stew (Maafe)", "Ewa Agoyin"]
const lebanese = ["Shawarma", "Falafel", "Labneh", "Lahm Bi Ajin ", "Manakish"]
const japanese = ["Sushi", "Udon Noodles", "Ramen", "Unagi", "Tonkatsu", "Soba", "Curry Rice"]
const indian = ["Chana Masala", "Biryani", "Aloo Gobi", "Butter Chicken", "Chicken Tikka Masala", "Dal Makhani", "Curry"]
const thai = ["Red Curry", "Pad Thai", "Pad See Ew", "Fried Rice", "Green Curry", "Green Curry", "Tom Yum Goong"]
const italy = ["Ravoli", "Pizza", "Eggplant Parmigiana", "Risotto", "Tortellini", "Pasta", "Lasagna"]
const mexican = ["Tacos", "Enchiladas", "Chicken Tamale", "Fajitas", "Tostado", "Burrito", "Gordita" ]
// Function to select cuisine
function selectCuisine () {
let dropdownMenu = document.getElementById("cuisine").value;
// let value = dropdownMenu.options[dropdownMenu.selectedIndex].text;
console.log(dropdownMenu);


}

