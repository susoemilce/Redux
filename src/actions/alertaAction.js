import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types/index";
//Muestre una alerta
export function mostrarAlerta(alerta){
    return (dispatch)=>{
        dispatch(crearAlerta(alerta))
    }
};
export function ocultarAlertaAction(){
    return (dispatch)=>{
        dispatch(ocultarAlerta())
    }
};

const crearAlerta= alerta =>({
    type:MOSTRAR_ALERTA,
    payload:alerta
})

const ocultarAlerta= () =>({
    type:OCULTAR_ALERTA
})
