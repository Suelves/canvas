/**
* Retruns true if current date is between dateStart and dateEnd
* @param fechaInicio 'yyyy-mm-dd hh:mm:ss
* @param fechaFin 'yyyy-mm-dd hh:mm:ss
* return bool
*/
function esVigente(fechaInicio, fechaFin)
{
	this.fecha = new Date();
	this.inicio = new Date(fechaInicio);
	this.fin = new Date(fechaFin);

	if (this.fecha < this.fin && this.fecha > this.inicio) return true;
	else return false
}
