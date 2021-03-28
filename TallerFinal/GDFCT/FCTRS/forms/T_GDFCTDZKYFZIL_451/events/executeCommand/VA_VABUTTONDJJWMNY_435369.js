

//Entity: Productos
//Productos. (Button) View: ProductoForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONDJJWMNY_435369 = function(  entities, executeCommandEventArgs ) {
    console.log("Validando que los campo esten llenos...");
    
    //executeCommandEventArgs.commons.serverParameters.Producto = true;
    let codigo = entities.Productos.codigo;
    let nombre = entities.Productos.nombre;
    let precio = entities.Productos.precio;
    let stock = entities.Productos.stock;
    
    if (codigo == "" || nombre == "" || precio == 0 || stock == 0){
        console.log("campos incompletos...");
        
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("GDFCT.MSG_GDFCT_DEBELLERO_22169");
        executeCommandEventArgs.commons.execServer = false;
        
    }else{
        console.log("Campos completos...");
        executeCommandEventArgs.commons.execServer = true;
    }

    console.log("Validacion finalizada...");

};