class Controller {

  async onePage() {
    const breakfast = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
    const dataBreakfast = await breakfast.json();
    const src = dataBreakfast.meals;
    const aLink = document.querySelector('#link');

    const lunch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const dataLunch = await lunch.json();
    const srcLunch = dataLunch.meals;
    const aLinkLunch = document.querySelector('#link__second');

    const dinner = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const dataDinner = await dinner.json();
    const srcDinner = dataDinner.meals;
    const aLinkDinner = document.querySelector('#link__third');

    aLink.addEventListener('click', (a) =>{
      const rand = src[Math.floor(Math.random() * src.length)];
      const id = rand.idMeal;
      const attr = 'page.html?c=Breakfast' + '&i=' + id;
      const createBr = aLink.setAttribute('href', attr);
    });

    aLinkLunch.addEventListener('click', (a) =>{
      const randLunch = srcLunch[Math.floor(Math.random() * src.length)];
      const idLunch = randLunch.idMeal;
      const attrLunch = 'page.html?c=Soup' + '&i=' + idLunch;
      const createL = aLinkLunch.setAttribute('href', attrLunch);
    });

    aLinkDinner.addEventListener('click', (a) =>{
      const randDinner = srcDinner[Math.floor(Math.random() * src.length)];
      const idDinner = randDinner.idMeal;
      const attrDinner = 'page.html?c=Beef' + '&i=' + idDinner;
      const createD = aLinkDinner.setAttribute('href', attrDinner);

    });
  }

  // отправка id блюда с первой страницы при переходе на вторую страницу

  getCategory () {
    const url = new URL(window.location.href);
    const category = url.searchParams.get("c");

    if(category == null) {
      window.location.href = 'https://lkurash.github.io/MealGenerator/';
    }
    return category;
  };

  // получение категории с первой страницы

  getId () {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("i");

    if(id == null) {
      window.location.href = 'https://lkurash.github.io/MealGenerator/';
    }
    else {
      return id;
    }
  };
}
// получение id блюда с первой страницы

const controller = new Controller();

export default controller;
