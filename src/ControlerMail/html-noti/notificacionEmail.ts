export const EmailPagoRechazado = (message: string, usuario: string, id_factura: string): string =>
{
    return(
        `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body> 
                    <div class="col-11">
                        <div style="font-weight: bold;" class="col-10">
                            <h1>BookShop</h1>
                            <p>Erausquin 275</p>
                            <p>Concepcion del Uruguay</p>
                        </div>
                        <hr />
                        <div class="row fact-info mt-3">
                            <div class="col-3">
                                <h3>Estado de COMPRA:</h3>
                                <p>${message}</p>
                                <h5>Comprador</h5>
                                <p>${usuario}</p>
                                <h5>N° de factura</h5>
                                <p>${id_factura}</p>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`)
}

export const EmailPagoAprobado = (message: string, usuario: string, envio: string, id_factura: string, fecha: string, total: number): string =>{

    return(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body> 
            <div class="col-11">
                <div style="font-weight: bold;" class="col-10">
                    <h1>BookShop</h1>
                    <p>Erausquin 275</p>
                    <p>Concepcion del Uruguay</p>
                </div>
            
                <hr />
            
                <div class="row fact-info mt-3">
                    <div class="col-3">
                        <h3>Estado de COMPRA: </h3>
                        <p>${message}</p>

                        <h5>Comprador: </h5>
                        <p>${usuario}</p>
                    </div>
                    <div class="col-3">
                        <h5>Direccion: </h5>
                        <p>${envio}</p>
                    </div>
                    <div class="col-3">
                        <h5>N° de factura</h5>
                        <p>${id_factura}</p>
                        <h5>TOTAL</h5>
                        <p>$${total}</p>
                        <h5>Fecha</h5>
                        <p>${fecha}</p>
                    </div>
                </div>
            </div>
        </body>
</html>
        `
    )
}


export const RecoveryPassword = (code: string) =>{
    return (
        `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body> 
                    <div class="col-11">
                        <div style="font-weight: bold;" class="col-10">
                            <h1>BookShop</h1>
                            <p>Erausquin 275</p>
                            <p>Concepcion del Uruguay</p>
                        </div>
                    
                        <hr />
                        <div class="row fact-info mt-3">
                            <h2>Solicitud de cambio de contraseña en BookShop</h2>
                            <p>Su contraseña para poder acceder es: ${code}</p>
                            <h3>Continua comprando en Book Shop</h3>
                        </div>
                    </div>
                </body>
            </html>
        `
    )
}