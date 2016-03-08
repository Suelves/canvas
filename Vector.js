
/**
* @fileoverview crea un vector en el pla (2d). des d'un punt inicial a un final.
* @author Sergi Suelves
* @version 0.6
*/

/**
* @constructor
* @brief Inicialitza l'objecte
*/
function Vector(Xi, Yi, Xf, Yf){
	this.Xi = Xi;
	this.Yi = Yi;
	this.Xf = Xf;
	this.Yf = Yf;	
}

/**
 * @method fill
 * @public
 * @param  {obj} ctx el context del canvas
 */
Vector.prototype.fill = function(ctx){
		
		ctx.beginPath();
		ctx.fillStyle = "#04FF00";
      	ctx.moveTo(this.Xi, this.Yi);
      	ctx.lineTo(this.Xf, this.Yf);

      	ctx.stroke();
      	ctx.fillRect(this.Xf, this.Yf,8,8);
}

/**
 * @method setXf
 * @public
 * @param  {double} x valor del eix de les x
 */
Vector.prototype.setXf = function(x){
	this.Xf = x;
}


/**
 * @method setYf
 * @public
 * @param  {double} y valor del eix de les y
 */
Vector.prototype.setYf = function(y){
	this.Yf = y;
}

/**
 * @method setXi
 * @public
 * @param  {double} x valor del eix de les x
 */
Vector.prototype.setXi = function(x){
	this.Xi = x;
}

/**
 * @method setYi
 * @public
 * @param  {double} x valor del eix de les x
 */
Vector.prototype.setYi = function(y){
	this.Yi = y;
}
