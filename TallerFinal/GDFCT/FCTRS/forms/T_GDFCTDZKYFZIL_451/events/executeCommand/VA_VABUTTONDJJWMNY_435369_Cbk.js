
//Start signature to Callback event to VA_VABUTTONDJJWMNY_435369
task.executeCommandCallback.VA_VABUTTONDJJWMNY_435369 = function(entities, executeCommandCallbackEventArgs) {
    console.log("Ejecutando callback...");
    
    let nav = executeCommandCallbackEventArgs.commons.api.navigation; 
    nav.closeModal({});
    
    console.log("Fin callback...");
};
