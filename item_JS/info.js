var select_item = 0;

var item_name = [
    "Накидка хранителя", "Лезвие антимагии", "Ржавый меч", "Колчан", "Стальные латы", "Шлем", "Сфера магии", "Сфера яда", "Камень душ", "Брошка", "Деревянный щит", "Волшебный огонь", "Священная книга", "Рубин", "Заживляющий бальзам",
    "Мантия хранителя", "Бутыль", "Топор войны", "Ядовитый кинжал", "Шипастый щит", "Холодное лезвие", "Перстень души", "Амулет вампира", "Маска вуду", "Латы доблести", "Волшебная мантия", "Барабан войны", "Плёнка призрака", "Драгоценное копьё", "Ботинок скорости",
    "Роба целителя", "Магический посох", "Стальная кираса", "Амулет чар", "Плащ стужи", "Клинок мороза", "Абордажная сабля", "Рубиновый посох", "Потусторонний жезл", "Копьё мести", "Колье волшебницы", "Перстень зла", "Ботинок силы", "Капюшон убийцы", "Перчатки лучника",
    "Фляга с лекарством", "Линза видений", "Волшебный камень", "Проклятый посох", "Жезл молний", "Медальон удачи", "Пылающая булава", "Маска трепета", "Роба волшебника", "Кольцо отречения", "Кольцо антимагии", "Ботинок регенерации", "Ботинок волшебства", "Шлем презрения", "Мантия защиты",
    "Растворитель снов", "Клинок антимагии", "Ведьмино жало", "Священный талисман", "Медальон кровавого проклятия", "Скипетр света", "Лунное сияние", "Сжигающий меч", "Кровь божества", "Драконья чешуя", "Кольцо королевской власти", "Ботинок ярости", "Кинжал сакуры", "Маска зверя", "Оковы зверя",
    "Извлекатель эссенции", "Меч кровавого проклятия", "Сердце чародейства", "Сердце дракона", "Осквернённое желание", "Меч из кости дракона", "Плащ стража", "Щит поддержки", "Перстень Катрин", "Полуночная призма", "Когти демона", "Скороходы чемпиона", "Солнечный меч", "Зачарованное зеркало", "Туман в банке"
];
var item_eng_name = [
    "mantle_of_intelligence.jpg", "falcon_blade.jpg", "claymore.jpg", "enchanted_quiver.jpg", "chainmail.jpg", "helm_of_iron_will.jpg", "linkens_sphere.jpg", "orb_of_venom.jpg", "bloodstone.jpg", "Faded_Broach_icon.png", "Stout_Shield_icon.png", "faerie_fire.jpg", "tome_of_knowledge.jpg", "Siltbreaker_Orb_of_Passage_icon.png", "healing_salve.jpg",
    "robe_of_the_magi.jpg", "bottle.jpg", "ogre_axe.jpg", "Prince_Knife_icon.png", "Poor_Man_Shield_icon.png", "Trident_icon.png", "Ring_of_Tarrasque_icon.png", "Vampire_Fangs_icon.png", "voodoo_mask.jpg", "crimson_guard.jpg", "nether_shawl.jpg", "drum_of_endurance.jpg", "Siltbreaker_Sign_of_the_Arachnid_icon.png", "javelin.jpg", "boots_of_speed.jpg",
    "robe_of_the_magi.jpg", "kaya.jpg", "chipped_vest.jpg", "spell_prism.jpg", "eternal_shroud.jpg", "Siltbreaker_The_Caustic_Finale_icon.png", "echo_sabre.jpg", "Dagon_3_icon.png", "Siltbreaker_Oblivion_Locket_icon.png", "hurricane_pike.jpg", "null_talisman.jpg", "soul_ring.jpg", "power_treads.jpg", "cloak.jpg", "gloves_of_haste.jpg",
    "Elixir_1_icon.png", "gem_of_true_sight.jpg", "aether_lens.jpg","orchid_malevolence.jpg", "gleipnir.jpg", "talisman_of_evasion.jpg", "rod_of_atos.jpg", "vladmirs_offering.jpg", "veil_of_discord.jpg", "giants_ring.jpg", "arcane_ring.jpg", "tranquil_boots.jpg", "arcane_boots.jpg", "helm_of_the_dominator.jpg", "hood_of_defiance.jpg",
    "Third_Eye_icon.png", "diffusal_blade.jpg", "witch_blade.jpg", "solar_crest.jpg", "aegis_of_the_immortal.jpg", "Siltbreaker_Siltbreaker_Dredged_Trident_icon.png", "silver_edge.jpg", "radiance.jpg", "River_Vial_Blood_icon.png", "Siltbreaker_Gravel_Foot_icon.png", "psychic_headband.jpg", "Siltbreaker_Treads_of_Ermacor_icon.png", "Siltbreaker_Violet_Blade_icon.png", "wraith_pact.jpg", "witchbane.jpg",
    "apex.jpg", "bloodthorn.jpg", "stormcrafter.jpg", "heart_of_tarrasque.jpg", "ninja_gear.jpg", "abyssal_blade.jpg", "cloak_of_flames.jpg", "arcanists_armor.jpg", "essence_ring.jpg", "seer_stone.jpg", "Siltbreaker_Paw_of_Lucius_icon.png", "boots_of_travel_2.jpg", "paladin_sword.jpg", "mirror_shield.jpg", "smoke_of_deceit.jpg"
];

var item_bonus = [
    ["Здоровье", "Регенерация здоровья"], ["Мана", "Сопротивление магии"], ["Урон"], ["Шанс крита"], ["Защита"], ["Здоровье", "Защита"], ["Урон заклинаний"], [], ["Здоровье", "Регенерация здоровья", "Урон"], ["Регенерация маны"], [], [], ["Сопротивление эффектам"], ["Крит урон", "Шанс крита"], [],
    ["Здоровье", "Регенерация здоровья", "Мана", "Сопротивление магии"], [], ["Урон", "Шанс крита"], ["Урон"], [], ["Скорость атаки"], ["Здоровье", "Регенерация здоровья", "Урон", "Вампиризм"], ["Вампиризм"], ["Здоровье", "Регенерация маны", "Урон заклинаний", "Вампиризм", "Магический вампиризм"], ["Здоровье", "Защита"], ["Здоровье", "Регенерация здоровья", "Регенерация маны", "Урон заклинаний"], ["Скорость", "Уворот"], ["Сопротивление магии", "Уворот"], ["Скорость атаки"], ["Скорость"],
    ["Здоровье", "Регенерация здоровья", "Мана", "Сопротивление магии", "Эффективность лечения"], ["Урон заклинаний", "Манакост способностей", "Перезарядка способностей"], ["Здоровье", "Защита", "Скорость"], ["Мана", "Сопротивление магии", "Урон заклинаний"], ["Здоровье", "Регенерация здоровья", "Регенерация маны", "Скорость атаки", "Урон заклинаний"], [], ["Урон"], ["Крит урон"], ["Сопротивление магии", "Уворот"], ["Урон", "Скорость атаки", "Шанс крита"], ["Регенерация маны"], ["Здоровье", "Регенерация здоровья", "Урон", "Вампиризм", "Эффективность лечения"], ["Здоровье", "Урон", "Скорость"], ["Скорость"], ["Дальность атаки<br>(ближний бой)", "Дальность атаки<br>(дальний бой)"],
    ["Регенерация маны"], ["Дальность обзора (день)", "Дальность обзора (ночь)"], ["Урон заклинаний"], ["Урон заклинаний", "Манакост способностей", "Перезарядка способностей"], ["Мана", "Регенерация маны", "Сопротивление магии"], ["Мана", "Сопротивление магии", "Уворот", "Шанс крита", "Урон заклинаний"], ["Урон", "Крит урон", "Шанс крита"], ["Здоровье", "Регенерация маны", "Крит урон", "Урон заклинаний", "Вампиризм", "Магический вампиризм"], ["Здоровье", "Регенерация здоровья", "Мана", "Регенерация маны", "Скорость атаки", "Сопротивление магии", "Урон заклинаний"], ["Урон", "Вампиризм"], ["Регенерация маны", "Сопротивление магии"], ["Регенерация здоровья", "Скорость"], ["Скорость"], ["Здоровье", "Защита", "Скорость"], ["Здоровье", "Регенерация здоровья", "Мана", "Защита", "Сопротивление магии", "Эффективность лечения"],
    ["Урон заклинаний", "Дальность обзора (день)", "Дальность обзора (ночь)"], ["Мана", "Скорость атаки"], ["Крит урон", "Шанс крита", "Урон заклинаний", "Манакост способностей", "Перезарядка способностей"], ["Мана", "Защита", "Сопротивление магии", "Уворот", "Шанс крита", "Урон заклинаний"], ["Урон", "Вампиризм"], ["Здоровье", "Сопротивление магии", "Уворот"], ["Урон", "Скорость атаки", "Шанс крита"], ["Урон", "Крит урон", "Шанс крита"], ["Здоровье", "Регенерация здоровья"], ["Здоровье", "Урон", "Защита", "Скорость"], ["Скорость атаки", "Сопротивление эффектам", "Крит урон"], ["Здоровье", "Урон", "Скорость"], ["Скорость атаки"], ["Здоровье", "Регенерация маны", "Защита", "Скорость", "Крит урон", "Урон заклинаний", "Вампиризм", "Магический вампиризм"], [],
    ["Мана", "Регенерация маны", "Сопротивление магии", "Эффективность восстановления маны"], ["Урон", "Вампиризм"], ["Здоровье", "Регенерация здоровья", "Мана", "Регенерация маны", "Скорость атаки", "Сопротивление магии", "Урон заклинаний"], ["Здоровье", "Регенерация здоровья", "Урон", "Защита", "Скорость"], ["Мана", "Скорость атаки"], ["Здоровье", "Урон", "Защита", "Скорость", "Крит урон"], ["Здоровье", "Регенерация здоровья", "Мана", "Защита", "Сопротивление магии", "Эффективность лечения"], ["Регенерация здоровья", "Скорость", "Уворот"], ["Мана", "Скорость атаки", "Защита", "Сопротивление магии", "Сопротивление эффектам", "Уворот", "Крит урон", "Шанс крита", "Урон заклинаний"], ["Крит урон", "Шанс крита", "Урон заклинаний", "Манакост способностей", "Перезарядка способностей", "Дальность обзора (день)", "Дальность обзора (ночь)"], ["Урон", "Скорость атаки", "Шанс крита", "Дальность атаки (ближний бой)", "Дальность атаки (дальний бой)"], ["Здоровье", "Регенерация здоровья", "Урон", "Скорость"], ["Здоровье", "Урон", "Сопротивление магии", "Уворот", "Крит урон", "Шанс крита"], ["Регенерация маны", "Сопротивление магии", "Сопротивление эффектам"], ["Здоровье", "Регенерация маны", "Защита", "Скорость", "Крит урон", "Урон заклинаний", "Вампиризм", "Магический вампиризм"]
];
var item_bonus_num = [
    [45, 0.6], [20, 0.5], [7], [3], [1.2], [30, 0.8], [6], [], [-50, -1.5, 25], [0.9], [], [], [2.4], [30, -4], [],
    [90, 1.5, 25, 0.8], [], [12, 4], [10], [], [-12], [-70, -1.1, 30, 5], [5], [-120, 1.1, 8, 8, 10], [100, 2.4], [50, 0.7, 1.5, 7], [12, 4], [-3.8, 12], [30], [35],
    [180, 2.4, 40, 1.2, 15], [8, -10, -5], [280, 3.8, -20], [85, 2.9, 6], [60, 0.8, 3.2, -20, 8], [], [40], [40], [-5, 17], [25, 35, 6], [4.5], [-140, -0.8, 60, 10, -40], [60, 10, 40], [10], [20, 55],
    [1.2], [300, 180], [20], [12, -15, -7], [65, 1.5, 1.5], [100, 3.2, 5, 8, 8], [25, 35, 7], [-150, 1.8, 20, 10, 15, 15], [75, 1, 150, 8, -30, 3.8, 15], [70, 15], [-2, 7], [3, 50], [35], [80, 2.9, 15], [220, 2.5, 40, 2.7, 2.7, 20],
    [25, 500, 300], [-90, 55], [50, 7, 15, -15, -7], [200, 1.7, 3.8, 8, 10, 8], [80, 25], [150, -3.8, 20], [40, 40, 12], [30, 45, 10], [750, 15], [350, -40, 13.8, -25], [40, 3.8, 35], [140, 25, 45], [115], [-50, 1.8, 3.2, 18, 25, 10, 15, 20], [],
    [85, 3, 2.4, 20], [100, 30], [80, 1.5, 350, 9.5, -40, 5, 20], [1200, 25, -40, 20, -35], [-60, 180], [400, 30, 8.9, -20, 30], [560, 4, 60, 7, 3.2, 25], [4, 25, 8], [300, 50, 2.4, 5, 5, 10, 40, 15, 10], [50, 8, 40, -15, -8, 500, 300], [55, 45, 15, 40, 80], [150, 3, 30, 80], [160, 45, -3.8, 20, 60, 12], [-2.5, 13.8, 5], [-170, 2.9, 3.2, 30, 30, 12, 18, 25]
];

var cost = [
    140, 115, 135, 165, 220, 180, 140, 140, 240, 245, 200, 185, 240, 275, 160,
    250, 345, 270, 215, 470, 520, 415, 425, 375, 490, 250, 610, 465, 670, 550,
    925, 1260, 875, 720, 900, 980, 1345, 900, 770, 745, 1200, 815, 800, 770, 680,
    1120, 870, 1830, 1530, 1370, 1420, 2145, 2000, 1850, 2100, 1985, 1300, 1300, 1450, 1600,
    2750, 3380, 3750, 3000, 3120, 2670, 3300, 3700, 4000, 4250, 2800, 2970, 2680, 2670, 2500,
    4700, 5600, 6000, 5600, 4400, 5700, 5500, 4600, 4470, 4800, 5000, 4970, 4820, 4300, 5450
];
var components = [
    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
    [0, 0, 1], [], [2, 3], [2, 7], [10], [], [8, 22], [], [6, 8, 9, 22], [4, 5], [0, 6, 9], [], [], [], [],
    [0, 11, 15], [6], [24], [1, 6], [9, 20, 25], [7, 20], [2], [3, 13], [27], [17, 18, 28], [], [21], [29], [], [],
    [14, 16], [], [6, 6, 6], [31], [1, 1, 9], [3, 3, 33], [13, 17], [23], [33, 34, 40], [41], [], [29], [29], [5, 43], [4, 30],
    [46, 47], [28], [37, 48], [50], [54], [38], [35, 39], [51], [], [], [12, 13], [42], [28], [52, 58], [],
    [45, 49], [64], [53], [68, 69], [61, 72], [36, 69], [32, 59], [19, 26], [63, 70], [60, 62], [44, 66], [56, 57, 71], [65, 67], [55], [73, 74]
];
var item_rarity = [ // 0-обычный  1-необычный  2-редкий  3-эпический  4-легендарный  5-уникальный(босс)
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
];

var item_skill_name = [ // Название способности
    [], [], [], [], [], [], [], ["Отравление"], [], [], ["Блок"], ["Неиссякаемое пламя"], [], [], ["Заживление"],
    [], ["Восстановление"], [], ["Отравление"], ["Блок", "Шипы"], ["Стужа"], ["Разделение души"], ["Река крови"], ["Магия вуду"], [], [], ["Воодушевление"], [], [], [],
    ["Секрет целителя"], [], [], [], ["Ледяная вьюга"], ["Оледенение"], ["Контратака"], ["Магическое разрушение"], ["Бестелесная форма"], ["Отравление"], [], ["Разделение души"], [], ["Удар исподтишка"], [],
    ["Восстановление"], ["Всевиденье"], ["Магическая слабость"], ["Проклятие антимагии"], ["Электрошок"], [], [], ["Жертва"], ["Ледяной плащ"], ["Отречение"], ["Отражение заклинаний"], [], ["Аура волшебства"], ["Удар исподтишка"], ["Секрет целителя"],
    ["Всевиденье", "Растворение"], ["Антимагия", "Сжигание души"], ["Магическое разрушение", "Проклятие антимагии"], [], ["Проклятый медальон"], ["Священная форма"], ["Лезвие ночи", "Лунный свет"], ["Сжигание"], [], [], [], ["Ярость"], [], ["Жертва", "Удар исподтишка"], ["Связующие цепи"],
    ["Разрушение сущности", "Восстановление"], ["Проклятый меч"], ["Чародейский щит"], [], ["Антимагия", "Осквернение"], ["Выпад дракона"], ["Регенерация"], ["Блок", "Шипы", "Воодушевление"], [], ["Всевиденье", "Волшебство призмы", "Магическое разрушение"], ["Хищник", "Ночной охотник"], ["Аура волшебства", "Ярость"], ["Священная форма", "Испепеление"], ["Отражение заклинаний"], ["Связующий туман", "Фантомный удар"]
];
var item_info = [ // Описание способности
    [], [], [], [], [], [], [], ["С шансом 10% атака отравит цель"], [], [], ["С шансом 35% поглощает 10 ед. входящего урона. Эффект вдвое слабее, если герой сражается в дальнем бою"], ["Увеличивает регенерацию здоровья на 2.5 ед., если здоровье ниже 20%"], [], [], ["Мгновенно восстанавливает 40 ед. здоровья"],
    [], ["Восстанавливает 15 ед. здоровья и 5 ед. маны в секунду.<br>Здоровье и мана восстанавливаются вдвое медленнее, если в последние 3 секунды герой получал урон"], [], ["С шансом 15% атака отравит цель"], ["С шансом 35% поглощает 20 ед. входящего урона. Эффект вдвое слабее, если герой сражается в дальнем бою", "Возвращает 5% входящего урона обратно в атакующего"], ["Атаки героя снижают скорость передвижения и атаки цели на 30 ед., а также наносят дополнительный переодический урон"], ["Жертвует 70 ед. здоровья, взамен получая 30 ед. дополнительного урона и 8% вампиризма. Применение способности не может убить владельца"], ["Увеличивает вампиризм на 8%, если у героя осталось меньше 15% здоровья"], ["Увеличивает физический и магический вампиризм на 5%, если у героя осталось меньше 15% здоровья"], [], [], ["Время от времени увеличивает скорость атаки героя на 25 ед."], [], [], [],
    ["Увеличивает регенерацию здоровья на 4 ед., если здоровье ниже 25%"], [], [], [], ["Снижает скорость передвижения на 50 ед., а скорость атаки на 20 ед. всех противников в небольшом радиусе вокруг героя. Противники в радиусе ауры получают переодический урон"], ["Атаки героя снижают скорость передвижения и атаки цели на 50 ед., а также наносят дополнительный переодический урон"], ["С шансом 10% атака противника увеличит скорость атаки героя на 30 ед."], ["Любой урон от заклинаний и предметов владельца может быть критическим. Шанс и размер крита зависят от тех же параметров у героя"], ["Герой уходит в мир духов, что позволяет не получать никакого физического урона. Под действием эффекта герой не может атаковать, но получает возможность проходить сквозь препядствия"], ["С шансом 30% атака отравит цель"], [], ["Жертвует 140 ед. здоровья, взамен получая 60 ед. дополнительного урона и 25% вампиризма. Применение способности не может убить владельца"], [], ["Раз в 4 секунды увеличивает урон следующей атаки на 70%"], [],
    ["Восстанавливает 60 ед. здоровья в секунду.<br>Здоровье восстанавливается вдвое медленнее, если в последние 2 секунды герой получал урон"], ["Раскрывает невидимых юнитов поблизости"], ["Уменьшает магическое сопротивление всех противников вокруг на 25% (7 ед.)"], ["Накладывает немоту на владельца и окружающих противников"], ["Каждая атака с шансом 35% ударит противника молнией, наносящей урон и сжигающей 35 ед. маны"], [], [], ["Накладывает немоту на носителя и забирает 25 ед. здоровья в секунду. Взамен герой получает 10% шанса крита и 50% крит урона. Урон маски не может убить носителя"], ["Снижает скорость передвижения на 50 ед., а скорость атаки на 20 ед. всех противников в небольшом радиусе вокруг героя. Противники в радиусе ауры получают переодический урон"], ["Даёт 70 ед. дополнительного урона, 40% крит урона и 10% шанса крита, но снижает эффективность лечения героя на 70%"], ["Поглощает любое направленное заклинание, целью которого стал герой"], [], ["Снижает сопротивление эффектам на 15% (3.8 ед.) всех противников вокруг героя"], ["Раз в 3 секунды увеличивает урон следующей атаки на 70%"], ["Увеличивает регенерацию здоровья на 4 ед., если здоровье ниже 25%"],
    ["Раскрывает невидимых юнитов поблизости", "Уменьшает магическое сопротивление всех противников вокруг на 35% (11.2 ед.)"], ["Развеивает большинство негативных эффектов с носителя.<br>Тип развеивания: среднее", "Каждая атака сжигает 20 ед. маны противника и наносит вдвое больше чистого урона от сожённой маны."], ["Любой урон от заклинаний и предметов владельца может быть критическим. Шанс и размер крита зависят от тех же параметров у героя", "Накладывает немоту на всех окружающих противников"], [], ["Даёт 80 ед. дополнительного урона, 50% крит урона и 15% шанса крита, но снижает эффективность лечения героя на 80%"], ["Герой уходит в мир духов, что позволяет не получать никакого физического урона. Под действием эффекта герой не может атаковать, но получает возможность проходить сквозь препядствия и увеличивает регенерацию здоровья на 25 ед."], ["Атаки героя снижают скорость передвижения и атаки цели на 50 ед., а также наносят 40 ед. магического урона", "Увеличивает урон героя на 30 ед. в ночное время суток"], ["Наносит переодический урон всем окружающим противникам"], [], [], [], ["Увеличивает скорость передвижения на 20, а урон на 30 ед., если владелец получал урон в течении последних 3-х секунд"], [], ["Накладывает немоту на носителя и забирает 40 ед. здоровья в секунду. Взамен герой получает 20% шанса крита и 70% крит урона. Урон маски не может убить носителя", "Раз в 3 секунды увеличивает урон следующей атаки на 70%"], ["Накладывает оцепенение на героя и случайного противника поблизости. Применение наносит огромный урон противнику. Герой также получает урон в размере 33% урона способности. Урон способности не может убить героя"],
    ["Каждая атака с шансом 40% ударит противника молнией, наносящей урон и сжигающей 50 ед. маны", "Восстанавливает 90 ед. здоровья в секунду.<br>Здоровье восстанавливается вдвое медленнее, если в последние 2 секунды герой получал урон"], ["Даёт 100 ед. дополнительного урона, 70% крит урона и 25% шанса крита, но снижает эффективность лечения героя на 100%"], ["Снижает скорость передвижения на 60 ед., а скорость атаки на 30 ед. всех противников в небольшом радиусе вокруг героя. Противники в радиусе ауры получают переодический урон"], [], ["Развеивает большинство негативных эффектов с носителя.<br>Тип развеивания: среднее", "Каждая атака сжигает 20 ед. маны противника и наносит втрое больше чистого урона от сожённой маны. Также снижает эффективнось лечения цели на 40%"], ["С шансом 12% атака противника увеличит скорость атаки героя на 60 ед."], ["Увеличивает регенерацию здоровья на 5 ед., если здоровье ниже 30%"], ["С шансом 50% поглощает 50 ед. входящего урона. Эффект вдвое слабее, если герой сражается в дальнем бою", "Возвращает 10% входящего урона обратно в атакующего", "Время от времени увеличивает скорость атаки героя на 60 ед."], [], ["Раскрывает невидимых юнитов поблизости", "Уменьшает магическое сопротивление всех противников вокруг на 60% (30 ед.) и накладывает на них немоту", "Любой урон от заклинаний и предметов владельца может быть критическим. Шанс и размер крита зависят от тех же параметров у героя"], ["Атаки героя снижают скорость передвижения и атаки цели на 50 ед., а также наносят 40 ед. магического урона. Снижает эффективнось лечения цели на 30%", "Увеличивает урон героя на 40 ед. в ночное время суток"], ["Снижает сопротивление эффектам на 20% (5 ед.) всех противников вокруг героя", "Увеличивает скорость передвижения и урон на 30 ед., если владелец получал урон в течении последних 3-х секунд"], ["Герой уходит в мир духов, что позволяет не получать никакого физического урона. Под действием эффекта герой не может атаковать, но получает возможность проходить сквозь препядствия и увеличивает регенерацию здоровья на 25 ед.", "Наносит переодический урон всем окружающим противникам"], ["Поглощает любое направленное заклинание, целью которого стал герой"], ["Накладывает оцепенение и немоту на героя и случайного противника поблизости. Применение наносит огромный урон противнику. Герой также получает урон в размере 40% урона способности. Урон способности не может убить героя. На время действия оцепенения герой увеличивает свой шанс крита на 25%, а крит урон на 100%", "Раз в 3 секунды увеличивает урон следующей атаки на 100%"]
];
var item_damage = [ // Урон
    [], [], [], [], [], [], [], [6], [], [], [], [], [], [], [],
    [], [], [], [10], [], [18], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [15], [40], [], [], [], [25], [], [], [], [], [],
    [], [], [], [], [80], [], [], [], [20], [], [], [], [], [], [],
    [], [], [], [], [], [], [40], [40], [], [], [], [], [], [], [450],
    [140], [], [30], [], [], [], [], [], [], [], [40], [], [0, 50], [], [600, 0]
];
var item_damage_type = [ // Тип урона (0 - чистый, 1 - магический, 2 - физический)
    [], [], [], [], [], [], [], [1], [], [], [], [], [], [], [],
    [], [], [], [1], [], [1], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [1], [1], [], [], [], [1], [], [], [], [], [],
    [], [], [], [], [1], [], [], [], [1], [], [], [], [], [], [],
    [], [], [], [], [], [], [1], [1], [], [], [], [], [], [], [2],
    [1], [], [1], [], [], [], [], [], [], [], [1], [], [0, 1], [], [2]
]
var item_duration = [ // Длительность
    [], [], [], [], [], [], [], [2.5], [], [], [], [], [], [], [],
    [], [6], [], [3], [0, 0], [1.2], [6], [], [], [], [], [2], [], [], [],
    [], [], [], [], [], [1.5], [1.8], [], [4], [1.6], [], [6], [], [], [],
    [8], [], [15], [4.5], [], [], [], [8], [], [8], [], [], [], [], [],
    [0, 20], [], [0, 5], [], [8], [4], [1.4], [], [], [], [], [], [], [8, 0], [3],
    [0, 7], [8], [], [], [0, 2], [1.5], [], [0, 0, 2], [], [0, 7], [1.5], [], [4], [], [4.5, 0]
];
var item_range = [ // Дальность примнения (или радиус)
    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
    [], [], [], [], [220], [], [], [], [], [], [], [], [], [], [],
    [], [500], [400], [350], [], [], [], [], [250], [], [], [], [400], [], [],
    [700, 600], [], [0, 300], [], [], [], [], [175], [], [], [], [], [], [], [300],
    [], [], [260], [], [], [], [], [], [], [800, 350], [], [400], [0, 180], [], [300, 0]
];
var item_cd = [ // Перезарядка
    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [18],
    [], [25], [], [], [0, 0], [], [12], [], [], [], [], [6.5], [], [], [],
    [], [], [], [], [], [], [4], [], [15], [], [], [12], [], [4], [],
    [40], [], [35], [17], [], [], [], [23], [], [14], [35], [], [], [3], [],
    [0, 40], [24], [0, 18], [], [15], [14], [], [], [], [], [], [], [], [22, 3], [16],
    [0, 35], [14], [], [], [24], [3], [], [0, 0, 6], [], [0, 25], [], [], [14, 0], [30], [15, 3]
];
var item_mana = [ // Манакост
    [], [], [], [], [], [], [], [], [], [], [], [], [], [], [0],
    [], [5], [], [], [0, 0], [], [0], [], [], [], [], [0], [], [], [],
    [], [], [], [], [], [], [0], [], [25], [], [], [0], [], [0], [],
    [15], [], [60], [25], [], [], [], [0], [], [15], [0], [], [], [0], [],
    [0, 100], [120], [0, 45], [], [20], [20], [], [], [], [], [], [], [], [0, 0], [55],
    [0, 10], [20], [], [], [120], [0], [], [0, 0, 0], [], [0, 70], [], [], [20, 0], [0], [60, 0]
];
var item_type = [ // Тип способности (0 - пассивная, 1 - активируемая, 2 - автоматическая, 3 - аура)
    [], [], [], [], [], [], [], [0], [], [], [0], [0], [], [], [1],
    [], [1], [], [0], [0, 0], [0], [1], [0], [0], [], [], [2], [], [], [],
    [], [], [], [], [3], [0], [2], [], [1], [0], [], [1], [], [2], [],
    [1], [0], [1], [1], [0], [], [], [1], [3], [1], [2], [], [3], [2], [],
    [0, 1], [1, 0], [0, 1], [], [1], [1], [0, 0], [3], [], [], [], [], [], [1, 2], [1],
    [0, 1], [1], [3], [], [1, 0], [2], [], [0, 0, 2], [], [0, 1], [0, 0], [3, 0], [1, 3], [2], [1, 2]
];

var can_be_buying = [ // Можно ли купить или собрать предмет (0 - нет, 1 - да)
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

function show_item_info_for_image(element) {
    show_item_info(document.getElementsByClassName("item")[element.id.slice(1)]);
}

function show_item_info(element = document.getElementsByClassName("item")[0]) {    //  Определять какой объект вызвал за счёт координат мыши
    document.getElementsByClassName("item")[select_item].style.borderColor = "rgba(255, 255, 255, 0)"; 
    select_item = element.getElementsByClassName("item_image")[0].id;
    if(can_be_buying[select_item]) {
        document.getElementsByClassName("item")[select_item].style.borderColor = "black"; 
    }
    else {
        document.getElementsByClassName("item")[select_item].style.borderColor = "red"; 
    }
    for(var i = 0; i < item_skill_name[select_item].length; i++) {
        document.getElementsByClassName("hero_skill")[i].style.visibility = "visible";
        /*document.getElementsByClassName("hero_skill")[i].style.backgroundImage = "url(unknow_skill.png);";*/
    }
    for(var i = item_skill_name[select_item].length; i < 3; i++) {
        document.getElementsByClassName("hero_skill")[i].style.visibility = "hidden";
    }
    document.querySelector("h1").innerHTML = "(" + select_item + ") " + item_name[select_item];
    document.getElementById("gold_sum").innerHTML = cost[select_item];
    document.getElementById("item_icon_left_menu").style.backgroundImage = "url(items/" + item_eng_name[select_item] + ")";
    document.getElementById("item_icon_left_menu").style.borderColor = get_bolder_color(item_rarity[select_item]);
    document.getElementById("item_icon_left_menu").style.backgroundColor = get_bolder_color(item_rarity[select_item]);

        //  Удаление компонентов крафта
    elements_for_remove = document.getElementById("item_that_need").getElementsByClassName("item_icon");
    for(var i = 0; i < elements_for_remove.length;) {
        elements_for_remove[i].remove();
    }
        //  Удаление информации о крафтах, в которых использовался предмет
    elements_for_remove = document.getElementById("item_that_use").getElementsByClassName("item_icon");
    for(var i = 0; i < elements_for_remove.length;) {
        elements_for_remove[i].remove();
    }
        //  Добавление рецепта крафта
    for(var i = 0; i < components[select_item].length; i++) {
        let new_item = document.createElement("div");
        new_item.className = "item_icon";
        new_item.id = "k"+components[select_item][i];
        new_item.style.backgroundImage = "url(items/" + item_eng_name[components[select_item][i]] + ")";
        new_item.title = item_name[components[select_item][i]];
        new_item.style.borderColor = get_bolder_color(item_rarity[components[select_item][i]]);
        new_item.style.backgroundColor = get_bolder_color(item_rarity[components[select_item][i]]);
        new_item.addEventListener('click',
            function () {
                show_item_info_for_image(this);
            });
        document.getElementById("item_that_need").appendChild(new_item);
    }
        //  Добавление предметов, которые используют предмет
    var helper_bool = false;
    for(var i = 0; i < components.length; i++) {
        for(var j = 0; j < components[i].length; j++) {
            if(components[i][j] == select_item) {
                helper_bool = true;
                let new_item = document.createElement("div");
                new_item.className = "item_icon";
                new_item.id = "n"+i;
                new_item.style.backgroundImage = "url(items/" + item_eng_name[i] + ")";
                new_item.title = item_name[i];
                new_item.style.borderColor = get_bolder_color(item_rarity[i]);
                new_item.style.backgroundColor = get_bolder_color(item_rarity[i]);
                new_item.addEventListener('click',
                    function () {
                        show_item_info_for_image(this);
                    });
                document.getElementById("item_that_use").appendChild(new_item);
                break;
            }
        }
    }
    if(helper_bool) {
        elements_for_remove = document.getElementById("item_that_use_text").style.visibility = "visible";
    }
    else {
        elements_for_remove = document.getElementById("item_that_use_text").style.visibility = "hidden";
    }
        //  Отображения списка бонусов предмета
    elements_for_remove = document.getElementsByClassName("item_tr");
    for(var i = 0; i < elements_for_remove.length;) {
        elements_for_remove[i].remove();
    }
    for(var i = 0; i < item_bonus[select_item].length; i++) {
        let container = document.createElement("tr");
        container.className = "item_tr";
        let new_item_attribute = document.createElement("td");
        new_item_attribute.innerHTML = item_bonus[select_item][i] + ":";
        container.appendChild(new_item_attribute);

        let new_item_number = document.createElement("td");

        if(item_bonus_num[select_item][i] > 0) {
            new_item_number.innerHTML = "+";
        }
        else {
            new_item_number.innerHTML = "";
        }
        if(item_bonus[select_item][i] == "Защита" || item_bonus[select_item][i] == "Сопротивление магии" ||item_bonus[select_item][i] == "Сопротивление эффектам") {
            new_item_number.innerHTML += item_bonus_num[select_item][i] + " (" + Math.trunc((0.05*item_bonus_num[select_item][i])/(1+0.05*Math.abs(item_bonus_num[select_item][i]))*100) + "%)";
        }
        else {
            new_item_number.innerHTML += item_bonus_num[select_item][i];
        }
        if(item_bonus[select_item][i] == "Уворот" || item_bonus[select_item][i] == "Крит урон" || item_bonus[select_item][i] == "Шанс крита" ||
        item_bonus[select_item][i] == "Урон заклинаний" || item_bonus[select_item][i] == "Вампиризм" ||  item_bonus[select_item][i] == "Магический вампиризм" ||
        item_bonus[select_item][i] == "Эффективность лечения" || item_bonus[select_item][i] == "Манакост способностей" || item_bonus[select_item][i] == "Перезарядка способностей"
        || item_bonus[select_item][i] == "Эффективность восстановления маны") {
            new_item_number.innerHTML += "%"
        }
        container.appendChild(new_item_number);
        document.getElementById("hero_attribute").appendChild(container);
    }
}

function get_bolder_color(rarity) {
    switch(rarity) {
        case 1:
            return "rgba(25, 65, 245, 0.8)";
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