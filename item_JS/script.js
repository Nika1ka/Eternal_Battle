function show_item_skill(skill = 1) {
    if(item_skill_name[select_item].length < skill) {
        return;
    }
    document.getElementById("info_ability").style.visibility = "visible";
    document.getElementById("ability_name").innerHTML = item_skill_name[select_item][skill-1];
    document.getElementById("info_ability").style.top = 130 + "px";
    document.getElementById("info_ability").style.left = document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().left + document.getElementsByClassName("hero_skill")[skill - 1].getBoundingClientRect().width + 10 + "px";
    document.getElementById("ability_about").innerHTML = item_info[select_item][skill-1];
    switch(item_type[select_item][skill-1]) {
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
    if(item_damage[select_item][skill-1]) {
        document.getElementById("hidden1").style.display = "table-row";
        document.getElementById("ability_damage").innerHTML = "Урон: " + item_damage[select_item][skill-1];
        if(item_damage_type[select_item][skill-1] == 1) {
            document.getElementById("ability_damage_type").innerHTML = "Тип: магический";
        }
        else if(item_damage_type[select_item][skill-1] == 2) {
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

    if(item_duration[select_item][skill-1]) {
        document.getElementById("hidden2").style.display = "table-row";
        document.getElementById("skills_duration").innerHTML = "Длительность: " + item_duration[select_item][skill-1] + " cек.";
    }
    else {
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("skills_duration").innerHTML = ""
    }

    if(item_range[select_item][skill-1]) {
        document.getElementById("hidden3").style.display = "table-row";
        document.getElementById("skills_range").innerHTML = "Радиус действия: " + item_range[select_item][skill-1] + " ед.";
    }
    else {
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("skills_range").innerHTML = ""
    }
    if(item_type[select_item][skill-1] == 1 || item_type[select_item][skill-1] == 2) {
        document.getElementById("hidden4").style.display = "table-row";
        document.getElementById("ability_cd").innerHTML = "Перезарядка: " + item_cd[select_item][skill-1] + " cек.";
        document.getElementById("ability_mana").innerHTML = "Мана: " + item_mana[select_item][skill-1];
    }
    else {
        document.getElementById("hidden4").style.display = "none";
    }
}

function hidden_skill() {
    document.getElementById("info_ability").style.visibility = "hidden";
}

var item_tier = ["Обычные", "Необычные", "Редкие", "Эпические", "Легендарные", "Божественные", "Уникальные"];
function create_item_list() {
    let element = document.getElementById("main_content");
    for(var i = 0; i < item_name.length; i++) {
        if(i % 18 == 0) {
            let Item_br = document.createElement("div");
            Item_br.className = "br_element";
            Item_br.innerHTML = "" + item_tier[(i / 18)] +  " предметы";
            element.append(Item_br);
        }
        let container = document.createElement("div");
        container.className = "item";
        container.addEventListener('click',
            function () {
                show_item_info(this);
        });

        switch(item_rarity[i]) {
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
        let Item_image = document.createElement("div");
        Item_image.className = "item_image";
        Item_image.id = i;
        if(can_be_buying[i]) {
            Item_image.style.borderColor = "black";
        }
        else {
            Item_image.style.borderColor = "red";
        }
        Item_image.style.backgroundImage = "url(items/" + item_eng_name[i] + ")";

    
        let Item_name = document.createElement("div");
        Item_name.className = "item_name";
        Item_name.innerHTML = item_name[i];
    


        container.appendChild(Item_image);
        container.appendChild(Item_name);

        element.append(container);

    }
}