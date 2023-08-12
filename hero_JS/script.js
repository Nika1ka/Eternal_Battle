// 0-обычный  1-необычный  2-редкий  3-эпический  4-легендарный  5-божественный
var hero_name = ["Берсерк", "Воин", "Некромант", "Убийца", "Маг", "Друид", "Охотник", "Демон", "Лекарь", "Призрак", "Элементаль", "Хранительница пламени", "Фея", "Водный дух", "Призыватель"];
var hero_name_eng = ["berserk", "warrior", "necromancer", "assasin", "mage", "druid", "hunter", "demon", "healer", "ghost", "elemental", "flame_keeper", "fairy", "water_spirit", "summoner"];
var hero_rarity = [1, 1, 4, 4, 1, 4, 4, 4, 4, 5, 0, 0, 0, 0, 0];
var attack_type = [false, false, true, false, true, true, true, false, true, true, false, true, true, true, true];
var damage_type = ["физический", "физический", "смешанный", "физический", "магический", "смешанный", "физический", "физический", "магический", "смешанный", "физический", "магический", "магический", "магический", "магический"]; // "magic", "physical", "mixed"

var hero_hp = [650, 440, 280, 420, 345, 480, 300, 600, 330, 120, 700, 320, 200, 400, 360];
var hero_hp_regen = [5.8, 2.9, 1.7, 3.2, 2, 2.3, 1.9, 1.1, 1.3, 0.6, 0.8, 1.4, 0.2, 2.8, 2.1];
var hero_mana = [180, 275, 430, 245, 480, 380, 250, 130, 360, 560, 60, 600, 300, 180, 470];
var hero_mana_regen = [1.2, 1.9, 4.4, 2.5, 5.5, 3.3, 3.4, 1, 3, 6.8, 1.2, 6.3, 3.4, 4.3, 5.2];
var hero_damage = [50, 44, 25, 45, 32, 33, 39, 65, 36, 41, 50, 20, 12, 28, 31];
var hero_damage_spread = [7, 5, 5, 3, 4, 5, 11, 14, 6, 5, 9, 3, 2, 5, 2];

var hero_attack_spead = [140, 125, 105, 140, 120, 110, 125, 115, 120, 110, 85, 150, 90, 170, 110];
var hero_attack_range = [130, 130, 430, 115, 365, 290, 400, 130, 320, 400, 130, 400, 420, 380, 360];
var hero_phis_resist = [6, 28, 3, 4, 6, 4, 2, 10, 0, 13, 20, 4, 5, 1, 5];
var hero_magic_resist = [14, 11, 19, 12, 2, 6, 2, -20, 5, -30, 0, 15, 6, 13, 5];
var hero_status_resist = [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 0, 0, 0, 0, 0];

var hero_speed = [200, 185, 195, 230, 200, 205, 230, 180, 200, 240, 180, 240, 250, 235, 200];
var hero_wision_day = [2000, 2000, 1800, 2000, 2000, 2000, 2200, 1500, 1800, 1600, 1700, 1800, 1800, 2200, 1700];
var hero_wision_night = [1000, 1000, 1200, 1200, 1000, 1000, 1100, 1800, 900, 1400, 850, 900, 900, 1000, 1300];

var hero_dodge = [0, 0, 0, 2, 0, 0, 0, 0, 0, 10, 0, 0, 50, 1, 0];
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
    ["Ловушка", "Мощный выстрел", "Охотничий инстинкт"],
    ["Клинки демона", "Астрал", "Предвестник ночи"],
    ["Рука Бога", "Божественный щит", "Зеркало души"],
    ["Призрачная форма", "Вытягивание души", "Вселение"],
    ["Пронзание", "Кристаллизация"],
    ["Огненное дыхание", "Пламя"],
    ["Целебный свет", "Благословение фей"],
    ["Холодное касание", "Ледяные воды"],
    ["Аура мести", "Потустороння волна"]
];
var skills_info = [ // Описание способности
    ["Увеличивает наносимый и получаемый урон на 20%. На время действия эффекта герой получает 15% вампиризма.", "Бросается в указанную область, нанося урон всем в радисе 75 ед. Применение тратит 50 ед. здоровья героя", "Увеличивает вампиризм на 40%, а урон на 3% от максимального запаса здоровья героя. Под действием способности герой теряет 1% текущего здоровья в секунду"],
    ["Герой увеличивая урон следующих 3-х ударов на 20%. Каждый полученный удар под действием способности увеличивает наносимый урон ещё на 1%", "Атакует врагов перед собой, нанося урон в небольшой области перед собой", "Повышает сопротивление физическому урону на 15%. Каждый полученный удар увеличивает сопротивление ещё на 0.75% до конца действия способности, но не более 20-ти раз."],
    ["Каждый побеждённый противник накапливает заряды этой способности. По активации призывает призраков в зависимости от накопленных душ.<br>Всегда призывает ещё пять призраков.<br>Одновременно может быть до 15-ти зарядов способности.", "Создаёт кристалл изо льда, который ежесекундно атакует и замедляет всех врагов в радиусе 120 ед. Кристалл имеет 200 ед. здоровья. Замедляет на 12% на 0.4 секунды.", "После активации способности герой превращается в жнеца смерти. На время повышет урон героя и его скорость атаки на 30 ед., увеличивает регенерацию здоровья на 4 ед. и изменяет тип атаки на ближний бой.<br>В форме жнеца герой улучшает свои прочие способности.<br>\"Призрачный марш\" наносит 15 ед. магического урона случайному противнику в радиусе 300 ед. за каждый заряд способности.<br>\"Ледяной шпиль\" действует постоянно вокруг героя, нанося 50% урона способности в радиусе 150 ед."],
    ["Герой ненадолго ускользает от противников. Под действием способности невозможно атаковать, а герой получает бонусные 125 ед. скорости.", "Герой прыгает за спину противника, нанося 220% урона от своей атаки.", "Герой призывает короткую ночь, увеличивая уворот на 35% и скорость атаки на 180 ед."],
    ["Запускает магическую стрелу в случайного противника в радиусе 280 вокруг героя. Стрела уменьшает магическое сопротивление цели на 6%<br>Способность имеет 4 заряда.", "Герой тратит 20% своего текущего запаса маны, окружая себя защитной магией, которая создаёт барьер в размере 300% потраченной маны и нанося ежесекундный урон всем противникам в радиусе 180 ед. вокруг героя.", "Герой вызывает вспышку вокруг себя, наносящую огромный урон в радиусе 160 ед. Перед взрывом есть задержка в 1.5 секунды."],
    ["Призывает медведя-помощника, сражающего на стороне героя. Одновременно может существовать не более одного медведя.<br>Здоровье медведя: 400 ед. +4 ед.<br>Урон медведя: 25-30 ед.<br>Скорость атаки медведя: 80 ед.<br>Скорость передвижения медведя: 250 ед.<br>Сопротивление медведя: 5%", "Окутывает область под героем терновником, который замедляет проходящих рядом врагов и наносит им урон. Замедляет на 8% всех в области радиусом 130.", "Герой взывает к древу жизни, которое остаётся на поле боя, давая 25% сопротивления эффектам и 15 ед. регенерации здоровья и маны всем союзникам в радиусе 200 ед. Дерево имеет 700 ед. здоровья"],
    ["Запускает сеть в указанную точку, оглушая всех противников в радиусе 120 ед.", "После небольшой подготовки запускает стрелу в указанном направлении, нанося урон всем противникам по траектории выстрела.", "Герой может переключаться между стойками, получая либо +20% уворота от входящих атак, либо +15 ед. урона и +40 ед. скорости атаки.<br>Применение способности меняет бонусы, которые герой получает от способности."],
    ["Пассивно увеличивают урон на 1.2 ед. и вампиризм на 0.5%. за каждого убитого противника (не более 15-ти). Активация увеличивает эффекты бонусов втрое, но требует 1% текущего здоровья за каждый эффект. После смерти герой теряет 50% накопленных эффектов способности.", "Изгоняет ближайшего противника в радиусе 230 на 3 секунды. После возвращения противник также получает 5% чистого урона от текущего запаса здоровья. Если противников рядом нет - герой восстанавливает 3% здоровья в секунду. Длительность регенерации равна длительности навыка", "Ночью герой получает дополнительные 35% критического урона и 8% шанса крита. Активировав способность герой временно обратит мир во тьму."],
    ["Замедляет скорость передвижения и атаки всех противников в радиусе 250 на 20%. Герой и союзники получают +5 ед. скорости передвижения и атаки за каждого задетого противника.", "Накладывает на себя и союзников в радиусе 300 божественный щит, восстанавливающий 10 ед. здоровья в секунду. Если здоровье полное - восстанавливается мана.", "Наносит урон случайному противнику в радиусе 500 ед. и создаёт его копию. Копия имеет 80% здоровья оригинала и 40% прочих атрибутов."],
    ["Наделяет героя магической защитой, которая пассивно поглощает 95% урона, используя ману героя. Одна единица маны героя поглощает 1.5 ед. входящего урона. Применение способности мгновенно восстановит 10% максимального запаса маны и временно повышает поглощение урона за еденицу маны ещё на 0.5 ед.", "Применяется на выбранного противника. После применения герой замедляется на 120 ед., но будет ежесекундно вытягивать из противника здоровье и восстанавливать ману от нанесённого способностью урона.", "Герой переманивает выбранного противника на свою сторону. Подконтрольный противник получает 15 ед. дополнительной регенерации здоровья.<br>Если цель способности погибнет раньше окончания еффекта - противники в радиусе 400 ед. восстановят 20% от масимального запаса здоровья.<br>Подконтрольный противник продолжает применять все свои способности."],
    ["Усиливает 3 следующие атаки героя. Каждая атака с шансом 40% оглушит цель на 0.6 секунд и нанесёт дополнительный урон.", "Сжигает 5% от максимального запаса маны цели и временно снижает её регенерацию на 20%"],
    ["Поджигает противника, нанося периодический урон, замедляя его на 30 ед. и уменьшая скорость атаки на 70 ед.", "Поджигает область радиусом 200 ед. вокруг героя. Противники в области горения получают переодический урон."],
    ["Мгновенно исцеляет героя и всех союзников в радиусе 700 ед. на 80 ед.", "Увеличивает регенарцию здоровья героя и всех союзников в радиусе 700 ед. на 6 ед., а уворот на 15%."],
    ["Герой накладывает на себя ледяные чары, что позволяет атакам наносить дополнительный урон и снижать скорость передвижения противников в течении 0.6 секунд на 90 ед.", "Замораживает цель, применяя к ней и всем противникам в радисе 40 ед. оцепинение. Цели способности получают переодический урон."],
    ["Присутсвие героя увеличивает урон союзников в радиусе 500 ед. на 15 ед. Применение способности удваивает бонус на некоторое время.", "Направляет в точку призрачную волну, которая создаёт иллюзии всех задетых противников. Иллюзии имеют 10% характеристик оригинала и существуют короткий промежуток времени."]
];
var skill_types = [
    ["Бафф", "Урон", "Бафф"],
    ["Бафф", "Урон", "Бафф"],
    ["Призыв", "Призыв Урон Контроль", "Бафф"],
    ["Бафф", "Урон", "Бафф Дебафф"],
    ["Урон Дебафф", "Урон Бафф", "Урон"],
    ["Призыв", "Урон Контроль", "Бафф Призыв"],
    ["Контроль Урон", "Урон", "Бафф"],
    ["Бафф", "Контроль Урон Лечение", "Бафф Дебафф"],
    ["Бафф Контроль", "Лечение Бафф", "Призыв Урон"],
    ["Бафф Лечение", "Урон Лечение", "Призыв Бафф Контроль"],
    ["Бафф Контроль", "Дебафф"],
    ["Урон Контроль", "Урон"],
    ["Лечение", "Лечение Бафф"],
    ["Бафф Контроль", "Урон Контроль"],
    ["Бафф", "Урон Призыв"]
];
var skills_damage = [ // Урон
    [0, 110, 0],
    [0, 50, 0],
    [0, 20, 0],
    [0, 0, 0],
    [40, 8, 300],
    [0, 12, 0],
    [45, 75, 0],
    [0, 30, 0],
    [0, 0, 160],
    [0, 20, 0],
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
    [5, 0, 12],
    [7, 0, 30],
    [15, 12, 20],
    [2.5, 0, 7],
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
    [280, 350, 0],
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
    [11, 6.5, 27],
    [10, 6, 45],
    [30, 21, 40],
    [8, 4.5, 42],
    [4, 14, 65],
    [55, 6, 90],
    [11, 7.5, 4],
    [22, 14, 90],
    [8, 12, 25],
    [21, 6, 35],
    [10, 4.5],
    [20, 20],
    [12, 15],
    [5, 7],
    [10, 15]
];
var skills_mana = [ // Манакост
    [10, 15, 35],
    [12, 10, 60],
    [100, 65, 130],
    [20, 14, 60],
    [20, 0, 140],
    [80, 25, 180],
    [35, 45, 10],
    [12, 25, 60],
    [60, 45, 70],
    [0, 35, 110],
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
    document.getElementById("damage_type").innerHTML = "Тип урона от атак: " + damage_type[hero_id];
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
    --skill;
    document.getElementById("info_ability").style.visibility = "visible";
    document.getElementById("ability_name").innerHTML = skills_name[select_hero][skill];
    document.getElementById("info_ability").style.top = 330 + "px";
    document.getElementById("info_ability").style.left = document.getElementsByClassName("hero_skill")[skill].getBoundingClientRect().left + document.getElementsByClassName("hero_skill")[skill].getBoundingClientRect().width + 10 + "px";
    document.getElementById("ability_about").innerHTML = skills_info[select_hero][skill];

    var spell_total_cd = get_spell_total_value("spell_cd", "Перезарядка способности", skills_cd[select_hero][skill], skill);
        spell_total_mana = get_spell_total_value("spell_manacost", "Манакост способности", skills_mana[select_hero][skill], skill);
        spell_total_damage = get_spell_total_value("speel_damage", "Урон способности", skills_damage[select_hero][skill], skill);
        spell_total_duration = get_spell_total_value("-", "Длительность действия", skills_duration[select_hero][skill], skill);
        spell_total_range = get_spell_total_value("-", "Дальность применения", skills_range[select_hero][skill], skill);
        //stat_attribute_name, tree_attribute_name, base_value

    if(skills_damage[select_hero][skill]) {
        document.getElementById("hidden1").style.display = "table-row";
        document.getElementById("ability_damage").innerHTML = "Урон: " + spell_total_damage;
        if(skills_damage_type[select_hero][skill] == 1) {
            document.getElementById("ability_damage_type").innerHTML = "Тип: магический";
        }
        else if(skills_damage_type[select_hero][skill] == 2) {
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

    if(skills_duration[select_hero][skill]) {
        document.getElementById("hidden2").style.display = "table-row";
        document.getElementById("skills_duration").innerHTML = "Длительность: " + spell_total_duration + " cек.";
    }
    else {
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("skills_duration").innerHTML = ""
    }

    if(skills_range[select_hero][skill]) {
        document.getElementById("hidden3").style.display = "table-row";
        document.getElementById("skills_range").innerHTML = "Дальность примнения: " + spell_total_range + " ед.";
    }
    else {
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("skills_range").innerHTML = ""
    }
    document.getElementById("ability_cd").innerHTML = "Перезарядка: " + spell_total_cd + " cек.";
    document.getElementById("ability_mana").innerHTML = "Мана: " + spell_total_mana;
    show_skill_type(skill);
}

function hidden_skill() {
    document.getElementById("info_ability").style.visibility = "hidden";
}

function show_skill_type(skill) {
    elements = document.getElementsByClassName("ability_type");
    for(i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        if(skill_types[select_hero][skill].includes(elements[i].innerHTML))
            elements[i].style.display = "flex";
    }

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
            if(select_tree_helper[i][j]) {
                table.rows[i].cells[j].style.visibility = "visible";
            }
            else {
                table.rows[i].cells[j].style.visibility = "hidden";
            }
        }
    }
}

var padding_width = 34.4, padding_height = 37.6,
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

function show_tree_skill(skill_number, mouse_targer_skill) {
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
    document.getElementById("skill_tree_cost").innerHTML = "Стоимость изучения: " + skill_tree_cost[skill_number];

    if(skill_number == 36 && select_tree == 0) {
        document.getElementById("skill_tree_name").innerHTML = "Широкие карманы";
        document.getElementById("skill_tree_about").innerHTML = "Добавляет герою ещё один слот для предметов";
        document.getElementById("skill_tree_bonus").innerHTML = "";
        document.getElementById("skill_tree_bonus_about").innerHTML = "";
        document.getElementById("info_block").style.top = mouse_targer_skill.getBoundingClientRect().top + window.scrollY + document.body.scrollTop + "px";
        document.getElementById("info_block").style.left = mouse_targer_skill.getBoundingClientRect().left + mouse_targer_skill.getBoundingClientRect().width * 0.5 - document.getElementById("info_block").offsetWidth - 50 + "px";
        return;
    }


    for(var i = 0; i < skill_tree_attribute_bonus.length; i++) {
        if(skill_tree_bonus_about[select_hero][select_tree][skill_helper] == skill_tree_attribute_bonus[i]) {
            document.getElementById("skill_tree_name").innerHTML = skill_tree_attribute_name[i];
            document.getElementById("skill_tree_about").innerHTML = "";

            var help_symbol1 = "", help_symbol2 = " ед.";
            if(skill_tree_attribute_base_value[i] > 0)
                help_symbol1 = "+"
            
            if(skill_tree_attribute_bonus[i] == "Защита" || skill_tree_attribute_bonus[i] == "Сопротивление магии" || skill_tree_attribute_bonus[i] == "Сопротивление эффектам" || skill_tree_attribute_bonus[i] == "Уворот" || skill_tree_attribute_bonus[i] == "Крит урон" || 
                skill_tree_attribute_bonus[i] == "Шанс крита" || skill_tree_attribute_bonus[i] == "Урон заклинаний" || skill_tree_attribute_bonus[i] == "Вампиризм" || skill_tree_attribute_bonus[i] == "Магический вампиризм" || skill_tree_attribute_bonus[i] == "Эффективность лечения" || 
                skill_tree_attribute_bonus[i] == "Эффективность восстановления маны" || skill_tree_attribute_bonus[i] == "Урон по постройкам" || skill_tree_attribute_bonus[i] == "Манакост способности" || skill_tree_attribute_bonus[i] == "Урон способности" || skill_tree_attribute_bonus[i] == "Дальность применения" ||
                skill_tree_attribute_bonus[i] == "Перезарядка способности" || skill_tree_attribute_bonus[i] == "Длительность действия")
                help_symbol2 = "%";


            document.getElementById("skill_tree_bonus").innerHTML = help_symbol1 + (((skill_tree_attribute_base_value[i] + skill_tree_attribute_bonus_value[i] * (position_y[skill_number])) * 10).toFixed(1) / 10) + help_symbol2;
            document.getElementById("skill_tree_bonus_about").innerHTML = skill_tree_attribute_bonus[i];
            document.getElementById("info_block").style.top = mouse_targer_skill.getBoundingClientRect().top + window.scrollY + document.body.scrollTop + "px";
            document.getElementById("info_block").style.left = mouse_targer_skill.getBoundingClientRect().left + mouse_targer_skill.getBoundingClientRect().width * 0.5 - document.getElementById("info_block").offsetWidth - 50 + "px";
            return;
        }
    }


    document.getElementById("skill_tree_name").innerHTML = skill_tree_name[select_hero][select_tree][skill_helper];
    document.getElementById("skill_tree_about").innerHTML = skill_tree_about[select_hero][select_tree][skill_helper];

    if(skill_number == 15 && hero_rarity[select_hero] != 0) {
        document.getElementById("skill_tree_about").innerHTML += "<br><br>Примечание: можно выбрать только одну ветвь развития. После выбора вторая ветка будет заблокирована.<br>Смена ветви развития сбросит весь прогресс и вернёт 80% потраченных осколков";
    }
    document.getElementById("skill_tree_bonus").innerHTML = skill_tree_bonus[select_hero][select_tree][skill_helper];
    document.getElementById("skill_tree_bonus_about").innerHTML = skill_tree_bonus_about[select_hero][select_tree][skill_helper];

    document.getElementById("info_block").style.top = mouse_targer_skill.getBoundingClientRect().top + window.scrollY + document.body.scrollTop + "px";
    document.getElementById("info_block").style.left = mouse_targer_skill.getBoundingClientRect().left + mouse_targer_skill.getBoundingClientRect().width * 0.5 - document.getElementById("info_block").offsetWidth - 50 + "px";
}

    // Здесь нужно поменять метод установки картинки на фон способности
function change_tree(tree_number) {
    var table = document.getElementById("skill_tree");
    var counter = 0;
    select_tree = tree_number;

    select_tree_helper = skill_tree;
    if(hero_rarity[select_hero] == 0)
        select_tree_helper = skill_tree2;

    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            table.rows[i].cells[j].style.borderColor = "black";
            is_all_tree_upgrade_selected = false;
            document.getElementById("select_all_tree_upgrade").innerHTML = "Выбрать все";
            if(select_tree_helper[i][j] == 1) {
                if(skill_tree_about[select_hero][tree_number][counter] != "" && skill_tree_image[select_hero][tree_number][counter] == "") {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/spell_upgrade.png)";
                }
                else {
                    var flag_image = true;
                    for(var k = 0; k < skill_tree_attribute_bonus.length; k++) {
                        if(skill_tree_bonus_about[select_hero][select_tree][counter] == skill_tree_attribute_bonus[k]) {
                            if(skill_tree_attribute_images[k] != "")
                                table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/" + skill_tree_attribute_images[k] + ".png)";
                            else
                                table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/spell_upgrade.png)";
                            flag_image = false;
                        }
                    }
                    if(flag_image) {
                        if (skill_tree_image[select_hero][select_tree][counter] == "")
                            table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/empty_slot.png)";
                        else {
                            table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/" + skill_tree_image[select_hero][select_tree][counter] + ".png)";
                            console.log("url(skill_tree/" + skill_tree_image[select_hero][select_tree][counter] + ")");
                            console.log("url(skill_tree/vamp.png)");
                        }
                    }
                }
                counter++;
            }
            else if(select_tree_helper[i][j] == 2) {
                if(tree_number) {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/hero_upgrades/" + hero_name_eng[select_hero] + "_" + tree_number + ".png)";
                }
                else {
                    table.rows[i].cells[j].style.backgroundImage = "url(skill_tree/hero_upgrades/" + hero_name_eng[select_hero] + ".png)";
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

function set_active_skill(skill_id) {
    var table = document.getElementById("skill_tree");
    var counter = 0;
    if(hero_rarity[select_hero] == 0) {
        if(skill_id == 29)
            skill_id = 26;
        else if(skill_id == 36)
            skill_id = 27;
    }
    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            if(table.rows[i].cells[j].style.visibility == "visible")
                ++counter;
            if(counter == skill_id+1) {
                if(table.rows[i].cells[j].style.borderColor == "red") {
                    table.rows[i].cells[j].style.borderColor = "black";
                    table.rows[i].cells[j].style.backgroundImage = table.rows[i].cells[j].style.backgroundImage.split(",")[1];
                    return;
                }
                table.rows[i].cells[j].style.borderColor = "red";
                table.rows[i].cells[j].style.backgroundImage = "url(\"skill_tree/selected.png\"), " + table.rows[i].cells[j].style.backgroundImage.split(",")[0];
                return;
            }
        }
    }
}

var is_all_tree_upgrade_selected = false;
function select_all_tree_skill() {
    var table = document.getElementById("skill_tree");
    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            if(table.rows[i].cells[j].style.visibility == "visible") {
                if(is_all_tree_upgrade_selected) {
                    table.rows[i].cells[j].style.borderColor = "black";
                    table.rows[i].cells[j].style.backgroundImage = table.rows[i].cells[j].style.backgroundImage.split(",")[1];
                }
                else if (table.rows[i].cells[j].style.backgroundImage.split(",").length != 2) {
                    table.rows[i].cells[j].style.borderColor = "red";
                    table.rows[i].cells[j].style.backgroundImage = "url(\"skill_tree/selected.png\"), " + table.rows[i].cells[j].style.backgroundImage.split(",")[0];
                }
            }
        }
    }
    refreshStatValuesBySelectItemLevel();
    if(is_all_tree_upgrade_selected) {
        is_all_tree_upgrade_selected = false;
        document.getElementById("select_all_tree_upgrade").innerHTML = "Выбрать все";
        return;
    }
    is_all_tree_upgrade_selected = true;
    document.getElementById("select_all_tree_upgrade").innerHTML = "Убрать все";
    return;
}

function get_spell_total_value(stat_attribute_id, tree_attribute_name, base_value, selected_skill_tree_id) {
    var table = document.getElementById("skill_tree");
    counter = 0;
    help_value1 = 0;
    if(select_tree == selected_skill_tree_id+1) {
        select_tree_helper = skill_tree;
        tree_attribute_id = skill_tree_attribute_bonus.indexOf(tree_attribute_name);
        if(hero_rarity[select_hero] == 0)
            select_tree_helper = skill_tree2;
        for(i = 0; i < 11; i++) {
            for(j = 0; j < 7; j++) {
                if(table.rows[i].cells[j].style.visibility == "visible") {
                    if(skill_tree_bonus_about[select_hero][select_tree][counter] == tree_attribute_name) {
                        if(table.rows[i].cells[j].style.borderColor == "red")
                            help_value1 += skill_tree_attribute_base_value[tree_attribute_id] + skill_tree_attribute_bonus_value[tree_attribute_id] * (position_y[counter]);
                    }
                }
                if(select_tree_helper[i][j])
                    ++counter;
            }
        }
    }
    help_value2 = 100;
    if(stat_attribute_id != "-") {
        if(document.getElementById(stat_attribute_id).innerHTML != "")
            help_value2 = Number((document.getElementById(stat_attribute_id).innerHTML).slice(0, -1));
    }
    return (base_value * (1+help_value1 / 100) * (help_value2 / 100)).toFixed(1);
}

function get_base_attribute_total_value(tree_attribute_name, base_value) {
    var additionalStat = 0;
    var table = document.getElementById("skill_tree");
    counter = 0;
    select_tree_helper = skill_tree;
    tree_attribute_id = skill_tree_attribute_bonus.indexOf(tree_attribute_name);
    if(hero_rarity[select_hero] == 0)
        select_tree_helper = skill_tree2;
    for(i = 0; i < 11; i++) {
        for(j = 0; j < 7; j++) {
            if(table.rows[i].cells[j].style.visibility == "visible") {
                if(skill_tree_bonus_about[select_hero][select_tree][counter] == tree_attribute_name) {
                    if(table.rows[i].cells[j].style.borderColor == "red") 
                        additionalStat += skill_tree_attribute_base_value[tree_attribute_id] + skill_tree_attribute_bonus_value[tree_attribute_id] * (position_y[counter]);
                }
            }
            if(select_tree_helper[i][j])
                ++counter;
        }
    }
    return base_value + additionalStat;
}

function changeLvlOfStar(id) {
    document.getElementsByClassName("slider_star_lvl")[id].innerHTML = "lvl " + document.getElementsByClassName("stars_select")[id].value;
    refreshStatValuesBySelectItemLevel();
}