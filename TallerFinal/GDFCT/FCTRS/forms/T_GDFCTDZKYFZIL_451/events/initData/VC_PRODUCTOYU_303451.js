
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ProductoForm
task.initData.VC_PRODUCTOYU_303451 = function (entities, initDataEventArgs){
    console.log("Configurando vista...");
    
    initDataEventArgs.commons.execServer = false;
    let viewS = initDataEventArgs.commons.api.viewState;
    
    if(entities.Producto.codigo==null || entities.Producto.codigo==""){
        //Hago visible el boton Guardar
        viewS.show('VA_VABUTTONDJJWMNY_435369');
        viewS.hide('VA_VABUTTONXXWLWDV_921369');
        
        //Habilito el campo codigo
        viewS.readOnly('VA_CODIGOSNATEDXHE_333369', false);
    }else{
        //Hago visible el boton Actualizar
        viewS.hide('VA_VABUTTONDJJWMNY_435369');
        viewS.show('VA_VABUTTONXXWLWDV_921369');
        
        //Deshabilito el campo codigo
        viewS.readOnly('VA_CODIGOSNATEDXHE_333369', true);
    }
    
    console.log("Ejecucion completa...");
};