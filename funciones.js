document

const boton = document.createElement('button')
boton.innerText = 'Cotiza tu web aquí'
console.log(boton)

const divCotizador = document.getElementById('botonCotizador')
divCotizador.append(boton)
console.log(divCotizador)

const boton1 = document.querySelector('button')
boton1.addEventListener('click',clickCotizador)

function clickCotizador(){
    detalle = []
    let nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
    while(nombreCliente === ''){
        alert('Por favor ingresa tu nombre')
        nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
    }
    alert('¡Un gusto conocerte '+nombreCliente+'!')
    let ingresoCorreo = prompt('Por favor, ingresa tu correo electrónico:')
    while(ingresoCorreo === ''){
        alert('No has ingresado una dirección de correo electrónico.');
        ingresoCorreo = prompt('Por favor, ingresa tu correo electrónico:')
    }
    alert('A continuación se te presentarán algunas preguntas. Por favor responde utilizando el número de la opción que desees.')
    let tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \n1. Blog \n2. Ecommerce \n3. Landing page')
    
    // Variables
    montoBase = 0
    valorPrimeraOpcion = 0
    valorSegundaOpcion = 0
    valorTerceraOpcion = 0
    valorCuartaOpcion = 0
    valorQuintaOpcion = 0
    valorSextaOpcion = 0
    
    while((tipoWeb !== '1') && (tipoWeb !== '2') && (tipoWeb !== '3')){
        alert('Por favor, ingresa un número correcto')
        tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \n1. Blog \n2. Ecommerce \n3. Landing page')
    } 
    
    if(tipoWeb === '1'){
        montoBase = 150000
        tipoWeb = 'Blog'
        valorInicial = 'Monto base'
        detalle.unshift(valorInicial)
        detalle.push(montoBase)
        let primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \n1. Noticias \n2. Viajes \n3. Recetas \n4. Bitácora \n5. Cine y entretenimiento \n6. Otro')
        while((primeraOpcionBlog !== '1') && (primeraOpcionBlog !== '2') && (primeraOpcionBlog !== '3') && (primeraOpcionBlog !== '4') && (primeraOpcionBlog !== '5') && (primeraOpcionBlog !== '6')){
            alert('Ingresa una opción válida')
            primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \n1. Noticias \n2. Viajes \n3. Recetas \n4. Bitácora \n5. Cine y entretenimiento \n6. Otro')
        } if(primeraOpcionBlog === '6'){
            prompt('Cuéntanos sobre qué es tu blog: ')
        }
        let segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \n1. De 1 a 5 secciones. \n2. De 6 a 10 secciones. \n3. Más de 10 secciones.')
        while((segundaOpcionBlog !== '1') && (segundaOpcionBlog !== '2') && (segundaOpcionBlog !== '3')){
            alert('Ingresa una opción válida')
            segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \n1. De 1 a 5 secciones. \n2. De 6 a 10 secciones. \n3. Más de 10 secciones.')
        } if(segundaOpcionBlog === '1'){
            segundaOpcionBlog = 'De 1 a 5 secciones'
            valorSegundaOpcion = 50000
        } else if(segundaOpcionBlog === '2'){
            segundaOpcionBlog = 'De 6 a 10 secciones'
            valorSegundaOpcion = 75000
        } else if(segundaOpcionBlog === '3'){
            segundaOpcionBlog = 'Más de 10 secciones'
            valorSegundaOpcion = 100000
        }
        detalle.push(segundaOpcionBlog)
        detalle.push(valorSegundaOpcion)
        let terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \n1. De 1 a 10 entradas mensuales. \n2. De 11 a 20 entradas mensuales. \n3. Más de 20 entradas mensuales.')
        while((terceraOpcionBlog !== '1') && (terceraOpcionBlog !== '2') && (terceraOpcionBlog !== '3')){
            alert('Ingresa una opción válida')
            terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \n1. De 1 a 10 entradas mensuales. \n2. De 11 a 20 entradas mensuales. \n3. Más de 20 entradas mensuales.')
        } if(terceraOpcionBlog === '1'){
            terceraOpcionBlog = 'De 1 a 10 entradas mensuales'
            valorTerceraOpcion = 50000
        } else if(terceraOpcionBlog === '2'){
            terceraOpcionBlog = 'De 11 a 20 entradas mensuales'
            valorTerceraOpcion = 75000
        } else if(terceraOpcionBlog === '3'){
            terceraOpcionBlog = 'Más de 20 entradas mensuales'
            valorTerceraOpcion = 100000
        }
        detalle.push(terceraOpcionBlog)
        detalle.push(valorTerceraOpcion)
        let cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \n1. Sí \n2. No')
        while((cuartaOpcionBlog !== '1') && (cuartaOpcionBlog !== '2')){
            alert('Ingresa una opción correcta')
            cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \n1. Sí \n2. No')
        } if(cuartaOpcionBlog === '1'){
            cuartaOpcionBlog = 'El blog contará con un foro'
            valorCuartaOpcion = 100000
        } else{
            cuartaOpcionBlog = 'El blog no contará con un foro'
            valorCuartaOpcion = 0
        }
        detalle.push(cuartaOpcionBlog)
        detalle.push(valorCuartaOpcion)
    }
    
    else if(tipoWeb === '2'){
        montoBase = 250000
        tipoWeb = 'Ecommerce'
        valorInicial = 'Monto base'
        detalle.unshift(valorInicial)
        detalle.push(montoBase)
        primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \n1. Tecnología \n2. Servicios \n4. Alimentos \n5. Deco \n6. Juguetes \n7. Otro')
        while((primeraOpcionEcommerce !== '1') && (primeraOpcionEcommerce !== '2') && (primeraOpcionEcommerce !== '3') && (primeraOpcionEcommerce !== '4') && (primeraOpcionEcommerce !== '5') && (primeraOpcionEcommerce !== '6') && (primeraOpcionEcommerce !== '7')){
            alert('Ingrese una opción correcta')
            primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \n1. Tecnología \n2. Servicios \n4. Alimentos \n5. Deco \n6. Juguetes \n7. Otro')
        } if(primeraOpcionEcommerce === '7'){
            prompt('Ingresa sobre qué es tu marca')
        }
        let segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \n1. De 1 a 20 productos. \n2. De 21 a 50 productos. \n3. Más de 50 productos.')
        while((segundaOpcionEcommerce !== '1') && (segundaOpcionEcommerce !== '2') && (segundaOpcionEcommerce !== '3')){
            alert('Ingrese una opción correcta')
            segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \n1. De 1 a 20 productos. \n2. De 21 a 50 productos. \n3. Más de 50 productos.')
        } if(segundaOpcionEcommerce === '1'){
            segundaOpcionEcommerce = 'De 1 a 20 productos'
            valorSegundaOpcion = 0
        } else if(segundaOpcionEcommerce === '2'){
            segundaOpcionEcommerce = 'De 20 a 50 productos'
            valorSegundaOpcion = 100000
        } else if(segundaOpcionEcommerce === '3'){
            segundaOpcionEcommerce = 'Más de 50 productos'
            valorSegundaOpcion = 150000
        }
        detalle.push(segundaOpcionEcommerce)
        detalle.push(valorSegundaOpcion)
        let terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \n1. Sí \n2. No')
        while((terceraOpcionEcommerce !== '1') && (terceraOpcionEcommerce !== '2')){
            alert('Ingrese una opción correcta')
            terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \n1. Sí \n2. No')
        } if(terceraOpcionEcommerce === '1'){
            terceraOpcionEcommerce = 'Cuento con fotografías profesionales de los productos'
            valorTerceraOpcion
        } else if(terceraOpcionEcommerce === '2'){
            terceraOpcionEcommerce = 'Necesito fotografías profesionales de los productos'
            valorTerceraOpcion = 100000
        }
        detalle.push(terceraOpcionEcommerce)
        detalle.push(terceraOpcionEcommerce)
        let cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \n1. Sí \n2. No')
        while((cuartaOpcionEcommerce !== '1') && (cuartaOpcionEcommerce !== '2')){
            alert('Ingrese una opción correcta')
            cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \n1. Sí \n2. No')
        } if(cuartaOpcionEcommerce === '1'){
            cuartaOpcionEcommerce = 'Mis clientes necesitan loguearse para comprar'
            valorCuartaOpcion = 50000
        } else if(cuartaOpcionEcommerce === '2'){
            cuartaOpcionEcommerce = 'Mis clientes no necesitan loguearse para comprar'
            valorCuartaOpcion
        }
        detalle.push(cuartaOpcionEcommerce)
        detalle.push(valorCuartaOpcion)
        let quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \n1. Sí \n2. No')
        while((quintaOpcionEcommerce !== '1') && (quintaOpcionEcommerce !== '2')){
            alert('Ingrese una opción correcta')
            quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \n1. Sí \n2. No')
        } if(quintaOpcionEcommerce === '1'){
            quintaOpcionEcommerce = 'Mis clientes necesitarán asistente virtual para realizar sus compras'
            valorQuintaOpcion = 50000
        } else if(quintaOpcionEcommerce === '2'){
            quintaOpcionEcommerce = 'Mis clientes no necesitarán asistente virtual para realizar sus compras'
            valorQuintaOpcion
        }
        detalle.push(quintaOpcionEcommerce)
        detalle.push(valorQuintaOpcion)
        let sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \n1. Sí \n2. No')
        while((sextaOpcionEcommerce !== '1') && (sextaOpcionEcommerce !== '2')){
            alert('Ingrese una opción correcta')
            sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \n1. Sí \n2. No')
        }
    }
    
    else if(tipoWeb === '3'){
        montoBase = 150000
        tipoWeb = 'Landing page'
        valorInicial = 'Monto base'
        detalle.unshift(valorInicial)
        detalle.push(montoBase)
        primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \n1. Un producto \n2. Un servicio \n3. Una marca \n4. Una ONG')
        while((primeraOpcionLanding !== '1') && (primeraOpcionLanding !== '2') && (primeraOpcionLanding !== '3') && (primeraOpcionLanding !== '4')){
            alert('Ingrese una opción corecta')
            primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \n1. Un producto \n2. Un servicio \n3. Una marca \n4. Una ONG')
        }
        let segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantes? \n1. Sí \n2. No')
        while((segundaOpcionLanding !== '1') && (segundaOpcionLanding !== '2')){
            alert('Ingrese una opción correcta')
            segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantes? \n1. Sí \n2. No')
        } if(segundaOpcionLanding === '1'){
            segundaOpcionLanding = 'Necesitas captar datos de visitantes'
            valorSegundaOpcion = 100000
        } else{
            segundaOpcionLanding = 'No necesitas captar datos de visitantes'
            valorSegundaOpcion
        }
        detalle.push(segundaOpcionLanding)
        detalle.push(valorSegundaOpcion)
        let terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \n1. Sí \n2. No')
        while((terceraOpcionLanding !== '1') && (terceraOpcionLanding !== '2')){
            alert('Ingrese una opción correcta')
            terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \n1. Sí \n2. No')
        } if(terceraOpcionLanding === '1'){
            terceraOpcionLanding = 'Necesitas enviarle regalos promocionales a los visitantes'
            valorTerceraOpcion = 50000
        } else{
            terceraOpcionLanding = 'No necesitas enviarle regalos promocionales a los visitantes'
            valorTerceraOpcion
        }
        detalle.push(terceraOpcionLanding)
        detalle.push(valorTerceraOpcion)
    }
    
    function sumar(){
        const resultado = montoBase + valorSegundaOpcion + valorTerceraOpcion + valorCuartaOpcion + valorQuintaOpcion + valorSextaOpcion
        return resultado
    }
    
    
    function totalImpuestos(){
        const impuestos = sumar() * 1.19
        return impuestos
    }
    
    valorFinal = parseInt(totalImpuestos())
    
    let pesosChilenos = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    })
    
    alert('La cotización de tu '+tipoWeb+ ' es de '+pesosChilenos.format(valorFinal)+ ' pesos chilenos con IVA incluido.')
    alert('Muchas gracias por cotizar conmigo ' +nombreCliente +'. Tu cotización será enviada a '+ingresoCorreo)
    alert('¡Cuídate!')
    
    let tarjetaCliente = {
        nombre: nombreCliente,
        email: ingresoCorreo,
        servicioSeleccionado: tipoWeb,
        valorTotal: pesosChilenos.format(valorFinal),
        detalle: detalle
    }

    const tarjetaClienteIda = JSON.stringify(tarjetaCliente)
    localStorage.setItem('tarjetaClienteIda', tarjetaClienteIda)
    const tarjetaClienteVuelta = localStorage.getItem('tarjetaCliente')
    const informacionVuelta = JSON.parse(tarjetaClienteVuelta) 
    
    console.log(informacionVuelta)
}