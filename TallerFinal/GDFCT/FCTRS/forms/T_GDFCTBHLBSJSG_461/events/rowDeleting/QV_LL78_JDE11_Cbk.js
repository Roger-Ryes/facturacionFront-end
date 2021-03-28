
//Start signature to Callback event to QV_LL78_JDE11
task.gridRowDeletingCallback.QV_LL78_JDE11 = function(entities, gridRowDeletingCallbackEventArgs) {
    
    gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_LL78_JDE11');
    
};
