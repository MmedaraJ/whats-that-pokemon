var HTMLString = '';
for(var i=0; i<151; i++){
    HTMLString += '<img id="' + (i+1) + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + (i+1) + '.png"></img>'
}

function displayInfo(name, imgLink, types, height, weight){
    $('#name').text(name);
    $('#image').attr("src", imgLink);
    $('#types').text('Types');
    $('#list').html("");
    for(var i=0; i<types.length; i++) $('#list').append('<li>' + types[i].type.name + '</li>');
    $('#height').text('Height');
    $('#height_no').text(height);
    $('#weight').text('Weight');
    $('#weight_no').text(weight);
}

function getInfo(id){
    $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res){
        var name = res.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        var imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png";
        var types = res.types;
        var height = res.height;
        var weight = res.weight;
        displayInfo(name, imgLink, types, height, weight);
    }, "json");
}

$(document).ready(function(){
    $('.images').append(HTMLString);
    $('img').click(function(){
        getInfo($(this).attr("id"));
    });
})