// Create dynamic elements
const btnRandom = document.getElementById("submit")

const resultParagraph = document.getElementById("result");
// Meal arrays

const caribbean = ["Saltfish and Ackee", "Jerk chicken with rice & peas", "Oxtail Stew", "Goat Curry", "Doubles", "Mofongo", "Brown Stew Chicken"]
const westAfrican = ["Thieboudienne", "Red Red", "Chicken or Fish Yassa", "Suya", "Jollof Rice", "Fufu", "Groundnut Stew (Maafe)", "Ewa Agoyin"]
const lebanese = ["Shawarma", "Falafel", "Labneh", "Lahm Bi Ajin ", "Manakish"]
const japanese = ["Sushi", "Udon Noodles", "Ramen", "Unagi", "Tonkatsu", "Soba", "Curry Rice"]
const indian = ["Chana Masala", "Biryani", "Aloo Gobi", "Butter Chicken", "Chicken Tikka Masala", "Dal Makhani", "Curry"]
const thai = ["Red Curry", "Pad Thai", "Pad See Ew", "Fried Rice", "Green Curry", "Green Curry", "Tom Yum Goong"]
const italy = ["Ravoli", "Pizza", "Eggplant Parmigiana", "Risotto", "Tortellini", "Pasta", "Lasagna"]
const mexican = ["Tacos", "Enchiladas", "Chicken Tamale", "Fajitas", "Tostado", "Burrito", "Gordita" ]
// Function to select cuisine
function selectCuisine () {
let dropdownMenu = document.getElementById("cuisine");
let selectedCuisine = dropdownMenu.value

//get a random meal from the selected cuisine
let selectedMeal;
switch(selectedCuisine) {
    case "caribbean":
        selectedMeal = getRandomMeal(caribbean);
        break;
    case "westAfrican":
        selectedMeal = getRandomMeal(westAfrican);
        break;
    case "lebanese":
        selectedMeal = getRandomMeal(lebanese);
        break;
    case "japanese":
        selectedMeal = getRandomMeal(japanese);
        break;
    case "indian":
        selectedMeal = getRandomMeal(indian);
        break;                  
    case "thai":
        selectedMeal = getRandomMeal(thai);
        break;
    case "italy":
        selectedMeal = getRandomMeal(italy);
        break;
    case "mexican":
        selectedMeal = getRandomMeal(mexican);
        break;
    default:
        selectedMeal = "Please select a cuisine"
               
}

// Display the selected meal
    resultParagraph.textContent = selectedMeal;

// Function to get a random meal from an array

function getRandomMeal(mealArray) {
    const randomIndex = Math.floor(Math.random() * mealArray.length);
    return mealArray[randomIndex];
}

//Event listener for the "Pick a Meal" button

btnRandom.addEventListener("click", selectedCuisine);
console.log(dropdownMenu);


}

