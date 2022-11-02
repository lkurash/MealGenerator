export class View {
  showList(dataRecipe) {
    this.createButtonComeBack(dataRecipe)
    this.createDishTitle(dataRecipe);
    this.createButtonReebot(dataRecipe);
    this.createIngridiens(dataRecipe);
    this.createMakeDish(dataRecipe);

  }
createButtonComeBack(dataRecipe){
  const imgComeBack = document.getElementById('comeback');

    imgComeBack.innerHTML = "";
    var img = new Image(50, 50);
    img.src = 'img/330405_arrow_left_previous_icon.png';

    imgComeBack.append(img);
}
  createDishTitle(dataRecipe){
    const nameElem = document.getElementById('name');
    const name = dataRecipe.meals[0].strMeal;

    nameElem.textContent = name;
  }

  createButtonReebot(dataRecipe){
    const imgAnother = document.getElementById('reeboot');

    imgAnother.innerHTML = "";
    var img = new Image(50, 50);
    img.src = 'img/Lemon_Svg_Theme_clip_art.svg';

    imgAnother.append(img);
  }

  createIngridiens(dataRecipe){
    const ingredElem = document.getElementById('ingredients');

    ingredElem.innerHTML = "";
    const ingredients = [];

    for(let i = 1; i <= 20; i++) {
      const str1 = dataRecipe.meals[0][`strIngredient${i}`]?.trim();
      const str2 = dataRecipe.meals[0][`strMeasure${i}`]?.trim();

      if(str1, str2) {
        ingredients.push(str1 + '-' + str2);
      } else {
        break;
      }
    }

    let h4 = document.createElement('h4');

    h4.textContent = 'Ingredients:';
    ingredElem.append(h4);


    let ul = document.createElement('ul');

    ingredElem.append(ul);
    ingredients.forEach((item) => {
      const li = document.createElement('li');

      li.textContent = item;

      ul.append(li);

    });
  }

  createMakeDish(dataRecipe){
    const makeElem = document.getElementById('make');

    makeElem.innerHTML = "";
    const make = dataRecipe.meals[0].strInstructions;

    makeElem.textContent = make;

    const imgElem = document.getElementById('img');

    imgElem.innerHTML = "";
    const src = dataRecipe.meals[0].strMealThumb;
    const img = document.createElement('img');

    img.src = src;
    imgElem.append(img);
  }
}

const view = new View();

export default view;
