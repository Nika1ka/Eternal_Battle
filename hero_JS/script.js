var hero_name = ["Берсерк", "Воин", "Некромант", "Убийца", "Маг", "Друид", "Охотник", "Демон", "Лекарь",];
var hero_name_eng = ["berserk", "warrior", "necromancer", "assasin", "mage", "druid", "hunter", "demon", "healer"];
var attack_type = [false, false, true, false, true, true, true, false, true];

var hero_hp = [550, 470, 280, 420, 345, 480, 300, 600, 330];
var hero_hp_regen = [4.6, 3.2, 1.7, 3.2, 2, 2.3, 1.9, 1.1, 1.3];
var hero_mana = [190, 275, 430, 245, 480, 380, 250, 130, 360];
var hero_mana_regen = [1.3, 1.6, 4.2, 2.3, 4.6, 3, 3.1, 0.8, 2.7];
var hero_damage = [52, 44, 25, 45, 32, 33, 44, 65, 36];
var hero_damage_spread = [8, 5, 5, 3, 4, 5, 11, 14, 6];

var hero_attack_spead = [140, 125, 105, 140, 120, 110, 125, 115, 120];
var hero_attack_range = [130, 130, 430, 115, 365, 290, 400, 130, 320];
var hero_phis_resist = [1.3, 4.5, 0.8, 1.4, 1, 0.9, 0.5, 2.3, 0.2];
var hero_magic_resist = [3.4, 3.8, 4.7, 2.9, 2, 1.4, 0.5, -5, 1.2];
var hero_status_resist = [0, 0, 0, 0, 0, 0, 0, 0, 1.2];

var hero_speed = [300, 285, 295, 330, 300, 305, 330, 280, 300];
var hero_wision_day = [2000, 2000, 1800, 2000, 2000, 2000, 2200, 1500, 1800];
var hero_wision_night = [1000, 1000, 1200, 1200, 1000, 1000, 1100, 1800, 900];

var hero_dodge = [0, 0, 0, 2, 0, 0, 5, 0, 0];
var hero_critical_damage = [0, 0, 0, 10, 0, 0, 0, 10, 0];
var hero_critical_chance = [0, 0, 0, 2, 0, 0, 1, 0, 0];

var select_hero = 0;

var skills_name = [ // Название способности
    ["Ярость", "Рывок", "Жажда крови"],
    ["Тяжёлый удар", "Выпад", "Ярость боя"],
    ["Призрачный марш", "Ледяной шпиль", "Воскрешение"],
    ["Исчезновение", "Удар в спину", "Ночной охотник"],
    ["Магические стрелы", "Магический плащ", "Метеорит"],
    ["Вызов зверя", "Лоза", "Древо жизни"],
    ["Ловушка", "Мощный выстрел", "Метка охотника"],
    ["Клинки демона", "Астрал", "Предвестник ночи"],
    ["Рука Бога", "Божественный щит", "Зеркало души"]
];
var skills_info = [ // Описание способности
    ["Увеличивает наносимый и получаемый урон на 20%. На время действия эффекта герой получает 15% вампиризма.", "Бросается в указанную область, нанося урон всем в радисе 75 ед.", "Увеличивает вампиризм и урон на 40%. Каждый побеждённый под действием эффекта враг увеличивает урон на 10% на 15 секунд."],
    ["Герой увеличивая урон следующих 4-х ударов на 40%, но с уменьшенной на 30 ед. скоростью атаки.", "Атакует врагов перед собой, нанося урон в небольшой области (100 ед. перед собой).", "Повышает сопротивление физическому урону на 10% (2.4 ед.). Каждый полученный удар увеличивает сопротивление ещё на 1% (0.3 ед.) до конца действия способности, но не более 10-ти раз."],
    ["Каждый побеждённый противник накапливает заряды этой способности. По активации призывает призраков в зависимости от накопленных душ.<br>Всегда будет призван минимум один призрак.<br>Одновременно может быть до 20-ти зарядов способности", "Создаёт кристалл изо льда, который ежесекундно атакует и замедляет всех врагов в радиусе 120 ед. Кристалл имеет 300 ед. здоровья. Замедляет на 12% на 0.5 секунды.", "После активации способности герой теряет 10 ед. маны каждую секунду, но воскрешает всех вражеских существ, которые погибнут от атаки героя. Воскрешённые существа имеют те же способности, но лишь 20% базовых характеристик.<br>Повторная активация способности отключает её действие.<br>Действие способности прекращается если у героя недостаточно маны."],
    ["Герой ненадолго ускользает от противников. Под действием способности невозможно атаковать, а герой получает бонусные 50 ед. скорости.", "Герой прыгает за спину противника, нанося 220% урона от своей атаки.", "Герой призывает короткую ночь, увеличивая уворот на 8% и скорость атаки на 40 ед."],
    ["Запускает 6 магических стрел в случайных врагов в радиусе 280 вокруг героя.", "Окружает себя защитной магией, поглощая до 55 ед. входящего урона и увеличивая сопротивление магии на 15% (3.8 ед.).", "Призывает метеорит, наносящий огромный урон по области радиусом 160 ед. Перед падением метеорита есть задержка в 1.5 секунды."],
    ["Призывает медведя-помощника, сражающего на стороне героя. Одновременно может существовать не более одного медведя.<br>Здоровье медведя: 450 ед.<br>Урон медведя: 25-30 ед.<br>Скорость атаки медведя: 80 ед.<br>Скорость передвижения медведя: 300 ед.<br>Сопротивление медведя: 1 ед.", "Окутывает область под героем терновником, который замедляет проходящих рядом врагов и наносит им урон. Замедляет на 8% всех в области радиусом 160.", "Герой взывает к древу жизни, которое остаётся на поле боя, давая 25% (6.8 ед.) сопротивления эффектам и 20 ед. регенерации здоровья и маны всем союзникам в радиусе 180. Дерево имеет 800 ед. здоровья"],
    ["Запускает сеть в указанную точку, оглушая всех противников в радиусе 120 на 2.4 секунды.", "После небольшой подготовки запускает стрелу в указанном направлении, нанося урон всем противникам по траектории выстрела. Ширина выстрела: 80 ед.", "Отмечает ближайшего к герою врага в радиусе 500, после чего герой не сможет сменить цель для атаки, но получит +30% урона по этой цели. Если цель погибнет под действием способности - герой получит 2% уклонения и 5% дополнительного урона на 20 секунд.<br>Получение нового эффекта обновляет длительность предыдущих.<br>Эффекты складываются до 9-ти раз.<br>Повторное использование способности отменяет фиксацию цели."],
    ["Пассивно увеличивают урон на 2 ед. и вампиризм на 1%. за каждого убитого противника (не более 15-ти). Активация увеличивает эффекты бонусов втрое, но требует 1% текущего здоровья за каждый эффект. После смерти герой теряет 50% накопленных эффектов способности.", "Изгоняет ближайшего противника в радиусе 230 на 3 секунды. После его возвращения герой получает лечение в размере 50% от полученного целью в астрале урона. Если противников рядом нет - герой восстанавливает 3% здоровья в секунду. Длительность регенерации равна длительности навыка", "Ночью герой получает дополнительные 40% критического урона и 4% шанса крита. Активировав способность герой временно обратит мир во тьму."],
    ["Замедляет передвижение и скорость атаки всех противников в радиусе 240 на 25%. Герой и союзники получают +10 ед. скорости передвижения и атаки за каждого задетого противника.", "Накладывает на себя и союзников в радиусе 150 божественный щит, восстанавливающий 10 ед. здоровья в секунду. Если здоровье полное - восстанавливается мана.", "Наносит урон случайному противнику в радиусе 500 ед. и создаёт его копию. Копия имеет 80% здоровья оригинала и 40% прочих атрибутов.<br>Копия сильного существа или босса на 50% слабее.<br>После окончания действия способности копия исчезает."]
];
var skills_damage = [ // Урон
    [0, 110, 0],
    [0, 85, 0],
    [0, 30, 0],
    [0, 0, 0],
    [25, 0, 300],
    [0, 12, 0],
    [50, 80, 0],
    [0, 30, 0],
    [0, 0, 160]
];
var skills_damage_type = [ // Тип урона (0 - чистый, 1 - магический, 2 - физический)
    [0, 2, 0],
    [0, 2, 0],
    [0, 1, 0],
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0],
    [1, 2, 0],
    [0, 0, 0],
    [0, 0, 0]
]
var skills_duration = [ // Длительность
    [8, 0, 15],
    [7, 0, 40],
    [15, 18, 0],
    [2, 0, 6],
    [0, 17, 0],
    [95, 8, 15],
    [2.4, 0.9, 20],
    [8, 3, 20],
    [3.5, 8, 45]
];
var skills_range = [ // Дальность примнения
    [0, 220, 0],
    [0, 0, 0],
    [0, 300, 0],
    [0, 180, 0],
    [0, 0, 500],
    [0, 0, 180],
    [280, 350, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var skills_cd = [ // Перезарядка
    [22, 5.5, 60],
    [11, 6, 60],
    [35, 25, 20],
    [8, 4.5, 38],
    [14, 34, 60],
    [60, 6, 100],
    [11, 7.5, 5],
    [22, 14, 150],
    [24, 12, 40]
];
var skills_mana = [ // Манакост
    [20, 25, 65],
    [25, 30, 85],
    [115, 85, 30],
    [40, 32, 60],
    [75, 70, 180],
    [100, 25, 250],
    [40, 55, 25],
    [12, 25, 45],
    [80, 50, 155]
];

function change_hero (hero_id = 0) {
    select_hero = hero_id;
    document.querySelector("h1").innerHTML = hero_name[hero_id];
    if(attack_type[hero_id]) {
        document.getElementById("attack_type").innerHTML = "Дальний бой";
    }
    else {
        document.getElementById("attack_type").innerHTML = "Ближний бой";
    }
    document.getElementById("hero_portrait_left_menu").style.backgroundImage = "url(hero_images/" + hero_name_eng[hero_id] + ".jpg)";
    document.getElementsByClassName("hero_skill")[0].style.backgroundImage = "url(hero_skills/" + hero_name_eng[hero_id] + "_1.png)";
    document.getElementsByClassName("hero_skill")[1].style.backgroundImage = "url(hero_skills/" + hero_name_eng[hero_id] + "_2.png)";
    document.getElementsByClassName("hero_skill")[2].style.backgroundImage = "url(hero_skills/" + hero_name_eng[hero_id] + "_3.png)";

    document.getElementById("table_hp").innerHTML = hero_hp[hero_id] + " +" + hero_hp_regen[hero_id];
    document.getElementById("table_mana").innerHTML = hero_mana[hero_id] + " +" + hero_mana_regen[hero_id];
    document.getElementById("table_damage").innerHTML = hero_damage[hero_id] + "-" + (hero_damage[hero_id]+hero_damage_spread[hero_id]);
    document.getElementById("table_attack_spead").innerHTML = hero_attack_spead[hero_id];

    document.getElementById("table_attack_range").innerHTML = hero_attack_range[hero_id];
    document.getElementById("table_phis_resist").innerHTML = hero_phis_resist[hero_id] + " (" + Math.trunc((0.05*hero_phis_resist[hero_id])/(1+0.05*Math.abs(hero_phis_resist[hero_id]))*100) + "%)";
    document.getElementById("table_magic_resist").innerHTML = hero_magic_resist[hero_id] + " (" + Math.trunc((0.05*hero_magic_resist[hero_id])/(1+0.05*Math.abs(hero_magic_resist[hero_id]))*100) + "%)";
    document.getElementById("table_status_resist").innerHTML = hero_status_resist[hero_id] + " (" + Math.trunc((0.05*hero_status_resist[hero_id])/(1+0.05*Math.abs(hero_status_resist[hero_id]))*100) + "%)";
    document.getElementById("table_speed").innerHTML = hero_speed[hero_id];
    document.getElementById("table_wision").innerHTML = hero_wision_day[hero_id] + "/" + hero_wision_night[hero_id];
    document.getElementById("table_dodge").innerHTML = hero_dodge[hero_id] + "%";
    document.getElementById("table_critical_damage").innerHTML = (hero_critical_damage[hero_id] + 120) + "%";
    document.getElementById("table_critical_chance").innerHTML = (hero_critical_chance[hero_id] + 5) + "%";
}

function show_skill(skill = 1) {
    document.getElementById("info_ability").style.visibility = "visible";
    document.getElementById("ability_name").innerHTML = skills_name[select_hero][skill-1];
    document.getElementById("info_ability").style.top = 330 + "px";
    document.getElementById("info_ability").style.left = document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().left + document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().width + 10 + "px";
    document.getElementById("ability_about").innerHTML = skills_info[select_hero][skill-1];
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
    document.getElementById("ability_cd").innerHTML = "Перезарядка: " + skills_cd[select_hero][skill-1] + " cек.";
    document.getElementById("ability_mana").innerHTML = "Мана: " + skills_mana[select_hero][skill-1];
}

function hidden_skill() {
    document.getElementById("info_ability").style.visibility = "hidden";
}

var skill_tree = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1],
    [0, 1, 1, 2, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 2, 1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1]
];

function open_skill_tree () {
    var table = document.getElementById("skill_tree");
    for(i = 0; i < 11; i++) {
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
    context.lineTo(const_width*3.5 + padding_width/2, const_height*9.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*0.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*1.5 + padding_width/2);

    context.moveTo(const_width*2.5 + padding_width/2, const_height*1.5 + padding_width/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*2.5 + padding_width/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*1.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*2.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*1.5 + padding_height/2);
    context.lineTo(const_width*5.5 + padding_width/2, const_height*2.5 + padding_height/2);

    context.moveTo(const_width*5.5 + padding_width/2, const_height*2.5 + padding_height/2);
    context.lineTo(const_width*5.5 + padding_width/2, const_height*5.5 + padding_height/2);

    context.moveTo(const_width*5.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*4.5 + padding_height/2);

    context.moveTo(const_width*5.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*4.5 + padding_height/2);

    context.moveTo(const_width*6.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*5.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*3.5 + padding_height/2);
    context.lineTo(const_width*1.5 + padding_width/2, const_height*5.5 + padding_height/2);

    context.moveTo(const_width*2.5 + padding_width/2, const_height*4.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*5.5 + padding_height/2);


    context.moveTo(const_width*3.5 + padding_width/2, const_height*5.5 + padding_height/2);
    context.lineTo(const_width*0.5 + padding_width/2, const_height*8.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*5.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*8.5 + padding_height/2);

    context.moveTo(const_width*2.5 + padding_width/2, const_height*6.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*7.5 + padding_height/2);

    context.moveTo(const_width*4.5 + padding_width/2, const_height*6.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*7.5 + padding_height/2);

    context.moveTo(const_width*0.5 + padding_width/2, const_height*9.5 + padding_height/2);
    context.lineTo(const_width*0.5 + padding_width/2, const_height*10.5 + padding_height/2);
    context.moveTo(const_width*6.5 + padding_width/2, const_height*9.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*10.5 + padding_height/2);

    context.moveTo(const_width*1.5 + padding_width/2, const_height*8.5 + padding_height/2);
    context.lineTo(const_width*0.5 + padding_width/2, const_height*9.5 + padding_height/2);
    context.moveTo(const_width*5.5 + padding_width/2, const_height*8.5 + padding_height/2);
    context.lineTo(const_width*6.5 + padding_width/2, const_height*9.5 + padding_height/2);

    context.moveTo(const_width*1.5 + padding_width/2, const_height*7.5 + padding_height/2);
    context.lineTo(const_width*1.5 + padding_width/2, const_height*10.5 + padding_height/2);
    context.moveTo(const_width*5.5 + padding_width/2, const_height*7.5 + padding_height/2);
    context.lineTo(const_width*5.5 + padding_width/2, const_height*10.5 + padding_height/2);

    context.moveTo(const_width*1.5 + padding_width/2, const_height*7.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*8.5 + padding_height/2);
    context.moveTo(const_width*5.5 + padding_width/2, const_height*7.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*8.5 + padding_height/2);

    context.moveTo(const_width*2.5 + padding_width/2, const_height*8.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*10.5 + padding_height/2);
    context.moveTo(const_width*4.5 + padding_width/2, const_height*8.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*10.5 + padding_height/2);

    context.closePath();
    context.stroke();
}


var select_tree = 0;

function hidden_tree_skill() {
    document.getElementById("info_block").style.visibility = "hidden";
}

var position_y = [
    1,
    2, 2,
    3, 3, 3, 3,
    4, 4,
    5, 5, 5, 5,
    6, 6, 6, 6, 6,
    7, 7, 7,
    8, 8, 8, 8, 8,
    9, 9, 9, 9, 9, 9, 9,
    10, 10, 10, 10, 10, 10, 10,
    11, 11, 11, 11, 11, 11
];
var position_x = [
    4,
    3, 4,
    3, 4, 5, 6,
    4, 6,
    3, 5, 6, 7,
    2, 3, 4, 6, 7,
    3, 4, 5,
    2, 3, 4, 5, 6,
    1, 2, 3, 4, 5, 6, 7,
    1, 2, 3, 4, 5, 6, 7,
    1, 2, 3, 5, 6, 7
];

function show_tree_skill(skill_number) {
    document.getElementById("info_block").style.visibility = "visible";
    document.getElementById("info_block").style.top = const_height*(position_y[skill_number]+0.5) + padding_height/2 -40 + "px";
    document.getElementById("info_block").style.left = const_width*(position_x[skill_number]+0.5) + padding_width/2 + 215 + "px";
    document.getElementById("skill_tree_name").innerHTML = skill_tree_name[select_hero][select_tree][skill_number];
    document.getElementById("skill_tree_about").innerHTML = skill_tree_about[select_hero][select_tree][skill_number];
    if(skill_number == 15) {
        document.getElementById("skill_tree_about").innerHTML += "<br><br>Примечание: можно выбрать только одну ветвь развития. Вторая будет заблокирована.<br>Сменить ветку можно за 2000 осколков. После смены способности весь накопленный прогресс будет утерян.";
    }
    document.getElementById("skill_tree_bonus").innerHTML = skill_tree_bonus[select_hero][select_tree][skill_number];
    document.getElementById("skill_tree_bonus_about").innerHTML = skill_tree_bonus_about[select_hero][select_tree][skill_number];
    document.getElementById("skill_tree_cost").innerHTML = "Стоимость изучения: " + skill_tree_cost[skill_number];
}

function change_tree(tree_number) {
    var table = document.getElementById("skill_tree");
    var counter = 0;
    select_tree = tree_number;
    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            if(skill_tree[i][j] == 1) {
                if(skill_tree_about[select_hero][tree_number][counter] != "" && skill_tree_image[select_hero][tree_number][counter] == "") {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/temp.png)";
                }
                else {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/" + skill_tree_image[select_hero][tree_number][counter] + ")";
                }
                counter++;
            }
            else if(skill_tree[i][j] == 2) {
                if(tree_number) {
                    table.rows[i].cells[j].style.backgroundImage = "url(hero_skills/" + hero_name_eng[select_hero] + "_" + tree_number + ".png)";
                }
                else {
                    table.rows[i].cells[j].style.backgroundImage = "url(hero_images/" + hero_name_eng[select_hero] + ".jpg)";
                }
                counter++;
            }
        }
    }
}