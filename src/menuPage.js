const menuContent = () =>{
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer') 

    let menuItem = ['Cookie', 'Advocado', 'Pepperoni', 'Veggie', 'Hawaiian', 'Meat Lovers'];
    let itemDescription = ['A chocolate chip cookie the size of a pizza!', 'Avocado, Mozzerela, Tomato sauce, Garlic, Basil', 'Pepperoni, Mozzerela, Basil, Tomato sauce', 'Lots of delicious Veggies', 'Pineapple on pizza!', 'Sasuage, Bacon, Pepperoni, Ham, Tomato sauce, Mozzerella']
    let itemImage = ['https://sallysbakingaddiction.com/wp-content/uploads/2016/06/giant-chocolate-chip-cookie-pizza-3-225x225.jpg','https://www.yeprecipes.com/data/media/7/chicken-avocado-pizza.jpg','https://cdn.ruled.me/wp-content/uploads/2014/08/pepperonipizza.jpg','https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1','https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg','https://halo-pg.com/wp-content/uploads/2021/10/Ultimate-Stuffed-Meatlovers-Pizza-1.jpg']

    let numberofElements = menuItem.length;
    for(let i = 0; i < numberofElements; i++){
        let menuDiv = document.createElement('div');
        menuDiv.classList.add('menuItem');

        let menuImage = document.createElement('img');
        let menuDivItem = document.createElement('h1');
        let menuDivDescription = document.createElement('p');

        menuDivItem.textContent = menuItem[i];
        menuDivDescription.textContent = itemDescription[i];
        menuImage.src = itemImage[i];

        menuDiv.appendChild(menuImage);
        menuDiv.appendChild(menuDivItem);
        menuDiv.appendChild(menuDivDescription);

        menuContainer.appendChild(menuDiv); 
    }
    return menuContainer;
}
export {
    menuContent
}