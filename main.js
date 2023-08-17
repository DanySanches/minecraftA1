
 // obteremos a referência do canvas usando fabric.Canvas() e a armazenaremos dentro de uma variável chamada canvas.
var canvas = new fabric.Canvas('myCanvas'); //complete o paranteses entre as ' com o  id 'myCanvas'

player_x = 10; //defina a coordenada x do jogador
player_y = 10; //defina a coordenada y do jogador

block_image_width = 30;   //defina a  largura do  bloco como 30
block_image_height = 30;  // defina a altura do  bloco como  30

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("jogador.png", function(Img) {//defina a imagem como jogador.png
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)//coloque a váriavel get_image entre parenteses para que ela carregue a peça de acordo com a  tecla pressionada

{
	fabric.Image.fromURL(get_image, function(Img) { //defina a biblioteca fabric antes do ponto.Image
	block_image_object = Img ; //armaze Img na  váriavel
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});//defina as coodrnada da img top:player_y,left:player_x
	canvas.add(block_image_object); //adicione a função canvas.add
	});

}


	