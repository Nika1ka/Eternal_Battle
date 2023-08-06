var current_id = 0;

var star_names = ["f", "2"];
var max_lvl = [20, 10];

var sum_crystal_upgrade = [
    10, 20, 30, 40, 50,
    100, 200, 300, 400, 500,
    700, 750, 800, 850, 900,
    1500, 2000, 2500, 3000, 3500
];
var sum_gems_upgrade = [
    0, 0, 0, 0, 0,
    1, 1, 1, 1, 1,
    0, 0, 0, 0, 0,
    10, 10, 10, 10, 10,
];
var sum_galaxy_crystal_upgrade = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    2, 2, 2, 2, 2,
    5, 5, 5, 5, 5,
];

var star_names = [
    "Звезда выносливости", "Звезда силы", "Звезда проворства", "Звезда чародейства", "Звезда колдовства", "Звезда концентрации",
    "Звезда прочности", "Звезда постоянства", "Звезда воодушевления", "Звезда наставничества", "Звезда геройства", "Звезда удачи"
];
var star_bonus_names = [
    ["Здоровье", "Регенерация здоровья"], ["Урон", "Крит урон"], ["Скорость атаки", "Скорость передвижения"], ["Мана", "Регенерация маны"], ["", ""], ["", ""],
    ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]
];
var star_bonus_value = [
    [15, 0.2], [], [], [], [], [],
    [], [], [], [], [], []
];
var star_additional_5_lvl_bonus = [
    [[50, 100, 200], [1, 3, 5]], [], [], [], [], [],
    [], [], [], [], [], []
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
}

function create_item_list() {
    let element = document.getElementById("main_content");
    for(var i = 0; i < star_names.length; i++) {
        let container = document.createElement("div");
        container.className = "item";
        container.addEventListener('click',
            function () {
                show_star_info(this);
        });
        container.style.backgroundColor = "rgba(255, 170, 15, 0.5)";

        let Item_image = document.createElement("div");
        Item_image.className = "item_image";
        Item_image.id = i;
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

function show_star_info(element) {
    console.log(element.id.slice(1));
    //console.log(document.getElementsByClassName("item")[element.id.slice(1)]);
    //document.getElementById("starName").innerHTML = star_names[i];
}