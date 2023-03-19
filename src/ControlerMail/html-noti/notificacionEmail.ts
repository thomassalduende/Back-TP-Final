export const notificacionEmail = (message: string, id_factura: string): string =>
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
            <div style="color: black; text-align: start; font-family: sans-serif; font-weight: 100s;">
                <div style="width: 100%; background-color: white;">
                    <p>
                        <span  style="font-weight: bold; font-size: 30px;">BookShop</span>
                    </p>
                </div>
        
                <div style="margin-top: 20px; width: 100%;">
                    <p>${message}</p>
                    <hr style="margin-top: 3rem; color: gray; background-color: gray;"/>
                    <p style="font-weight: bold; font-size: 25px;">Factura: ${id_factura}</p>
                </div>
            </div>
        </body>
        </html>`
    )
}

export const notificacionEmail2 = (message: string, usuario: string, envio: string, id_factura: string, fecha: string): string =>{

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