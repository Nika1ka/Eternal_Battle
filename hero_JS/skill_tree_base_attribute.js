// 8 + 2 красных
// 6 + 1 зелёных
// 5 фиолетовых
// 9 + 1 синих

var skill_tree_attribute_bonus = [
    "Здоровье", "Регенерация здоровья", "Защита", "Сопротивление магии", "Сопротивление эффектам", "Уворот", "Эффективность лечения", "Получаемый урон", "Сопротивление замедлению", "хп+мана реген",
    "Урон", "Скорость атаки", "Крит урон", "Шанс крита", "Урон по постройкам", "Наносимый урон", "+урон, +вамп, -хп",
    "Скорость", "Дальность обзора (день)", "Дальность обзора (ночь)", "Вампиризм", "Магический вампиризм",
    "Мана", "Регенерация маны", "Урон заклинаний", "Эффективность восстановления маны",
    "Перезарядка способности", "Манакост способности", "Урон способности", "Длительность действия", "Дальность применения", "+урон закл, +манакост"
    
];
var skill_tree_attribute_bonus_value = [
    25, 0.2, 0.4, 0.4, 0.6, 0.5, 1, -0.3, 2.5, 0,
    1.5, 4, 3, 0.5, 2.5, 0.5, 0,
    2.5, 30, 20, 0.4, 0.5,
    10, 0.1, 1, 0.7,
    -1, -1.5, 2.5, 1.5, 2, 0
    
];
var skill_tree_attribute_base_value = [
    50, 0.6, 1.2, 1.2, 1.6, 1.5, 2, -0.9, 5, 0,
    5, 10, 6, 2, 5, 0.5, 0,
    7.5, 100, 50, 1, 1.5, 
    25, 0.2, 3, 1.4, 
    -4, -5, 7.5, 5, 6, 0
    
];
var skill_tree_attribute_name = [
    "Крепкое здоровье", "Регенерация", "Прочная броня", "Перенаправление", "Магические знания", "Проворство", "Сила жизни", "Страж света", "Ледяная кровь", "Охранный амулет",
    "Крепкая рука", "Вихрь", "Мощь", "Точно в цель", "По кирпичикам", "Внутренний огонь", "Сговор с тьмой",
    "Скорость", "Орлиный взор", "Око ночи", "Клыки вампира", "Поглощение", 
    "Бутыль маны", "Восстановление", "Фолиант знаний", "Фонтан маны", 
    "Ускоренные чары", "Эффективность", "Вспышка магии", "Долгосрочный договор", "Далёкие поля", "Концентрация"
    
];
var skill_tree_attribute_images = [
    "hp", "hp_regeneration", "phisical_defense", "magic_defense", "status_defense", "dodge", "heal_efficiency", "take_damage", "slowdown_defense", "hp_mana_regeneration",
    "damage", "attack_speed", "critical_damage", "critical_chance", "building_damage", "deal_damage", "damage_large",
    "speed", "day_vision", "night_vision", "phisical_vampire", "magic_vampire", 
    "mana", "mana_regeneration", "all_spells_damage", "mana_regeneration_efficiency", 
    "cd_reduction", "mana_reduction", "spell_damage", "spell_duration", "cast_range", "spell_large_damage"
    
];

/*var skill_tree_attribute_bonus = [
    "Здоровье", "Регенерация здоровья", "Мана", "Регенерация маны", "Урон",
    "Скорость атаки", "Защита", "Сопротивление магии", "Сопротивление эффектам", "Скорость", 
    "Дальность обзора (день)", "Дальность обзора (ночь)", "Уворот", "Крит урон", "Шанс крита", 
    "Урон заклинаний", "Вампиризм", "Магический вампиризм", "Эффективность лечения", "Эффективность восстановления маны", "Урон по постройкам", 
    "Перезарядка способности", "Манакост способности", "Урон способности", "Длительность действия", "Дальность применения",
    "Получаемый урон", "Наносимый урон"
];
var skill_tree_attribute_bonus_value = [
    25, 0.2, 10, 0.1, 1.5,
    4, 0.4, 0.4, 0.6, 2.5,
    30, 20, 0.5, 3, 0.5,
    1, 0.4, 0.5, 1, 0.7, 2.5,
    -1, -1.5, 2.5, 1.5, 2,
    -0.3, 0.5
];
var skill_tree_attribute_base_value = [
    50, 0.6, 25, 0.2, 5,
    10, 1.2, 1.2, 1.6, 7.5,
    100, 50, 1.5, 6, 2,
    3, 1, 1.5, 2, 1.4, 5,
    -4, -5, 7.5, 5, 6,
    -0.9, 0.5
];
var skill_tree_attribute_name = [
    "Крепкое здоровье", "Регенерация", "Бутыль маны", "Восстановление", "Крепкая рука",
    "Вихрь", "Прочная броня", "Перенаправление", "Магические знания", "Скорость", 
    "Орлиный взор", "Око ночи", "Проворство", "Мощь", "Точно в цель", 
    "Фолиант знаний", "Клыки вампира", "Поглощение", "Сила жизни", "Фонтан маны", "По кирпичикам", 
    "Ускоренные чары", "Эффективность", "Вспышка магии", "Долгосрочный договор", "Далёкие поля",
    "Страж света", "Внутренний огонь"
];
var skill_tree_attribute_images = [
    "hp", "hp_regeneration", "mana", "mana_regeneration", "damage",
    "attack_speed", "phisical_defense", "magic_defense", "status_defense", "speed",
    "day_vision", "night_vision", "dodge", "critical_damage", "critical_chance",
    "all_spells_damage", "phisical_vampire", "magic_vampire", "heal_efficiency", "mana_regeneration_efficiency", "building_damage",
    "cd_reduction", "mana_reduction", "spell_damage", "spell_duration", "cast_range",
    "take_damage", "deal_damage"
];*/