// 0-обычный  1-необычный  2-редкий  3-эпический  4-легендарный  5-божественный
var hero_name = ["Берсерк", "Воин", "Некромант", "Убийца", "Маг", "Друид", "Охотник", "Демон", "Лекарь", "Призрак", "Элементаль", "Хранительница пламени", "Фея", "Водный дух", "Призыватель"];
var hero_name_eng = ["berserk", "warrior", "necromancer", "assasin", "mage", "druid", "hunter", "demon", "healer", "ghost", "elemental", "flame_keeper", "fairy", "water_spirit", "summoner"];
var hero_rarity = [1, 1, 4, 4, 1, 4, 4, 4, 4, 5, 0, 0, 0, 0, 0];
var attack_type = [false, false, true, false, true, true, true, false, true, true, false, true, true, true, true];

var hero_hp = [550, 470, 280, 420, 345, 480, 300, 600, 330, 360, 700, 320, 200, 400, 360];
var hero_hp_regen = [4.6, 3.2, 1.7, 3.2, 2, 2.3, 1.9, 1.1, 1.3, 2.6, 0.8, 1.4, 0.2, 2.8, 2.1];
var hero_mana = [180, 275, 430, 245, 480, 380, 250, 130, 360, 560, 60, 600, 300, 180, 470];
var hero_mana_regen = [1.6, 1.9, 4.4, 2.5, 5.5, 3.3, 3.4, 1, 3, 5.7, 1.2, 6.3, 3.4, 4.3, 5.2];
var hero_damage = [52, 44, 25, 45, 32, 33, 44, 65, 36, 41, 50, 20, 12, 28, 31];
var hero_damage_spread = [8, 5, 5, 3, 4, 5, 11, 14, 6, 5, 9, 3, 2, 5, 2];

var hero_attack_spead = [140, 125, 105, 140, 120, 110, 125, 115, 120, 110, 85, 150, 90, 170, 110];
var hero_attack_range = [130, 130, 430, 115, 365, 290, 400, 130, 320, 400, 130, 400, 420, 380, 360];
var hero_phis_resist = [6, 18, 3, 1.4, 6, 4, 2, 10, 0, 13, 20, 4, 5, 1, 5];
var hero_magic_resist = [14, 15, 19, 12, 2, 6, 2, -20, 5, -30, 0, 15, 6, 13, 5];
var hero_status_resist = [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0];

var hero_speed = [200, 185, 195, 230, 200, 205, 230, 180, 200, 240, 180, 240, 250, 235, 200];
var hero_wision_day = [2000, 2000, 1800, 2000, 2000, 2000, 2200, 1500, 1800, 1600, 1700, 1800, 1800, 2200, 1700];
var hero_wision_night = [1000, 1000, 1200, 1200, 1000, 1000, 1100, 1800, 900, 1400, 850, 900, 900, 1000, 1300];

var hero_dodge = [0, 0, 0, 2, 0, 0, 5, 0, 0, 10, 0, 0, 50, 1, 0];
var hero_critical_damage = [0, 0, 0, 10, 0, 0, 0, 10, 0, -10, 0, 0, -20, 0, 0];
var hero_critical_chance = [0, 0, 0, 2, 0, 0, 1, 0, 0, -2, 0, 0, -5, 0, 0];

var select_hero = 0;

var skills_name = [ // Название способности
    ["Ярость", "Рывок", "Жажда крови"],
    ["Тяжёлый удар", "Выпад", "Ярость боя"],
    ["Призрачный марш", "Ледяной шпиль", "Обращение в жнеца"],
    ["Исчезновение", "Удар в спину", "Ночной охотник"],
    ["Магические стрелы", "Магический плащ", "Взрыв магии"],
    ["Вызов зверя", "Лоза", "Древо жизни"],
    ["Ловушка", "Мощный выстрел", "Охотничий трюк"],
    ["Клинки демона", "Астрал", "Предвестник ночи"],
    ["Рука Бога", "Божественный щит", "Зеркало души"],
    ["Раскол жизни", "Вытягивание", "Вселение"],
    ["Пронзание", "Кристаллизация"],
    ["Огненное дыхание", "Пламя"],
    ["Целебный свет", "Благословение фей"],
    ["Холодное касание", "Ледяные воды"],
    ["Аура мести", "Потустороння волна"]
];
var skills_info = [ // Описание способности
    ["Увеличивает наносимый и получаемый урон на 20%. На время действия эффекта герой получает 15% вампиризма.", "Бросается в указанную область, нанося урон всем в радисе 75 ед.", "Увеличивает вампиризм и урон на 30%. Каждый побеждённый под действием эффекта враг увеличивает урон на 10% до конца действия способности."],
    ["Герой увеличивая урон следующих 3-х ударов на 30%, но с уменьшенной на 25 ед. скоростью атаки.", "Атакует врагов перед собой, нанося урон в небольшой области (100 ед. перед собой).", "Повышает сопротивление физическому урону на 10%. Каждый полученный удар увеличивает сопротивление ещё на 1% до конца действия способности, но не более 10-ти раз."],
    ["Каждые два побеждённых противника накапливает заряды этой способности. По активации призывает призраков в зависимости от накопленных душ.<br>Всегда будет призван минимум один призрак.<br>Одновременно может быть до 15-ти зарядов способности.", "Создаёт кристалл изо льда, который ежесекундно атакует и замедляет всех врагов в радиусе 120 ед. Кристалл имеет 240 ед. здоровья. Замедляет на 12% на 0.5 секунды.", "После активации способности герой превращается в жнеца смерти. На время повышет урон героя и его скорость атаки на 30 ед., увеличивает регенерацию здоровья на 4 ед. и изменяет тип атаки на ближний бой.<br>В форме жнеца герой улучшает свои прочие способности.<br>\"Призрачный марш\" наносит 20 ед. магического урона случайному противнику в радиусе 300 ед. за каждый заряд способности.<br>\"Ледяной шпиль\" действует постоянно вокруг героя, нанося 50% урона способности в радиусе 150 ед."],
    ["Герой ненадолго ускользает от противников. Под действием способности невозможно атаковать, а герой получает бонусные 70 ед. скорости.", "Герой прыгает за спину противника, нанося 220% урона от своей атаки.", "Герой призывает короткую ночь, увеличивая уворот на 20% и скорость атаки на 180 ед."],
    ["Запускает магическую стрелу в случайного противника в радиусе 280 вокруг героя. Стрела уменьшает магическое сопротивление цели на 6%<br>Способность имеет 4 заряда.", "Окружает себя защитной магией, нанося ежесекундный урон всем противникам в радиусе 180 ед. вокруг героя.", "Герой вызывает вспышку вокруг себя, наносящую огромный урон в радиусе 160 ед. Перед взрывом есть задержка в 1.5 секунды."],
    ["Призывает медведя-помощника, сражающего на стороне героя. Одновременно может существовать не более одного медведя.<br>Здоровье медведя: 400 ед. +4 ед.<br>Урон медведя: 25-30 ед.<br>Скорость атаки медведя: 80 ед.<br>Скорость передвижения медведя: 250 ед.<br>Сопротивление медведя: 5%", "Окутывает область под героем терновником, который замедляет проходящих рядом врагов и наносит им урон. Замедляет на 8% всех в области радиусом 130.", "Герой взывает к древу жизни, которое остаётся на поле боя, давая 25% сопротивления эффектам и 15 ед. регенерации здоровья и маны всем союзникам в радиусе 200 ед. Дерево имеет 700 ед. здоровья"],
    ["Запускает сеть в указанную точку, оглушая всех противников в радиусе 120 ед.", "После небольшой подготовки запускает стрелу в указанном направлении, нанося урон всем противникам по траектории выстрела.", "Скользит в выбранном направлении, атакуя всех противников в радиусе 140 ед., но с уменьшеним на 60% уроном"],
    ["Пассивно увеличивают урон на 1.2 ед. и вампиризм на 0.5%. за каждого убитого противника (не более 15-ти). Активация увеличивает эффекты бонусов втрое, но требует 1% текущего здоровья за каждый эффект. После смерти герой теряет 50% накопленных эффектов способности.", "Изгоняет ближайшего противника в радиусе 230 на 3 секунды. После возвращения противник также получает 5% чистого урона от текущего запаса здоровья. Если противников рядом нет - герой восстанавливает 3% здоровья в секунду. Длительность регенерации равна длительности навыка", "Ночью герой получает дополнительные 35% критического урона и 8% шанса крита. Активировав способность герой временно обратит мир во тьму."],
    ["Замедляет скорость передвижения и атаки всех противников в радиусе 250 на 20%. Герой и союзники получают +5 ед. скорости передвижения и атаки за каждого задетого противника.", "Накладывает на себя и союзников в радиусе 300 божественный щит, восстанавливающий 10 ед. здоровья в секунду. Если здоровье полное - восстанавливается мана.", "Наносит урон случайному противнику в радиусе 500 ед. и создаёт его копию. Копия имеет 80% здоровья оригинала и 40% прочих атрибутов."],
    ["Увеличивает магическое сопротивление героя на 20% и каждую секунду наносит всем противникам в радиусе 500 ед. урон в размере 5 ед. + 5% от текущей маны героя. Герой также получает этот урон, но не может от него погибнуть.", "Применяется на выбранного противника. После применения герой замедляется на 120 ед., но будет вытягивать из противника 50 ед. здоровья в секунду и лечится на равное количество здоровья.", "Герой переманивает выбранного противника на свою сторону. Подконтрольный противник получает 15 ед. дополнительной регенерации здоровья.<br>Если цель способности погибнет раньше окончания еффекта - противники в радиусе 400 ед. восстановят 20% от масимального запаса здоровья.<br>Подконтрольный противник продолжает применять все свои способности."],
    ["Усиливает 3 следующие атаки героя. Каждая атака с шансом 40% оглушит цель на 0.6 секунд и нанесёт дополнительный урон.", "Сжигает 30 ед. маны цели и временно снижают её регенерацию на 20%"],
    ["Поджигает противника, нанося периодический урон, замедляя его на 30 ед. и уменьшая скорость атаки на 70 ед.", "Поджигает область радиусом 200 ед. вокруг героя. Противники в области горения получают переодический урон."],
    ["Мгновенно исцеляет героя и всех союзников в радиусе 700 ед. на 80 ед.", "Увеличивает регенарцию здоровья героя и всех союзников в радиусе 700 ед. на 6 ед., а уворот на 15%."],
    ["Герой накладывает на себя ледяные чары, что позволяет атакам наносить дополнительный урон и снижать скорость передвижения противников на 0.6 секунд на 90 ед.", "Замораживает цель, применяя к ней и всем противникам в радисе 40 ед. оцепинение. Цели способности получают переодический урон."],
    ["Присутсвие героя увеличивает урон союзников в радиусе 500 ед. на 15 ед. Применение способности удваивает бонус на некоторое время.", "Направляет в точку призрачную волну, которая создаёт иллюзии всех задетых противников. Иллюзии имеют 10% характеристик оригинала и существуют короткий промежуток времени."]
];
var skills_damage = [ // Урон
    [0, 70, 0],
    [0, 50, 0],
    [0, 30, 0],
    [0, 0, 0],
    [40, 8, 300],
    [0, 12, 0],
    [45, 75, 0],
    [0, 30, 0],
    [0, 0, 160],
    [5, 50, 0],
    [15, 0],
    [20, 15],
    [0, 0],
    [4, 18],
    [0, 5]
];
var skills_damage_type = [ // Тип урона (0 - чистый, 1 - магический, 2 - физический)
    [0, 2, 0],
    [0, 2, 0],
    [0, 1, 0],
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
    [1, 2, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 0],
    [0, 0],
    [1, 1],
    [0, 0],
    [1, 1],
    [0, 1]
]
var skills_duration = [ // Длительность
    [5, 0, 15],
    [7, 0, 30],
    [15, 12, 20],
    [2, 0, 6],
    [0, 8, 0],
    [95, 4.5, 18],
    [2.4, 0.9, 0],
    [8, 3, 40],
    [3.5, 7, 10],
    [5, 4, 16],
    [5, 2],
    [7, 15],
    [0, 6],
    [5, 1.2],
    [8, 5]
];
var skills_range = [ // Дальность примнения
    [0, 180, 0],
    [0, 0, 0],
    [0, 300, 0],
    [0, 180, 0],
    [0, 0, 0],
    [0, 0, 180],
    [280, 350, 300],
    [0, 0, 0],
    [0, 0, 0],
    [0, 500, 300],
    [0, 400],
    [600, 0],
    [0, 0],
    [0, 350],
    [0, 380]
];
var skills_cd = [ // Перезарядка
    [11, 6.5, 35],
    [10, 6, 45],
    [35, 22, 40],
    [8, 4.5, 42],
    [4, 20, 65],
    [55, 6, 90],
    [11, 7.5, 5.5],
    [22, 14, 90],
    [8, 12, 25],
    [9, 5, 35],
    [10, 4.5],
    [20, 20],
    [12, 15],
    [5, 7],
    [10, 15]
];
var skills_mana = [ // Манакост
    [10, 15, 50],
    [12, 10, 60],
    [110, 75, 140],
    [20, 14, 60],
    [20, 55, 140],
    [80, 25, 180],
    [35, 45, 15],
    [12, 25, 60],
    [60, 45, 70],
    [35, 50, 110],
    [5, 4],
    [55, 65],
    [30, 25],
    [12, 30],
    [40, 70]
];

function change_hero (hero_id = 0) {
    for(var i = 0; i < document.getElementsByClassName("hero_portrait").length; i++)
        document.getElementsByClassName("hero_portrait")[i].style.borderColor = get_rarity_for_hero(hero_rarity[i]);
    select_hero = hero_id;
    document.querySelector("h1").innerHTML = hero_name[hero_id];

    for(var i = 0; i < 3; i++)
        document.getElementsByClassName("hero_skill")[i].style.display = "none";
    for(var i = 0; i < skills_name[select_hero].length; i++)
        document.getElementsByClassName("hero_skill")[i].style.display = "inline-block";
        
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
    open_skill_tree();
    draw();
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
var skill_tree2 = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1],
    [0, 1, 1, 2, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

function open_skill_tree () {
    var table = document.getElementById("skill_tree");
    select_tree_helper = skill_tree;
    if(hero_rarity[select_hero] == 0)
        select_tree_helper = skill_tree2;
    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            if(select_tree_helper[i][j] == 1) {
                table.rows[i].cells[j].style.visibility = "visible";
            }
            else if(select_tree_helper[i][j] == 2) {
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
    context.clearRect(0, 0, 1000, 1500);
    
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
    context.lineTo(const_width*1.5 + padding_width/2, const_height*7.5 + padding_height/2);

    context.moveTo(const_width*3.5 + padding_width/2, const_height*5.5 + padding_height/2);
    context.lineTo(const_width*5.5 + padding_width/2, const_height*7.5 + padding_height/2);

    context.moveTo(const_width*2.5 + padding_width/2, const_height*6.5 + padding_height/2);
    context.lineTo(const_width*2.5 + padding_width/2, const_height*7.5 + padding_height/2);

    context.moveTo(const_width*4.5 + padding_width/2, const_height*6.5 + padding_height/2);
    context.lineTo(const_width*4.5 + padding_width/2, const_height*7.5 + padding_height/2);
    
        // Для редких героев
    if(hero_rarity[select_hero] != 0) {

        context.moveTo(const_width*1.5 + padding_width/2, const_height*7.5 + padding_height/2);
        context.lineTo(const_width*0.5 + padding_width/2, const_height*8.5 + padding_height/2);

        context.moveTo(const_width*5.5 + padding_width/2, const_height*7.5 + padding_height/2);
        context.lineTo(const_width*6.5 + padding_width/2, const_height*8.5 + padding_height/2);

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
    }

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
    var skill_helper = skill_number;
    if(hero_rarity[select_hero] == 0 && skill_number > 25) {
        if(skill_helper == 29)
            skill_helper = 26;
        else if(skill_helper == 36)
            skill_helper = 27;
        else
            return;
    }
    document.getElementById("info_block").style.visibility = "visible";
    document.getElementById("info_block").style.top = const_height*(position_y[skill_number]+0.5) + padding_height/2 -40 + "px";
    document.getElementById("info_block").style.left = const_width*(position_x[skill_number]+0.5) + padding_width/2 + 215 + "px";
    document.getElementById("skill_tree_cost").innerHTML = "Стоимость изучения: " + skill_tree_cost[skill_number];

    if(skill_number == 36 && select_tree == 0) {
        document.getElementById("skill_tree_name").innerHTML = "Широкие карманы";
        document.getElementById("skill_tree_about").innerHTML = "Добавляет герою ещё один слот для предметов";
        document.getElementById("skill_tree_bonus").innerHTML = "";
        document.getElementById("skill_tree_bonus_about").innerHTML = "";
        return;
    }

    document.getElementById("skill_tree_name").innerHTML = skill_tree_name[select_hero][select_tree][skill_helper];
    document.getElementById("skill_tree_about").innerHTML = skill_tree_about[select_hero][select_tree][skill_helper];
    if(skill_number == 15 && hero_rarity[select_hero] != 0) {
        document.getElementById("skill_tree_about").innerHTML += "<br><br>Примечание: можно выбрать только одну ветвь развития. После выбора вторая ветка будет заблокирована.<br>Смена ветви развития сбросит весь прогресс и вернёт 80% потраченных осколков";
    }
    document.getElementById("skill_tree_bonus").innerHTML = skill_tree_bonus[select_hero][select_tree][skill_helper];
    document.getElementById("skill_tree_bonus_about").innerHTML = skill_tree_bonus_about[select_hero][select_tree][skill_helper];
}

function change_tree(tree_number) {
    var table = document.getElementById("skill_tree");
    var counter = 0;
    select_tree = tree_number;

    select_tree_helper = skill_tree;
    if(hero_rarity[select_hero] == 0)
        select_tree_helper = skill_tree2;

    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            if(select_tree_helper[i][j] == 1) {
                if(skill_tree_about[select_hero][tree_number][counter] != "" && skill_tree_image[select_hero][tree_number][counter] == "") {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/temp.png)";
                }
                else {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/" + skill_tree_image[select_hero][tree_number][counter] + ")";
                }
                counter++;
            }
            else if(select_tree_helper[i][j] == 2) {
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

function get_rarity_for_hero(rarity) {
    switch(rarity) {
        case 1:
            return "rgb(25, 65, 245, 0.8)";
        case 2:
            return "rgba(25, 245, 80, 0.8)";
        case 3:
            return "rgba(193, 40, 255, 0.8)";
        case 4:
            return "rgba(255, 170, 15, 0.8)";
        case 5:
            return "rgba(255, 0, 0, 0.8)";
        default:
            return "rgba(110, 110, 110, 0.8)";
    }
}