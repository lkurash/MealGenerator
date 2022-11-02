import controller from "./controller.js";
import view from "./view.js";
import model from "./model.js";

if (window.location.pathname === "/MealGenerator/" || window.location.pathname === "/index.html" ) {
  controller.onePage();
}
else{
  window.onload = twoPage();

  async function twoPage(){
    const category = controller.getCategory();

    if(category == 'Beef'){
      let dataRecipe = await model.breakfastDinner(category);

      view.showList(dataRecipe);
    }
    if (category == 'Breakfast'){
      let dataRecipe = await model.breakfastDinner(category);

      view.showList(dataRecipe);
    }
    else {
      let dataRecipe = await model.soup(category);

      view.showList(dataRecipe);
    }

    // отображение блюда по категориям

  }
  const reeboot = document.getElementById('reeboot');

  reeboot.addEventListener('click', (a) =>{
    event.preventDefault();
    twoPage();
  });
}
