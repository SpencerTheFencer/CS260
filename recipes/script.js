document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      if (json.meals === null) {
        let noRecipeFound = '<p class="error">No recipe found with \"' + value + "\" in the title</p>";
        document.getElementById("recipeResults").innerHTML = noRecipeFound;
      }
      else {
        document.getElementById("recipeResults").innerHTML = jsonToHTML(json);
      }
    });
});

document.getElementById("randomButton").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      if (json.meals === null) {
        let noRecipeFound = '<p class="error">Error getting random recipe</p>';
        document.getElementById("recipeResults").innerHTML = noRecipeFound;
      }
      else {
        document.getElementById("recipeResults").innerHTML = jsonToHTML(json);
      }
    });
});

function jsonToHTML(json) {
  let results = '<div class="meals">';
  for (let i = 0; i < json.meals.length; i++) {
    let meal = json.meals[i];
    results += '<div class="meal">';
    results += '<h3 class="meal-title">' + meal.strMeal + '</h3>';
    results += '<div class="meal-divider">';
    results += '<img class="meal-picture" src="' + meal.strMealThumb + '">';
    results += '<div class="ingredients">';
    results += '<h5 class="meal-ingredients">Ingredients</h5>';
    for (let j = 1; j <= 20; j++) {
      ingredient = meal[("strIngredient" + j)];
      if (ingredient !== null && ingredient !== "") {
        results += '<p class="meal-ingredient">' + meal[("strMeasure" + j)] + ' ' + ingredient + '</p>';
      }
      else {
        break;
      }
    }
    results += '</div></div>';
    results += '<h5 class=meal-instructions">Instructions</h5>';
    results += '<p class="meal-instruction-details">' + meal.strInstructions + '</p>';
    results += '</div>';
  }
  results += '</div>';
  return results;
}
