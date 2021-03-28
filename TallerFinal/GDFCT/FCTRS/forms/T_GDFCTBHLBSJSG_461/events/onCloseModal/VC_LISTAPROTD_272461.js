
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: ListaProductosForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){
    console.log("Ejecutando onCloseModal...");
    
    onCloseModalEventArgs.commons.execServer = false;
    
    if(onCloseModalEventArgs.closedViewContainerId=='VC_PRODUCTOYU_303451'){
        onCloseModalEventArgs.commons.api.grid.refresh('QV_LL78_JDE11');
    }
    
    console.log("Ejecucion finalizada");

};