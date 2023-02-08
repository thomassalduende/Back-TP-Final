import { SendFactura } from "../../../TypesDefs/SendFactura";
import { getAllFactura } from "../../../TypeOrm/Querys/Factura/getAllFActura";
import { getFacturasFecha } from "../../../TypeOrm/Querys/Factura/getFacturasFecha";
import { getFacturaID } from "../../../TypeOrm/Querys/Factura/getFacturaId";


async function GetFaturaFecha(fechaMenor: string, fechaMayor: string) {

    const message = new SendFactura()

    try {
        const factura = await getFacturasFecha(fechaMenor, fechaMayor)

        message.message = 'Facturas obtenidas'
        message.success = true;
        message.factura = factura

        return message;

    }catch(error: any){
        message.message = error;
        message.success = false;

        return message;
    }  
}

async function GetFacturaID(id: number) {

    const message = new SendFactura()

    try{
        const factura = await getFacturaID(id)

        message.message = 'Factura obtenida'
        message.success = false;
        message.factura = factura

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}

async function GetAllFacturas() {

    const message = new SendFactura()

    try{
        const factura = await getAllFactura()

        message.message = 'Factura obtenida'
        message.success = false;
        message.factura = factura

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
    
}


export async function getFacturas(args: any) {

    if((args.fechaMenor && args.fechaMayor) && (args.fechaMenor != '' && args.fechaMayor != '')){

        return await GetFaturaFecha(args.fechaMenor, args.fechaMayor)

    }else if((args.id) && (args.id != '')){

        return await GetFacturaID(args.id)
    }
    
    return await GetAllFacturas()
}