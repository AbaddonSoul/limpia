module.exports = (req, res) => {
  const formatearUsuario = (valor, porDefecto) => {
    if (!valor || valor.includes('random.chatter') || valor.includes('${')) {
      return `@${porDefecto}`;
    }
    const limpio = valor.replace(/^@/, '').trim();
    return `@${limpio}`;
  };

  const u = formatearUsuario(req.query.usuario, 'Netrunner');
  const o1 = formatearUsuario(req.query.o1, 'Víctima1');

  const historias = [
`🧹 ¡ALERTA DE MANTENIMIENTO! 🚀 A ${o1} y a ${o2} les toca limpiar la nave hoy. Mientras ${o1} intenta pasar la mopa en gravedad cero flotando en círculos, ${o2} derramó su café frío sobre los mandos del hiperimpulsor. ¡A fregar antes de que nos estrelemos contra un asteroide! 🌌✨`,
    
    `🧽 SANCIÓN COMUNITARIA 🛸: ${o1} y ${o2} fueron atrapados durmiendo en las cápsulas de escape y hoy les toca fregar los motores. ${o1} usó detergente de materia oscura que abrió un portal al infierno y ${o2} tiró la basura por la escotilla equivocada... ¡La nave ahora huele a tostada quemada galáctica! 🧼⭐`,
    
    `🚀 ACCIDENTE EN LA CUBIERTA 🚨: ${o1} y ${o2} tienen que limpiar las ventanas principales. ${o1} se quedó lelo mirando un agujero negro hipnotizado mientras ${o2} aspiró sin querer el almuerzo del Capitán con la aspiradora espacial industrial. ¡Manos a la obra antes de que los funen! 🛰️🌀`,
    
    `🌌 LA FAENA DEL DÍA 🪣: A ${o1} y ${o2} les tocó limpiar los conductos de ventilación. ${o1} encontró un alien de pelusa súper raro y ${o2} decidió bautizarlo como "Pelusín", adoptándolo como mascota del grupo en lugar de ponerse a barrer. ¡Limpien rápido antes de que la criatura se coma el cableado! 👾🪐`,
    
    `✨ OPERACIÓN CAOS TOTAL 🧹: ${o1} y ${o2} tienen la misión de sacarle brillo al casco exterior. ${o1} soltó el cepillo y lo mandó a la órbita de Marte, mientras ${o2} intenta secar el suelo mojado activando los propulsores traseros a máxima potencia. 🛸💥`,
    
    `🪠 TRAGEDIA EN EL BAÑO ESPACIAL 🚿: A ${o1} y ${o2} les tocó el turno más feo: limpiar el inodoro de gravedad cero. ${o1} apretó el botón de succión inversa por error y ${o2} quedó flotando pegado al techo cubierto de espuma galáctica. ¡Ayuda primero, limpieza después! 🧻😱`,
    
    `🤖 REBELIÓN EN LA NAVE 🧹: ${o1} y ${o2} intentaron programar al robot aspiradora para que hiciera el trabajo por ellos. El robot cobró conciencia propia, se robó la mopa de ${o1} y ahora está persiguiendo a ${o2} por todo el pasillo exigiendo derechos laborales. 🦾🔥`,
    
    `🪰 PLAGA EN EL COMEDOR 🛸: ${o1} y ${o2} tienen que desinfectar la cocina. ${o1} usó un insecticida experimental que hizo mutar a las moscas espaciales al tamaño de un perro, y ${o2} está intentando negociar un tratado de paz con ellas en vez de limpiar. 🍔🛸`,
    
    `🧼 FIESTA DE ESPUMA NO DESEADA 🫧: ${o1} mezcló por error jabón de platos con combustible de plasma y ${o2} dejó abierta la manguera principal. Toda la nave está inundada de burbujas hasta el techo y ambos están haciendo surf espacial en los pasillos en lugar de recoger. 🏄‍♂️✨`,
    
    `📦 INCIDENTE EN EL ALMACÉN 🚨: A ${o1} y ${o2} les tocó organizar la bodega. ${o1} tiró una torre de cajas de suministros como fichas de dominó y ${o2} quedó atrapado abajo gritando que lo rescaten antes de que comience la inspección de la VTuber. 🛒😵`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
