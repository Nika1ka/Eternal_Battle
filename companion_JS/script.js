var hero_name = ["Элементаль", "Дракон", "Фея", "Дух воды", "Ворон"];
var hero_name_eng = ["elemental", "dragon", "fairy", "water_spirit", "crow"];

var hero_mana = [10, 100, 120, 40, 60];
var hero_mana_regen = [0.1, 0.8, 1.2, 0.5, 0.5];
var hero_damage = [20, 26, 8, 15, 13];
var hero_damage_spread = [10, 7, 4, 6, 6];

var hero_attack_spead = [95, 110, 110, 105, 120];
var hero_attack_range = [600, 700, 650, 650, 450];
var hero_status_resist = [0, -5, 2.4, 0, 0];

var hero_speed = [300, 290, 320, 315, 360];
var hero_wision_day = [300, 350, 300, 300, 450];
var hero_wision_night = [300, 350, 300, 300, 450];

var hero_critical_damage = [25, 0, 0, 0, 0];
var hero_critical_chance = [0, 0, 0, 0, 4];

var select_hero = 0;

var skills_name = [ // Название способности
    ["Пронзание", "Кристаллизация"],
    ["Дыхание дракона", "Пламя"],
    ["Целебный свет", "Благословение фей"],
    ["Водоворот", "Ледяные воды"],
    ["Рывок", "Полёт птицы"]
];
var skills_info = [ // Описание способности
    ["Каждая атака с шансом 10% оглушит цель и нанесёт дополнительный урон", "Атаки компаньона сжигают 15 ед. маны цели и временно снижают её регенерацию на 40%"],
    ["Атаки героя наносят дополнительный урон противникам в радиусе 40 ед. вокруг цели атаки", "Заставляет выбранного противника гореть в течении 4-х секунд, получая периодический урон"],
    ["Мгновенно исцеляет героя на 25 ед.", "Увеличивает скорость атаки героя на 25 ед., а уворот на 10%"],
    ["С шансом 10% атака применяет к цели оцепинение и нанесёт дополнительный урон", "Атаки компаньона замедляют противников на 70 ед."],
    ["Компаньон бросается на противника, нанося значительный урон. После применения способности компаньон оглушается на 2 секунды", "Временно увеличивает скорость передвижения героя на 50 ед., а дальность обзора на 400 ед."]
];
var skills_damage = [ // Урон
    [15, 0],
    [5, 15],
    [0, 0],
    [10, 0],
    [50, 0]
];
var skills_damage_type = [ // Тип урона (0 - чистый, 1 - магический, 2 - физический)
    [2, 0],
    [1, 0],
    [0, 0],
    [0, 0],
    [2, 0]
];
var skills_duration = [ // Длительность
    [1, 2],
    [0, 4],
    [0, 5],
    [1.2, 0.7],
    [2, 5]
];
var skills_range = [ // Дальность примнения
    [0, 0],
    [0, 800],
    [0, 0],
    [0, 0],
    [650, 0]
];
var skills_cd = [ // Перезарядка
    [0, 0],
    [0, 8],
    [12, 18],
    [0, 0],
    [16, 15]
];
var skills_mana = [ // Манакост
    [0, 0],
    [0, 25],
    [20, 25],
    [0, 0],
    [12, 15]
];

function change_hero (hero_id = 0) {
    select_hero = hero_id;
    document.querySelector("h1").innerHTML = hero_name[hero_id];

    document.getElementById("attack_type").innerHTML = "Дальний бой"
    document.getElementById("hero_portrait_left_menu").style.backgroundImage = "url(companion_images/" + hero_name_eng[hero_id] + ".jpg)";
    document.getElementsByClassName("hero_skill")[0].style.backgroundImage = "url(companion_skills/" + hero_name_eng[hero_id] + "_1.png)";
    document.getElementsByClassName("hero_skill")[1].style.backgroundImage = "url(companion_skills/" + hero_name_eng[hero_id] + "_2.png)";

    document.getElementById("table_mana").innerHTML = hero_mana[hero_id] + " +" + hero_mana_regen[hero_id];
    document.getElementById("table_damage").innerHTML = hero_damage[hero_id] + "-" + (hero_damage[hero_id]+hero_damage_spread[hero_id]);
    document.getElementById("table_attack_spead").innerHTML = hero_attack_spead[hero_id];

    document.getElementById("table_status_resist").innerHTML = hero_status_resist[hero_id] + " (" + Math.trunc((0.05*hero_status_resist[hero_id])/(1+0.05*Math.abs(hero_status_resist[hero_id]))*100) + "%)";
    document.getElementById("table_attack_range").innerHTML = hero_attack_range[hero_id];
    document.getElementById("table_speed").innerHTML = hero_speed[hero_id];
    document.getElementById("table_wision").innerHTML = hero_wision_day[hero_id] + "/" + hero_wision_night[hero_id];
    document.getElementById("table_critical_damage").innerHTML = (hero_critical_damage[hero_id] + 120) + "%";
    document.getElementById("table_critical_chance").innerHTML = (hero_critical_chance[hero_id] + 5) + "%";
}

function show_skill(skill = 1) {
    document.getElementById("info_ability").style.visibility = "visible";
    document.getElementById("ability_name").innerHTML = skills_name[select_hero][skill-1];
    document.getElementById("info_ability").style.top = 330 + "px";
    document.getElementById("info_ability").style.left = document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().left + document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().width + 10 + "px";
    document.getElementById("ability_about").innerHTML = skills_info[select_hero][skill-1];
    if(skill == 2) {
        document.getElementById("ability_about").innerHTML += "<br><br>Способность изначально недоступна. Разблокируется в ветке навыков компаньона";
    }
    if(skills_damage[select_hero][skill-1]) {
        document.getElementById("hidden1").style.display = "table-row";
        document.getElementById("ability_damage").innerHTML = "Урон: " + skills_damage[select_hero][skill-1];
        if(skills_damage_type[select_hero][skill-1] == 1) {
            document.getElementById("ability_damage_type").innerHTML = "Тип: магический";
        }
        else if(skills_damage_type[select_hero][skill-1] == 2) {
            document.getElementById("ability_damage_type").innerHTML = "Тип: физический";
        }
        else {
            document.getElementById("ability_damage_type").innerHTML = "Тип: чистый";
        }
    }
    else {
        document.getElementById("hidden1").style.display = "none";
        document.getElementById("ability_damage").innerHTML = ""
    }

    if(skills_duration[select_hero][skill-1]) {
        document.getElementById("hidden2").style.display = "table-row";
        document.getElementById("skills_duration").innerHTML = "Длительность: " + skills_duration[select_hero][skill-1] + " cек.";
    }
    else {
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("skills_duration").innerHTML = ""
    }

    if(skills_range[select_hero][skill-1]) {
        document.getElementById("hidden3").style.display = "table-row";
        document.getElementById("skills_range").innerHTML = "Дальность примнения: " + skills_range[select_hero][skill-1] + " ед.";
    }
    else {
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("skills_range").innerHTML = ""
    }

    if(skills_cd[select_hero][skill-1]) {
        document.getElementById("ability_cd").style.display = "table-cell";
        document.getElementById("ability_cd").innerHTML = "Перезарядка: " + skills_cd[select_hero][skill-1] + " cек.";
    }
    else {
        document.getElementById("ability_cd").style.display = "none";
        document.getElementById("ability_cd").innerHTML = ""
    }
    if(skills_mana[select_hero][skill-1]) {
        document.getElementById("ability_mana").style.display = "table-cell";
        document.getElementById("ability_mana").innerHTML = "Мана: " + skills_mana[select_hero][skill-1];
    }
    else {
        document.getElementById("ability_mana").style.display = "none";
        document.getElementById("ability_mana").innerHTML = ""
    }
}

function hidden_skill() {
    document.getElementById("info_ability").style.visibility = "hidden";
}

var skill_tree = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 2, 0, 1, 0],
];

function open_skill_tree () {
    var table = document.getElementById("skill_tree");
    for(i = 0; i < 7; i++) {
        for(j = 0; j < 7; j++) {
            if(skill_tree[i][j] == 1) {
                table.rows[i].cells[j].style.visibility = "visible";
            }
            else if(skill_tree[i][j] == 2) {
                table.rows[i].cells[j].style.visibility = "visible";
                table.rows[i].cells[j].style.borderRadius = "50%";
                table.rows[i].cells[j].style.border = "2px solid rgba(255, 0, 0, 0.8)";
                table.rows[i].cells[j].style.backgroundColor = "rgba(255, 0, 0, 0.8)";
                table.rows[i].cells[j].style.margin = "1px";
            }
            else {
                table.rows[i].cells[j].style.visibility = "hidden";
            }
        }
    }
}

var padding_width = 35, padding_height = 35,
const_width = 74.91+padding_width, const_height = 74.91+padding_height;

function draw() {
    var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");
    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.beginPath();

    context.moveTo(const_width*3.5 + padding_width/2, const_height*0.5 + padding_height/2);
    context.lineTo(const_width*3.5 + padding_width/2, const_height*6.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*0.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*1.5 + padding_height/2);
    context.moveTo(const_width*3.5 + padding_width/2, const_height*0.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*1.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*1.5 + padding_height/2);
    context.lineTo(const_width*0.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.moveTo(const_width*3.5 + padding_width/2, const_height*1.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*4.5 + padding_height/2);

    context.moveTo(const_width*1.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.moveTo(const_width*5.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*4.5 + padding_height/2);

    context.moveTo(const_width*1.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*1.5 + padding_width/2, const_height*6.5 + padding_height/2);
    context.moveTo(const_width*5.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*5.5 + padding_width/2, const_height*6.5 + padding_height/2);

    context.moveTo(const_width*0.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.lineTo(const_width*0.5 + padding_width/2, const_height*5.5 + padding_height/2);
    context.moveTo(const_width*6.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*5.5 + padding_height/2);

    context.moveTo(const_width*2.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*5.5 + padding_height/2);
    context.moveTo(const_width*4.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*5.5 + padding_height/2);

    context.closePath();
    context.stroke();
}

function hidden_tree_skill() {
    document.getElementById("info_block").style.visibility = "hidden";
}

var position_y = [
    1,
    2, 2, 2,
    3, 3, 3,
    4, 4, 4,
    5, 5, 5, 5, 5, 5, 5,
    6, 6, 6, 6, 6, 6,
    7, 7, 7
];
var position_x = [
    4,
    3, 4, 5,
    3, 4, 5,
    2, 4, 6,
    1, 2, 3, 4, 5, 6, 7,
    1, 2, 3, 5, 6, 7,
    2, 4, 6
];

function show_tree_skill(skill_number) {
    document.getElementById("info_block").style.visibility = "visible";
    document.getElementById("info_block").style.top = const_height*(position_y[skill_number]+0.5) + padding_height/2 -40 + "px";
    document.getElementById("info_block").style.left = const_width*(position_x[skill_number]+0.5) + padding_width/2 + 215 + "px";
    if(skill_number == 24) {
        document.getElementById("skill_tree_name").innerHTML = skills_name[select_hero][1];
        document.getElementById("skill_tree_about").innerHTML = "Разблокирует вторую способность компаньона";
    }
    else {
        document.getElementById("skill_tree_name").innerHTML = skill_tree_name[select_hero][skill_number];
        document.getElementById("skill_tree_about").innerHTML = skill_tree_about[select_hero][skill_number];
        document.getElementById("skill_tree_bonus").innerHTML = skill_tree_bonus[select_hero][skill_number];
        document.getElementById("skill_tree_bonus_about").innerHTML = skill_tree_bonus_about[select_hero][skill_number];
    }
    document.getElementById("skill_tree_cost").innerHTML = "Стоимость изучения: " + skill_tree_cost[skill_number];
}

function change_tree() {
    var table = document.getElementById("skill_tree");
    var counter = 0;
    for(i = 0; i < 7; i++) {
        for(j = 0; j < 7; j++) {
            if(skill_tree[i][j] == 1) {
                if(skill_tree_about[select_hero][counter] != "" && skill_tree_image[select_hero][counter] == "") {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/temp.png)";
                }
                else {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/" + skill_tree_image[select_hero][counter] + ")";
                }
                counter++;
            }
            else if(skill_tree[i][j] == 2) {
                table.rows[i].cells[j].style.backgroundImage = "url(companion_skills/" + hero_name_eng[select_hero] + "_2" + ".png)";
                counter++;
            }
        }
    }
}