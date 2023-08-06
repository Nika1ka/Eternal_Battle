var selectStar = 0;

var sum_crystal_upgrade = [
    20, 40, 60, 80, 100,
    150, 150, 150, 150, 200,
    300, 300, 300, 300, 500,
    200, 200, 200, 200, 200
];
var sum_gems_upgrade = [
    0, 0, 0, 0, 1,
    2, 2, 3, 3, 4,
    0, 0, 0, 0, 0,
    3, 3, 3, 3, 3
];
var sum_galaxy_crystal_upgrade = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    1, 1, 2, 2, 4,
    2, 2, 2, 2, 2
];

var star_names = [
    "Звезда выносливости", "Звезда силы", "Звезда проворства", "Звезда чародейства", "Звезда колдовства", "Звезда концентрации",
    "Звезда прочности", "Звезда постоянства", "Звезда воодушевления", "Звезда наставничества", "Звезда геройства", "Звезда удачи"
];
var star_bonus_names = [
    ["Здоровье", "Регенерация здоровья"], ["Урон", "Крит урон"], ["Скорость атаки", "Скорость передвижения"], ["Мана", "Регенерация маны"], ["Урон заклинаний", "Перезарядка способностей"], ["Шанс крита", "Уворот"],
    ["Защита"], ["Сопротивление магии "], ["Сопротивление эффектам"], ["Урон компаньонов", "Получаемый компаньонами урон"], ["Золото за бой", "Осколки за бой"], ["Шанс на двойные награды из сундуков"]
];
var star_bonus_value = [
    [15, 0.2], [1.5, 1], [2, 1], [8, 0.1], [0.5, -0.2], [0.25, 0.25],
    [0.4], [0.4], [0.5], [0.5, -0.5], [2, 2], [4]
];
var star_additional_5_lvl_bonus = [
    [[50, 100, 200], [1, 3, 5]], [[5, 10, 15], [0, 10, 25]], [[10, 30, 50], [5, 10, 20]], [[40, 100, 160], [0.5, 1, 2]], [[5, 10, 15], [0, -1, -3]], [[1, 2.5, 5], [1, 2.5, 5]],
    [[1, 3, 6]], [[1, 3, 6]], [[1.5, 4, 8]], [[1, 2.5, 5], [-1, -2.5, -5]], [[2.5, 6, 10], [2.5, 6, 10]], [[5, 12, 20]]
];


function getTotalCost(arr, value) {
    total_val = 0;
    for(var i = 0; i < value; i++)
        total_val += arr[i];
    return total_val;
}

function refreshStarValue() {
    value = Number(document.getElementById("starSlider").value);
    document.getElementById("slider_lvl").innerHTML = "lvl " + value;
    if(value) {
        document.getElementById("text_1").innerHTML = sum_crystal_upgrade[value - 1] + " (" + getTotalCost(sum_crystal_upgrade, this.value)+ ")";
        document.getElementById("text_2").innerHTML = sum_gems_upgrade[value - 1] + " (" + getTotalCost(sum_gems_upgrade, this.value)+ ")";
        document.getElementById("text_3").innerHTML = sum_galaxy_crystal_upgrade[value - 1] + " (" + getTotalCost(sum_galaxy_crystal_upgrade, this.value)+ ")";
    }
    else {
        document.getElementById("text_1").innerHTML = 0;
        document.getElementById("text_2").innerHTML = 0;
        document.getElementById("text_3").innerHTML = 0;
    }

    for(var i = 0; i < document.getElementsByClassName("bonus_name").length; i++) {
        document.getElementsByClassName("bonus_name")[i].innerHTML = "";
        document.getElementsByClassName("bonus_value")[i].innerHTML = "";
        if(star_bonus_names[selectStar].length > i) {
            document.getElementsByClassName("bonus_name")[i].innerHTML = star_bonus_names[selectStar][i];
            var total_bonus = star_bonus_value[selectStar][i] * value;
            if(value >= 15)
                total_bonus += star_additional_5_lvl_bonus[selectStar][i][2];
            else if(value >= 10)
                total_bonus += star_additional_5_lvl_bonus[selectStar][i][1];
            else if(value >= 5)
                total_bonus += star_additional_5_lvl_bonus[selectStar][i][0];
            document.getElementsByClassName("bonus_value")[i].innerHTML = total_bonus.toFixed(2)
        }
    }
}

function create_item_list() {
    let element = document.getElementById("main_content");
    for(var i = 0; i < star_names.length; i++) {
        let container = document.createElement("div");
        container.className = "item";
        container.addEventListener('click',
            function () {
                show_star_info(this.id);
        });
        container.style.backgroundColor = "rgba(255, 170, 15, 0.5)";

        let Item_image = document.createElement("div");
        Item_image.className = "item_image";
        container.id = i;
        Item_image.style.borderColor = "black";
        Item_image.style.backgroundColor = "rgb(221, 221, 221)";
        Item_image.style.backgroundImage = "url(stars.png)";
    
        let Item_name = document.createElement("div");
        Item_name.className = "item_name";
        Item_name.innerHTML = star_names[i];

        container.appendChild(Item_image);
        container.appendChild(Item_name);

        element.append(container);
    }
}

function show_star_info(elementId = 0) {
    selectStar = elementId;
    document.getElementById("starName").innerHTML = star_names[elementId];
    refreshStarValue();
}