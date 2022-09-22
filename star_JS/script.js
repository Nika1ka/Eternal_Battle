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


var slider = document.getElementById("myRange");
slider.oninput = function() {
    document.getElementById("slider_lvl").innerHTML = "lvl " + this.value;
}