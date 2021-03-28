
//Start signature to Callback event to VA_VABUTTONXXWLWDV_921369
task.executeCommandCallback.VA_VABUTTONXXWLWDV_921369 = function(entities, executeCommandCallbackEventArgs) {
    console.log("Ejecutando callback...");
    
    let nav = executeCommandCallbackEventArgs.commons.api.navigation; 
    nav.closeModal({});
    
    console.log("Fin callback...");
};
