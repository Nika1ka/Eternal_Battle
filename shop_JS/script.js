var hero_name_eng = ["berserk", "warrior", "necromancer", "assasin", "mage", "druid", "hunter", "demon", "healer"];
var companion_name_eng = ["elemental", "dragon", "fairy", "water_spirit", "crow"];
var craft_name_eng = ["amethyst", "ruby", "sapphire", "diamond"];

var shop_name = [
    "Сундук необычного сокровища", "Сундук редкого сокровища", "Сундук эпического сокровища",
    "Ледяной сундук", "Сундук феи", "Сундук драконида", "Особый ледяной сундук", "Особый сундук феи", "Особый сундук драконида",
    "Проклятый сундук", "Сундук света", "Сундук доблести", "Особый проклятый сундук", "Особый сундук света", "Особый сундук доблести",
    "Цветочный сундук", "Малый сундук кристаллов", "Большой сундук кристаллов", "Малый сундук самоцветов", "Большой сундук самоцветов"
];
var shop_image = [
    "1", "2", "3",
    "4", "5", "6", "4", "5", "6",
    "7", "8", "9", "7", "8", "9",
    "10", "11", "12", "13", "13"
];
var rarity = [ // 0-обычный  1-необычный  2-редкий  3-эпический  4-легендарный  5-божественный
    1, 2, 3,
    2, 4, 4, 3, 5, 5,
    4, 4, 4, 5, 5, 5,
    1, 0, 3, 1, 4
];
var shop_item_type = [ //0-кристаллы, 1-золото, 2-изумруды, 3-случайный самоцвет, 4-8-компаньон, 10-18-герой, 20-25 - предмет
    [22, 21, 20, 3, 3, 3], [23, 22, 21, 3, 3, 3], [24, 23, 22, 3, 3, 3],
    [7, 0, 0, 0, 0, 0, 0], [6, 0, 0, 0, 0, 0, 0], [5, 0, 0, 0, 0, 0, 0], [7, 0, 0, 0], [6, 0, 0, 0, 0], [5, 0, 0, 0, 0],
    [12, 13, 17, 3, 1, 1, 0, 0, 0], [11, 15, 18, 3, 1, 1, 0, 0, 0], [14, 10, 16, 3, 1, 1, 0, 0, 0], [13, 17, 3, 1, 1, 0, 0], [15, 18, 3, 1, 1, 0, 0], [10, 16, 3, 1, 1, 0, 0],
    [3, 3, 3, 1, 1, 1, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 2, 2]
];
var shop_item_num = [ // количество
    [1, 1, 1, 3, 2, 1], [1, 1, 1, 6, 4, 2], [1, 1, 1, 8, 6, 4],
    [1, 2500, 1500, 1200, 1000, 600, 200], [1, 4000, 2500, 2000, 1500, 1200, 400], [1, 4000, 2500, 2000, 1500, 1200, 400], [1, 1500, 1000, 500], [1, 3000, 2500, 2000, 1000], [1, 3000, 2500, 2000, 1000],
    [1, 1, 1, 8, 2000, 750, 3000, 2000, 1000], [1, 1, 1, 8, 2000, 750, 3000, 2000, 1000], [1, 1, 1, 8, 2000, 750, 3000, 2000, 1000], [1, 1, 10, 2500, 1500, 4000, 2500], [1, 1, 10, 2500, 1500, 4000, 2500], [1, 1, 10, 2500, 1500, 4000, 2500],
    [3, 2, 1, 500, 300, 50, 800, 500, 200, 1], [20, 50, 100, 200, 500, 1000, 2000], [200, 500, 1000, 1500, 3000, 5000, 10000, 20000], [4, 3, 2, 1, 1], [15, 12, 9, 6, 3, 5, 2]
];
var chance = [
    [1, 40, 30, 7, 15, 7], [1, 40, 30, 7, 15, 7], [1, 40, 30, 7, 15, 7],
    [25, 5, 10, 15, 25, 15, 5], [20, 5, 15, 20, 25, 10, 5], [20, 5, 15, 20, 25, 10, 5], [40, 20, 20, 20], [30, 10, 25, 25, 10], [30, 10, 25, 25, 10],
    [8, 6, 6, 25, 5, 10, 10, 15, 15], [8, 6, 6, 25, 5, 10, 10, 15, 15], [8, 6, 6, 25, 5, 10, 10, 15, 15], [15, 15, 15, 15, 10, 20, 10], [15, 15, 15, 15, 10, 20, 10], [15, 15, 15, 15, 10, 20, 10],
    [11, 11, 11, 11, 11, 11, 11, 11, 11, 1], [5, 10, 25, 40, 15, 4, 1], [4, 8, 20, 40, 20, 5, 2, 1], [18, 25, 30, 25, 2], [10, 20, 27, 25, 15, 1, 2]
];
var cost_gold = [
    350, 800, 1400,
    800, 1500, 1500, 0, 0, 0,
    1200, 1200, 1200, 0, 0, 0,
    300, 150, 1000, 450, 1300
];
var cost_emerald = [
    0, 0, 0,
    0, 0, 0, 6, 12, 12,
    0, 0, 0, 20, 20, 20,
    0, 0, 0, 0, 0
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
    if(cost_gold[select] > 0) {
        document.getElementsByClassName("gold_image")[0].style.display = "inline-block";
        document.getElementById("gold_sum").style.display = "inline-block";
        document.getElementById("gold_sum").innerHTML = cost_gold[select];
    }
    else {
        document.getElementsByClassName("gold_image")[0].style.display = "none";
        document.getElementById("gold_sum").style.display = "none";
    }
    if(cost_emerald[select] > 0) {
        document.getElementsByClassName("gold_image")[1].style.display = "inline-block";
        document.getElementById("emerald_sum").style.display = "inline-block";
        document.getElementById("emerald_sum").innerHTML = cost_emerald[select]
    }
    else {
        document.getElementsByClassName("gold_image")[1].style.display = "none";
        document.getElementById("emerald_sum").style.display = "none";
    }

        //  Отображения содержимого сундука
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
        else if (shop_item_type[select][i] == 2){
            shop_image.style.backgroundImage = "url(emerald.png)";
        }
        else if (shop_item_type[select][i] == 3){
            shop_image.style.backgroundImage = "url(craft_gem_images/sapphire.png)";
        }
        else if(shop_item_type[select][i] < 10) {
            shop_image.style.backgroundImage = "url(companion_images/" + companion_name_eng[shop_item_type[select][i]-4] + ".jpg)";
        }
        else if(shop_item_type[select][i] < 20) {
            shop_image.style.backgroundImage = "url(hero_images/" + hero_name_eng[shop_item_type[select][i]-10] + ".jpg)";
        }
        else if (shop_item_type[select][i] < 26) {
            shop_image.style.height = "23px";
            shop_image.style.border = "4px solid";
            shop_image.style.borderRadius = "10%";
            switch(shop_item_type[select][i]) {
                case 21:
                    shop_image.style.borderColor = "rgba(25, 65, 245, 0.8)";
                    break;
                case 22:
                    shop_image.style.borderColor = "rgba(25, 245, 80, 0.8)";
                    break;
                case 23:
                    shop_image.style.borderColor = "rgba(193, 40, 255, 0.8)";
                    break;
                case 24:
                    shop_image.style.borderColor = "rgba(255, 170, 15, 0.8)";
                    break;
                case 25:
                    shop_image.style.borderColor = "rgba(255, 0, 0, 0.8)";
                    break;
                default:
                    shop_image.style.borderColor = "rgba(100, 100, 100, 0.8)";
                    break;
            }
            shop_image.style.backgroundImage = "url(items/unknow_item.png)";
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
        if((i + 1) % 3 == 0 && (i != 5 && i != 11 && i != 17)) {
            let Item_br = document.createElement("div");
            Item_br.className = "br_element";
            element.append(Item_br);
        }
    }
}