function show_skill(skill = 1) {
    if(skills_name[select_character].length < skill) {
        return;
    }
    document.getElementById("info_ability").style.visibility = "visible";
    document.getElementById("ability_name").innerHTML = skills_name[select_character][skill-1];
    document.getElementById("info_ability").style.top = 240 + "px";
    document.getElementById("info_ability").style.left = document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().left + document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().width + 10 + "px";
    document.getElementById("ability_about").innerHTML = skills_info[select_character][skill-1];
    switch(skills_type[select_character][skill-1]) {
        case 1:
            document.getElementById("ability_type").innerHTML = "Тип: активируемая";
            break;
        case 2:
            document.getElementById("ability_type").innerHTML = "Тип: автоматическая";
            break;
        case 3:
            document.getElementById("ability_type").innerHTML = "Тип: аура";
            break;
        default:
            document.getElementById("ability_type").innerHTML = "Тип: пассивная";
            break;
    }
    if(skills_damage[select_character][skill-1]) {
        document.getElementById("hidden1").style.display = "table-row";
        document.getElementById("ability_damage").innerHTML = "Урон: " + skills_damage[select_character][skill-1];
        if(skills_damage_type[select_character][skill-1] == 1) {
            document.getElementById("ability_damage_type").innerHTML = "Тип: магический";
        }
        else if(skills_damage_type[select_character][skill-1] == 2) {
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

    if(skills_duration[select_character][skill-1]) {
        document.getElementById("hidden2").style.display = "table-row";
        document.getElementById("skills_duration").innerHTML = "Длительность: " + skills_duration[select_character][skill-1] + " cек.";
    }
    else {
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("skills_duration").innerHTML = ""
    }

    if(skills_range[select_character][skill-1]) {
        document.getElementById("hidden3").style.display = "table-row";
        if(skills_type[select_character][skill-1] == 3) {
            document.getElementById("skills_range").innerHTML = "Радиус действия: " + skills_range[select_character][skill-1] + " ед.";
        }
        else {
            document.getElementById("skills_range").innerHTML = "Дальность примнения: " + skills_range[select_character][skill-1] + " ед.";
        }
    }
    else {
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("skills_range").innerHTML = ""
    }
    if(skills_type[select_character][skill-1] == 1) {
        document.getElementById("hidden4").style.display = "table-row";
        document.getElementById("ability_cd").innerHTML = "Перезарядка: " + skills_cd[select_character][skill-1] + " cек.";
        document.getElementById("ability_mana").innerHTML = "Мана: " + skills_mana[select_character][skill-1];
    }
    else {
        document.getElementById("hidden4").style.display = "none";
    }
}

function hidden_skill() {
    document.getElementById("info_ability").style.visibility = "hidden";
}

function create_character_list() {
    let element = document.getElementById("main_content");
    for(var i = 0; i < character_name.length; i++) {
        let container = document.createElement("div");
        container.className = "character";
        container.addEventListener('click',
            function () {
                show_character_info(this);
        });
        switch(character_rarity[i]) {
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
        let Character_image = document.createElement("div");
        Character_image.className = "character_image";
        Character_image.style.backgroundImage = "url(unknow_character.png)";
    
        let Character_name = document.createElement("div");
        Character_name.id = i;
        Character_name.className = "character_name";
        Character_name.innerHTML = character_name[i];
    
        container.appendChild(Character_image);
        container.appendChild(Character_name);

        element.append(container);
    }
}