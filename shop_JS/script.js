var hero_name_eng = ["berserk", "warrior", "necromancer", "assasin", "mage", "druid", "hunter", "demon", "healer"];
var companion_name_eng = ["elemental", "dragon", "fairy", "water_spirit", "crow"];
var craft_name_eng = ["amethyst", "emerald", "ruby", "sapphire", "diamond"];

var shop_name = [
    "Сундук необычного сокровища", "Сундук редкого сокровища", "Сундук эпического сокровища",
    "Ледяной сундук", "Сундук феи", "Сундук драконида",
    "Проклятый сундук", "Сундук света", "Сундук доблести",
    "Цветочный сундук", "Малый сундук кристаллов", "Большой сундук кристаллов", "Малый сундук самоцветов", "Большой сундук самоцветов"
];
var shop_image = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "10", "11", "12", "13", "13"
];
var rarity = [ // 0-обычный  1-необычный  2-редкий  3-эпический  4-легендарный  5-божественный
    1, 2, 3,
    2, 4, 4,
    5, 5, 5,
    1, 0, 3, 1, 4
];
var shop_item_type = [ //0-кристаллы, 1-золото, 2-предмет, 3-случайный самоцвет, 4-8-компаньон, 10-18-герой
    [2], [2], [2],
    [7], [6], [5],
    [12, 13, 17, 3, 1, 1, 1, 0, 0, 0], [11, 15, 18, 3, 1, 1, 1, 0, 0, 0], [14, 10, 16, 3, 1, 1, 1, 0, 0, 0],
    [], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [], []
];
var shop_item_num = [ // количество
    [1], [1], [1],
    [1], [1], [1],
    [1, 1, 1, 8, 2000, 700, 300, 3000, 2000, 1000], [1, 1, 1, 8, 2000, 700, 300, 3000, 2000, 1000], [1, 1, 1, 8, 2000, 700, 300, 3000, 2000, 1000],
    [], [20, 50, 100, 200, 500, 1000, 2000], [200, 500, 1000, 1500, 3000, 5000, 10000, 20000], [], []
];
var chance = [
    [30], [30], [30],
    [20], [20], [20],
    [8, 6, 6, 25, 5, 10, 10, 15, 5, 10], [8, 6, 6, 25, 5, 10, 10, 15, 5, 10], [8, 6, 6, 25, 5, 10, 10, 15, 5, 10],
    [], [5, 10, 25, 40, 15, 4, 1], [4, 8, 20, 40, 20, 5, 2, 1], [], []
];
var cost = [
    300, 700, 1200,
    800, 1500, 1500,
    1000, 1000, 1000,
    250, 150, 1000, 400, 1200
];
var garant_id_in_type = [ // Номер в списке shop_item_type, отвечающий за гарантированный приз
    0, 0,
];
var garant_num = [ // Кол-во открытий гарантированного приза
    0, 0,
];


function show_shop_item_info(element = document.getElementsByClassName("item")[0]) {
    select = element.getElementsByClassName("item_image")[0].id;
    document.getElementById("item_icon_left_menu").style.backgroundImage = "url(shop_images/" + shop_image[select] + ".png)";
    document.getElementById("gold_sum").innerHTML = cost[select];

        //  Отображения списка бонусов предмета
    elements_for_remove = document.getElementsByClassName("item_tr");
    for(var i = 0; i < elements_for_remove.length;) {
        elements_for_remove[i].remove();
    }
    for(var i = 0; i < shop_item_type[select].length; i++) {
        let container = document.createElement("tr");
        container.className = "item_tr";

        let shop_image = document.createElement("td");
        shop_image.style.width = "50px";
        shop_image.style.height = "40px";
        if (shop_item_type[select][i] == 0) {
            shop_image.style.backgroundImage = "url(crystal.png)";
        }
        else if (shop_item_type[select][i] == 1){
            shop_image.style.backgroundImage = "url(Gold.png)";
        }
        else if (shop_item_type[select][i] == 2) {
            shop_image.style.height = "23px";
            shop_image.style.border = "4px solid";
            shop_image.style.borderRadius = "10%";
            if(select == 0) {
                shop_image.style.borderColor = "rgba(25, 65, 245, 0.8)";
            }
            else if(select == 1) {
                shop_image.style.borderColor = "rgba(25, 245, 80, 0.8)";
            }
            else if(select == 2) {
                shop_image.style.borderColor = "rgba(193, 40, 255, 0.8)";
            }

            shop_image.style.backgroundImage = "url(items/unknow_item.png)";
        }
        else if (shop_item_type[select][i] == 3){
            shop_image.style.backgroundImage = "url(craft_images/sapphire.png)";
        }
        else if(shop_item_type[select][i] < 10) {
            shop_image.style.backgroundImage = "url(companion_images/" + companion_name_eng[shop_item_type[select][i]-4] + ".jpg)";
        }
        else if(shop_item_type[select][i] < 20) {
            shop_image.style.backgroundImage = "url(hero_images/" + hero_name_eng[shop_item_type[select][i]-10] + ".jpg)";
        }

        shop_image.style.backgroundSize = "100%";
        shop_image.style.backgroundRepeat = "no-repeat";
        container.appendChild(shop_image);

        let new_shop_number = document.createElement("td");
        if(shop_item_type[select][i] > 3 && shop_item_type[select][i] < 20) {
            new_shop_number.innerHTML = "";
        }
        else {
            new_shop_number.innerHTML = shop_item_num[select][i];
        }
        container.appendChild(new_shop_number);

        let new_shop_chance = document.createElement("td");
        new_shop_chance.innerHTML = chance[select][i] + "%";
        container.appendChild(new_shop_chance);
        document.getElementById("hero_attribute").appendChild(container);
    }
}


function create_shop_list() {
    let element = document.getElementById("main_content");
    for(var i = 0; i < shop_name.length; i++) {
        let container = document.createElement("div");
        container.className = "item";
        container.addEventListener('click',
            function () {
                show_shop_item_info(this);
        });

        switch(rarity[i]) {
            case 1:
                container.style.backgroundColor = "rgba(25, 65, 245, 0.5)";
                break;
            case 2:
                container.style.backgroundColor = "rgba(25, 245, 80, 0.5)";
                break;
            case 3:
                container.style.backgroundColor = "rgba(193, 40, 255, 0.5)";
                break;
            case 4:
                container.style.backgroundColor = "rgba(255, 170, 15, 0.5)";
                break;
            case 5:
                container.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
                break;
            default:
                container.style.backgroundColor = "rgba(225, 225, 225, 0.5)";
                break;
        }
        let Item_image = document.createElement("div");
        Item_image.className = "item_image";
        Item_image.id = i;
        Item_image.style.backgroundImage = "url(shop_images/" + shop_image[i] + ".png)";

        let Item_name = document.createElement("div");
        Item_name.className = "item_name";
        Item_name.innerHTML = shop_name[i];

        container.appendChild(Item_image);
        container.appendChild(Item_name);

        element.append(container);
        if((i + 1) % 3 == 0 && i < 11) {
            let Item_br = document.createElement("div");
            Item_br.className = "br_element";
            element.append(Item_br);
        }
    }
}