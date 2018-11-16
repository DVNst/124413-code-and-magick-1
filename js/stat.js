var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_SPACING = 50;

var barHeight = BAR_HEIGHT;
//типа интерльяж:
var TextHeight = Math.round(FONT_HEIGHT * 1.25);

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = FONT_HEIGHT + " PT Mono";
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + TextHeight);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + TextHeight * 2);
  
  var maxTime = getMaxElement(times);  
  
  for (var i = 0; i < players.length; i++) {

  	barHeight = (BAR_HEIGHT * times[i]) / maxTime;

  	ctx.fillStyle = '#000';
  	ctx.fillText(players[i], CLOUD_X + BAR_SPACING + (BAR_WIDTH + BAR_SPACING) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_SPACING + (BAR_WIDTH + BAR_SPACING) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - TextHeight - barHeight);

  	ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  	if (players[i] != 'Вы') {  		
  		ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '% , 50%)';  				
  	}
    
    ctx.fillRect(CLOUD_X + BAR_SPACING + (BAR_WIDTH + BAR_SPACING) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - TextHeight - barHeight, BAR_WIDTH, barHeight);
  }
};
