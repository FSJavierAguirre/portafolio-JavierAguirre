let nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
while(nombreCliente === ''){
    alert('Por favor ingresa tu nombre')
    nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
}
alert('¡Un gusto conocerte '+nombreCliente+'!')
alert('A continuación se te presentarán algunas preguntas. Por favor responde utilizando el número de la opción que desees.')
let tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \n1. Blog \n2. Ecommerce \n3. Landing page')
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
    primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \n1. Noticias \n2. Viajes \n3. Recetas \n4. Bitácora \n5. Cine y entretenimiento \n6. Otro')
    while((primeraOpcionBlog !== '1') && (primeraOpcionBlog !== '2') && (primeraOpcionBlog !== '3') && (primeraOpcionBlog !== '4') && (primeraOpcionBlog !== '5') && (primeraOpcionBlog !== '6')){
        alert('Ingresa una opción válida')
        primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \n1. Noticias \n2. Viajes \n3. Recetas \n4. Bitácora \n5. Cine y entretenimiento \n6. Otro')
    } if(primeraOpcionBlog === '6'){
        prompt('Cuéntanos sobre qué es tu blog: ')
    }
    segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \n1. De 1 a 5 secciones. \n2. De 6 a 10 secciones. \n3. Más de 10 secciones.')
    while((segundaOpcionBlog !== '1') && (segundaOpcionBlog !== '2') && (segundaOpcionBlog !== '3')){
        alert('Ingresa una opción válida')
        segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \n1. De 1 a 5 secciones. \n2. De 6 a 10 secciones. \n3. Más de 10 secciones.')
    } if(segundaOpcionBlog === '1'){
        valorSegundaOpcion = 50000
    } else if(segundaOpcionBlog === '2'){
        valorSegundaOpcion = 75000
    } else if(segundaOpcionBlog === '3'){
        valorSegundaOpcion = 100000
    } terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \n1. De 1 a 10 entradas mensuales. \n2. De 11 a 20 entradas mensuales. \n3. Más de 20 entradas mensuales.')
    while((terceraOpcionBlog !== '1') && (terceraOpcionBlog !== '2') && (terceraOpcionBlog !== '3')){
        alert('Ingresa una opción válida')
        terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \n1. De 1 a 10 entradas mensuales. \n2. De 11 a 20 entradas mensuales. \n3. Más de 20 entradas mensuales.')
    } if(terceraOpcionBlog === '1'){
        valorTerceraOpcion = 50000
    } else if(terceraOpcionBlog === '2'){
        valorTerceraOpcion = 75000
    } else if(terceraOpcionBlog === '3'){
        valorTerceraOpcion = 100000
    } cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \n1. Sí \n2. No')
    while((cuartaOpcionBlog !== '1') && (cuartaOpcionBlog !== '2')){
        alert('Ingresa una opción correcta')
        cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \n1. Sí \n2. No')
    } if(cuartaOpcionBlog === '1'){
        valorCuartaOpcion = 100000
    } else{
        valorCuartaOpcion = 0
    }
}

else if(tipoWeb === '2'){
    montoBase = 250000
    tipoWeb = 'Ecommerce'
    primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \n1. Tecnología \n2. Servicios \n4. Alimentos \n5. Deco \n6. Juguetes \n7. Otro')
    while((primeraOpcionEcommerce !== '1') && (primeraOpcionEcommerce !== '2') && (primeraOpcionEcommerce !== '3') && (primeraOpcionEcommerce !== '4') && (primeraOpcionEcommerce !== '5') && (primeraOpcionEcommerce !== '6') && (primeraOpcionEcommerce !== '7')){
        alert('Ingrese una opción correcta')
        primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \n1. Tecnología \n2. Servicios \n4. Alimentos \n5. Deco \n6. Juguetes \n7. Otro')
    } if(primeraOpcionEcommerce === '7'){
        prompt('Ingresa sobre qué es tu marca')
    }
    segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \n1. De 1 a 20 productos. \n2. De 21 a 50 productos. \n3. Más de 50 productos.')
    while((segundaOpcionEcommerce !== '1') && (segundaOpcionEcommerce !== '2') && (segundaOpcionEcommerce !== '3')){
        alert('Ingrese una opción correcta')
        segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \n1. De 1 a 20 productos. \n2. De 21 a 50 productos. \n3. Más de 50 productos.')
    } if(segundaOpcionEcommerce === '1'){
        valorSegundaOpcion = 0
    } else if(segundaOpcionEcommerce === '2'){
        valorSegundaOpcion = 100000
    } else if(segundaOpcionEcommerce === '3'){
        valorSegundaOpcion = 150000
    }
    terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \n1. Sí \n2. No')
    while((terceraOpcionEcommerce !== '1') && (terceraOpcionEcommerce !== '2')){
        alert('Ingrese una opción correcta')
        terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \n1. Sí \n2. No')
    } if(terceraOpcionEcommerce === '1'){
        valorTerceraOpcion
    } else if(terceraOpcionEcommerce === '2'){
        valorTerceraOpcion = 100000
    }
    cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \n1. Sí \n2. No')
    while((cuartaOpcionEcommerce !== '1') && (cuartaOpcionEcommerce !== '2')){
        alert('Ingrese una opción correcta')
        cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \n1. Sí \n2. No')
    } if(cuartaOpcionEcommerce === '1'){
        valorCuartaOpcion = 50000
    } else if(cuartaOpcionEcommerce === '2'){
        valorCuartaOpcion
    }
    quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \n1. Sí \n2. No')
    while((quintaOpcionEcommerce !== '1') && (quintaOpcionEcommerce !== '2')){
        alert('Ingrese una opción correcta')
        quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \n1. Sí \n2. No')
    } if(quintaOpcionEcommerce === '1'){
        valorQuintaOpcion = 50000
    } else if(quintaOpcionEcommerce === '2'){
        valorQuintaOpcion
    }
    sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \n1. Sí \n2. No')
    while((sextaOpcionEcommerce !== '1') && (sextaOpcionEcommerce !== '2')){
        alert('Ingrese una opción correcta')
        sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \n1. Sí \n2. No')
    }
}

else if(tipoWeb === '3'){
    montoBase = 150000
    tipoWeb = 'Landing page'
    primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \n1. Un producto \n2. Un servicio \n3. Una marca \n4. Una ONG')
    while((primeraOpcionLanding !== '1') && (primeraOpcionLanding !== '2') && (primeraOpcionLanding !== '3') && (primeraOpcionLanding !== '4')){
        alert('Ingrese una opción corecta')
        primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \n1. Un producto \n2. Un servicio \n3. Una marca \n4. Una ONG')
    }
    segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantes? \n1. Sí \n2. No')
    while((segundaOpcionLanding !== '1') && (segundaOpcionLanding !== '2')){
        alert('Ingrese una opción correcta')
        segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantes? \n1. Sí \n2. No')
    } if(segundaOpcionLanding === '1'){
        valorSegundaOpcion = 100000
    } else{
        valorSegundaOpcion
    }
    terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \n1. Sí \n2. No')
    while((terceraOpcionLanding !== '1') && (terceraOpcionLanding !== '2')){
        alert('Ingrese una opción correcta')
        terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \n1. Sí \n2. No')
    } if(terceraOpcionLanding === '1'){
        valorTerceraOpcion = 50000
    } else{
        valorTerceraOpcion
    }
}

function sumar(){
    const resultado = montoBase + valorSegundaOpcion + valorTerceraOpcion + valorCuartaOpcion + valorQuintaOpcion + valorSextaOpcion
    return resultado
}
console.log(sumar())

function totalImpuestos(){
    const impuestos = sumar() * 1.19
    return impuestos
}

valorFinal = parseInt(totalImpuestos())

let pesosChilenos = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
})
console.log(pesosChilenos.format(valorFinal))

alert('La cotización de tu '+tipoWeb+ ' es de '+pesosChilenos.format(valorFinal)+ ' pesos chilenos con IVA incluido, ' +nombreCliente+ '.')

let decisionFinal = prompt('¿Deseas recibir esta cotización por mail? \n1. Sí \n2. No')

while((decisionFinal !== '1') && (decisionFinal !== '2')){
    alert('No has ingresado una opción correcta. Por favor ingresa 1 o 2 según sea tu decisión');
    decisionFinal = prompt('¿Deseas recibir esta cotización por mail? \n1. Sí \n2. No')
} if(decisionFinal === '1'){
    ingresoCorreo = prompt('Por favor, ingresa tu dirección de correo electrónico')
    while(ingresoCorreo === ''){
        alert('Por favor ingresa tu correo electrónico')
        ingresoCorreo = prompt('Por favor, ingresa tu dirección de correo electrónico')
    }
    alert('¡Muchas gracias por cotizar conmigo! Tu cotización será enviada a ' +ingresoCorreo)
} else{
    alert('Muchas gracias por cotizar conmigo ' +nombreCliente)
} alert('¡Cuídate, ' +nombreCliente+ '!')