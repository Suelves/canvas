
/**
* @fileoverview crea un punt en el pla
* @author Sergi Suelves
* @version 0.6
*/

/**
* @constructor
* @brief Inicialitza l'objecte
*/
function Point(x,y){
	this.x = x;
	this.y = y;
}


/**
 * @method fill
 * @public
 * @param  {obj} ctx el context del canvas
 */
Point.prototype.fill = function(ctx){
	ctx.fillStyle = "#04FF00";
	ctx.fillRect(this.x,this.y,4,4);
}
