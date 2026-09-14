module.exports = (req, res) => {
  const { user1, user2 } = req.query;

  const u1 = user1 || 'un tripulante misterioso';
  const u2 = user2 || 'otro tripulante despistado';

  const historias = [
    `🧹 ¡ALERTA DE MANTENIMIENTO! 🚀 A ${u1} y a ${u2} les toca limpiar la nave hoy. Mientras ${u1} intenta pasar la mopa en gravedad cero flotando en círculos, ${u2} derramó su café frío sobre los mandos del hiperimpulsor. ¡A fregar antes de que nos estrelemos contra un asteroide! 🌌✨`,
    
    `🧽 SANCIÓN COMUNITARIA 🛸: ${u1} y ${u2} fueron atrapados durmiendo en las cápsulas de escape y hoy les toca fregar los motores. ${u1} usó detergente de materia oscura que abrió un portal al infierno y ${u2} tiró la basura por la escotilla equivocada... ¡La nave ahora huele a tostada quemada galáctica! 🧼⭐`,
    
    `🚀 ACCIDENTE EN LA CUBIERTA 🚨: ${u1} y ${u2} tienen que limpiar las ventanas principales. ${u1} se quedó lelo mirando un agujero negro hipnotizado mientras ${u2} aspiró sin querer el almuerzo del Capitán con la aspiradora espacial industrial. ¡Manos a la obra antes de que los funen! 🛰️🌀`,
    
    `🌌 LA FAENA DEL DÍA 🪣: A ${u1} y ${u2} les tocó limpiar los conductos de ventilación. ${u1} encontró un alien de pelusa súper raro y ${u2} decidió bautizarlo como "Pelusín", adoptándolo como mascota del grupo en lugar de ponerse a barrer. ¡Limpien rápido antes de que la criatura se coma el cableado! 👾🪐`,
    
    `✨ OPERACIÓN CAOS TOTAL 🧹: ${u1} y ${u2} tienen la misión de sacarle brillo al casco exterior. ${u1} soltó el cepillo y lo mandó a la órbita de Marte, mientras ${u2} intenta secar el suelo mojado activando los propulsores traseros a máxima potencia. 🛸💥`,
    
    `🪠 TRAGEDIA EN EL BAÑO ESPACIAL 🚿: A ${u1} y ${u2} les tocó el turno más feo: limpiar el inodoro de gravedad cero. ${u1} apretó el botón de succión inversa por error y ${u2} quedó flotando pegado al techo cubierto de espuma galáctica. ¡Ayuda primero, limpieza después! 🧻😱`,
    
    `🤖 REBELIÓN EN LA NAVE 🧹: ${u1} y ${u2} intentaron programar al robot aspiradora para que hiciera el trabajo por ellos. El robot cobró conciencia propia, se robó la mopa de ${u1} y ahora está persiguiendo a ${u2} por todo el pasillo exigiendo derechos laborales. 🦾🔥`,
    
    `🪰 PLAGA EN EL COMEDOR 🛸: ${u1} y ${u2} tienen que desinfectar la cocina. ${u1} usó un insecticida experimental que hizo mutar a las moscas espaciales al tamaño de un perro, y ${u2} está intentando negociar un tratado de paz con ellas en vez de limpiar. 🍔🛸`,
    
    `🧼 FIESTA DE ESPUMA NO DESEADA 🫧: ${u1} mezcló por error jabón de platos con combustible de plasma y ${u2} dejó abierta la manguera principal. Toda la nave está inundada de burbujas hasta el techo y ambos están haciendo surf espacial en los pasillos en lugar de recoger. 🏄‍♂️✨`,
    
    `📦 INCIDENTE CON LA ALMACÉN 🚨: A ${u1} y ${u2} les tocó organizar la bodega. ${u1} tiró una torre de cajas de suministros como fichas de dominó y ${u2} quedó atrapado abajo gritando que lo rescaten antes de que comience la inspección de la VTuber. 🛒😵`
  ];

  const historiaAleatoria = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(historiaAleatoria);
};
