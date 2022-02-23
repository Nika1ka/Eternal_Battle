var select_character = 0;

var character_name = [ // Имя персонажа
    "Скелет", "Большой скелет", "Огромный скелет", "Скелет палач", "Скелет военачальник", "Легендарные кости",
    "Живое дерево", "Проклятое дерево",
    "Призрак",
    "Лесной волчонок"
];

var attack_type = [false, false, false, false, false, false,
    false, false,
    true,
    false,
];

var hero_hp = [45, 250, 1000, 1600, 890, 2300,
    150, 180,
    100,
    65
];
var hero_hp_regen = [0, 0, 1, 3, 5.1, 1.8,
    0, 0,
    0.5,
    1.2
];
var hero_mana = [0, 0, 0, 100, 700, 1000,
    20, 10,
    30,
    5
];
var hero_mana_regen = [0, 0, 0, 1.2, 3.3, 3.7,
    0.5, 0.2, 
    1.2, 
    0
];
var hero_damage = [22, 43, 90, 150, 290, 300,
    10, 12, 
    12, 
    18
];
var hero_damage_spread = [5, 6, 15, 20, 12, 8,
    1, 1, 
    3, 
    2
];

var hero_attack_spead = [110, 120, 145, 130, 180, 155,
    85, 85, 
    80, 
    120
];
var hero_attack_range = [130, 130, 140, 160, 170, 150,
    90, 90, 
    255, 
    135
];
var hero_phis_resist = [0, 1, 2.6, 6, 8.1, 11,
    2.2, 1.7, 
    3, 
    0.2
];
var hero_magic_resist = [0, 0.5, 1.2, 1.2, 6, 8.8,
    0.5, 0, 
    -1.3, 
    0
];
var hero_status_resist = [0, 0, 0, 0, 5, 10,
    0, 0, 
    0, 
    0
];

var hero_speed = [265, 270, 280, 300, 275, 325,
    240, 240, 
    250, 
    305
];
var hero_wision_day = [1700, 1700, 2000, 2000, 2200, 2000,
    2000, 2000, 
    2000, 
    2500
];
var hero_wision_night = [1200, 1200, 1200, 1200, 1400, 1200,
    1000, 1100, 
    1500, 
    1300
];

var hero_dodge = [0, 0, 0, 0, 0, 0,
    0, 0, 
    0, 
    2
];
var hero_critical_damage = [0, 0, 20, 40, 90, 70,
    0, 0, 
    0, 
    15
];
var hero_critical_chance = [0, 0, 0, 5, 12, 6,
    0, 0, 
    0, 
    0
];

    //  Способности персонажей

var skills_name = [ // Название способности
    [],
    [],
    ["Живые кости"],
    ["Казнь"],
    ["Призыв биться", "Аура военачальника", "Проклятье смерти"],
    ["Ярость", "Регенерация"],
    ["Сила жизни"],
    ["Проклятие"],
    ["Холодное касание"],
    []
];
var skills_info = [ // Описание способности
    [],
    [],
    ["После смерти распадается на 8 обычных скелетов"],
    ["Наносит урон одному противнику с 80% вампиризмом"],
    ["Призывает 8-15 обычных скелетов и 1-3 больших. Призыванные скелеты получают +40 ед. скорости передвижения на 15 секунд", "Все союзники в радиусе 250 ед. получают +20% крит урона и +40 скорости атаки", "Каждый убитый союзник в радиусе 220 ед. наносит убийце 100 ед. чистого урона и оглушает на 1 секунду. Урон на 70% меньше если цель сражается в ближнем бою"],
    ["Каждый 1% потерянного здоровья увеличивает скорость атаки и передвижения на 1 ед.", "Персонаж увеличивает сопротивление магии и броню на 50% (20 ед.), а регенерацию здоровья на 65 ед. На время действия способности персонаж перемещается на 80 ед. медленнее"],
    ["После смерти исцеляет всех союзников в радиусе 80 ед. на 40 ед. здоровья"],
    ["Убийца получает 15 ед. урона в секунду. Не складывается с подобными эффектами"],
    ["Атаки персонажа замедляют на 5%. Складывается до трёх раз"],
    []
];

var skills_damage = [ // Урон
    [],
    [],
    [0],
    [250],
    [0, 0, 100],
    [0, 0],
    [0],
    [0],
    [0],
    []
];
var skills_damage_type = [ // Тип урона (0 - чистый, 1 - магический, 2 - физический)
    [],
    [],
    [0],
    [2],
    [0, 0, 0],
    [0, 0],
    [0],
    [1],
    [0],
    []
]
var skills_duration = [ // Длительность
    [],
    [],
    [0],
    [0],
    [15, 0, 1],
    [0, 8],
    [0],
    [3],
    [1.3],
    []
];
var skills_range = [ // Дальность примнения (или радиус)
    [],
    [],
    [0],
    [210],
    [0, 250, 220],
    [0, 0],
    [0],
    [0],
    [0],
    []
];
var skills_cd = [ // Перезарядка
    [],
    [],
    [0],
    [24],
    [50, 0, 0],
    [0, 42],
    [0],
    [0],
    [0],
    []
];
var skills_mana = [ // Манакост
    [],
    [],
    [0],
    [30],
    [150, 0, 0],
    [0, 85],
    [0],
    [0],
    [0],
    []
];
var skills_type = [ // Тип способности (0 - пассивная, 1 - активируемая, 2 - автоматическая, 3 - аура)
    [],
    [],
    [2],
    [1],
    [1, 3, 3],
    [0, 1],
    [2],
    [2],
    [0],
    []
];

var character_loot = [
    "", "", "", "", "", "",
    "", "",
    "",
    ""
];

var character_rarity = [ // 0-обычный  1-необычный  2-редкий  3-эпический  4-легендарный  5-уникальный(босс)
    0, 1, 2, 3, 4, 5, 0, 0, 0, 0
];

function show_character_info(element = document.getElementsByClassName("character")[0]) {    //  Определять какой объект вызвал за счёт координат мыши
    select_character = element.getElementsByClassName("character_name")[0].id;
    for(var i = 0; i < skills_name[select_character].length; i++) {
        document.getElementsByClassName("hero_skill")[i].style.visibility = "visible";
        /*document.getElementsByClassName("hero_skill")[i].style.backgroundImage = "url(unknow_skill.png);";*/
    }
    for(var i = skills_name[select_character].length; i < 3; i++) {
        document.getElementsByClassName("hero_skill")[i].style.visibility = "hidden";
    }
    document.querySelector("h1").innerHTML = "(" + select_character + ") " + character_name[select_character];
    if(attack_type[select_character]) {
        document.getElementById("attack_type").innerHTML = "Дальний бой";
    }
    else {
        document.getElementById("attack_type").innerHTML = "Ближний бой";
    }
    document.getElementById("table_hp").innerHTML = hero_hp[select_character] + " +" + hero_hp_regen[select_character];
    document.getElementById("table_mana").innerHTML = hero_mana[select_character] + " +" + hero_mana_regen[select_character];
    document.getElementById("table_damage").innerHTML = hero_damage[select_character] + "-" + (hero_damage[select_character]+hero_damage_spread[select_character]);
    document.getElementById("table_attack_spead").innerHTML = hero_attack_spead[select_character];

    document.getElementById("table_attack_range").innerHTML = hero_attack_range[select_character];
    document.getElementById("table_phis_resist").innerHTML = hero_phis_resist[select_character] + " (" + Math.trunc((0.05*hero_phis_resist[select_character])/(1+0.05*Math.abs(hero_phis_resist[select_character]))*100) + "%)";
    document.getElementById("table_magic_resist").innerHTML = hero_magic_resist[select_character] + " (" + Math.trunc((0.05*hero_magic_resist[select_character])/(1+0.05*Math.abs(hero_magic_resist[select_character]))*100) + "%)";
    document.getElementById("table_status_resist").innerHTML = hero_status_resist[select_character] + " (" + Math.trunc((0.05*hero_status_resist[select_character])/(1+0.05*Math.abs(hero_status_resist[select_character]))*100) + "%)";
    document.getElementById("table_speed").innerHTML = hero_speed[select_character];
    document.getElementById("table_wision").innerHTML = hero_wision_day[select_character] + "/" + hero_wision_night[select_character];
    document.getElementById("table_dodge").innerHTML = hero_dodge[select_character] + "%";
    document.getElementById("table_critical_damage").innerHTML = (hero_critical_damage[select_character] + 120) + "%";
    document.getElementById("table_critical_chance").innerHTML = (hero_critical_chance[select_character] + 5) + "%";
}