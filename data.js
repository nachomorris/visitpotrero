/* ==========================================================================
   VISIT POTRERO — datos del sitio
   Este archivo es la única fuente de datos: categorías, comercios, lugares
   para visitar, eventos y novedades. Lo usan tanto visit-potrero.html (la
   web pública) como admin.html (el panel de edición).

   Para editar el contenido, lo más fácil es usar admin.html: te deja
   agregar/editar/borrar todo con un formulario y descargar este archivo
   ya actualizado, listo para reemplazar en GitHub.

   Si preferís editarlo a mano, es JavaScript común: respetá las comas y
   las comillas y va a funcionar igual.
========================================================================== */

const CATEGORIES = [
  {slug:'alojamiento', label:'Alojamiento', emoji:'🏨', color:'#0ea5e9'},
  {slug:'gastronomia', label:'Gastronomía', emoji:'🍽️', color:'#f97316'},
  {slug:'turismo', label:'Turismo', emoji:'📸', color:'#16a34a'},
  {slug:'salud', label:'Salud', emoji:'💙', color:'#2563eb'},
  {slug:'comercios', label:'Comercios', emoji:'🛍️', color:'#db2777'},
  {slug:'servicios', label:'Servicios', emoji:'🔧', color:'#71717a'},
  {slug:'deportes', label:'Deportes', emoji:'🏋️', color:'#ca8a04'},
  {slug:'entretenimiento', label:'Entretenimiento', emoji:'🎭', color:'#7c3aed'},
];

// Subcategorías opcionales dentro de cada categoría (para filtrar más fino).
// Si una categoría no tiene lista acá, no se le muestran subcategorías.
const SUBCATEGORIES = {
  gastronomia: ['Resto', 'Cafetería', 'Bar', 'Pizzería', 'Parrilla', 'Rotisería'],
};

const CENTER = [-33.2333, -66.2650]; // Potrero de los Funes, San Luis

function cat(slug){ return CATEGORIES.find(c=>c.slug===slug) || CATEGORIES[0]; }
function jitter(base, i, scale){ return base + ((i*37 % 100)/100 - .5) * scale; }

const PLACES = [ // "lugares para visitar" - atractivos, no son comercios
  {id:'paseo-del-lago', name:'Paseo del Lago', type:'Peatonal', emoji:'🌉',
   desc:'Recorrido peatonal con miradores y rampas para personas con discapacidad, y un puente flotante que comunica con el Parque Nativo.',
   lat: CENTER[0]+0.004, lng: CENTER[1]-0.006},
  {id:'paseo-artesanos', name:'Paseo de Artesanos Laura Amaya', type:'Paseo', emoji:'🎨',
   desc:'Feria de artesanos con productos regionales, tejidos y artesanías locales, en pleno centro de Potrero.',
   lat: CENTER[0]-0.002, lng: CENTER[1]+0.003},
  {id:'parque-salagria', name:'Parque Recreativo La Salagria', type:'Parque recreativo', emoji:'🌳',
   desc:'Propuestas pensadas para el descanso, la recreación y los encuentros en familia o con amigos, a orillas del dique.',
   lat: CENTER[0]+0.009, lng: CENTER[1]+0.008},
  {id:'quebrada-condores', name:'Quebrada de los Cóndores', type:'Fotográfico', emoji:'🦅',
   desc:'Ingreso y bienvenida al valle, con un mirador ideal para fotografía y contacto con las sierras.',
   lat: CENTER[0]-0.011, lng: CENTER[1]-0.004},
  {id:'dique-potrero', name:'Dique Potrero de los Funes', type:'Naturaleza', emoji:'💧',
   desc:'El embalse que da nombre a la localidad. Apto para deportes náuticos, pesca y paseos en la costanera.',
   lat: CENTER[0]+0.001, lng: CENTER[1]-0.011},
];

const BUSINESSES = [
  // Alojamiento
  {id:'complejo-retana', name:'Complejo Retana - Cabañas', category:'alojamiento', address:'Las Catitas y Reina Mora, Potrero de los Funes, San Luis',
   desc:'Cabañas familiares totalmente equipadas, rodeadas de naturaleza serrana, ideales para descansar en pareja o en familia.',
   phone:'+54 9 266 000-0001', hours:'Recepción 8:00 a 22:00', open:true, top:false, featured:false},
  {id:'lunas-y-soles', name:'Lunas y Soles - Cabañas', category:'alojamiento', address:'Santa Rita 559, Potrero de los Funes, San Luis',
   desc:'Cabañas de diseño con vista a las sierras, pileta de uso común y desayuno regional incluido.',
   phone:'+54 9 266 000-0002', hours:'Recepción 9:00 a 21:00', open:true, top:true, featured:false},
  {id:'agua-clara-parador', name:'Agua Clara - Parador', category:'alojamiento', address:'Camino Mirador, Potrero de los Funes, San Luis',
   desc:'Parador con habitaciones frente al lago y acceso directo a la costa para disfrutar del atardecer.',
   phone:'+54 9 266 000-0003', hours:'Abierto todos los días', open:false, top:false, featured:false},

  // Gastronomía
  {id:'lo-de-vito', name:'Lo de Vito', category:'gastronomia', subcategory:'Parrilla', address:'Los Paraísos 3171, Potrero de los Funes, San Luis',
   desc:'Parrilla y cocina regional con vista panorámica al dique. Uno de los clásicos de Potrero.',
   phone:'+54 9 266 000-0004', hours:'12:00–16:00 y 20:00–00:00', open:false, top:true, featured:true},
  {id:'la-curva-rotiseria', name:'La Curva Rotisería - Kiosco', category:'gastronomia', subcategory:'Rotisería', address:'Av. del Circuito 2120, Potrero de los Funes, San Luis',
   desc:'Rotisería y kiosco de paso, comidas caseras para llevar y despensa básica.',
   phone:'+54 9 266 000-0005', hours:'8:00 a 23:00', open:false, top:false, featured:false},
  {id:'puerto-seco-bar', name:'Puerto Seco Bar', category:'gastronomia', subcategory:'Bar', address:'Av. del Circuito s/n, Potrero de los Funes, San Luis',
   desc:'Bar de tragos y picadas frente al lago, con música en vivo los fines de semana.',
   phone:'+54 9 266 000-0006', hours:'18:00 a 02:00', open:true, top:false, featured:false},

  // Turismo
  {id:'agua-clara-cabalgatas', name:'Agua Clara - Travesías y Cabalgatas', category:'turismo', address:'Camino Mirador, Potrero de los Funes, San Luis',
   desc:'Cabalgatas y travesías guiadas por las sierras, para todas las edades y niveles.',
   phone:'+54 9 266 000-0007', hours:'9:00 a 18:00', open:true, top:false, featured:false},
  {id:'la-salagria-turismo', name:'La Salagria', category:'turismo', address:'Camino Mirador, Potrero de los Funes, San Luis',
   desc:'Paseos náuticos y actividades recreativas en el dique, alquiler de kayaks y botes a pedal.',
   phone:'+54 9 266 000-0008', hours:'10:00 a 19:00', open:false, top:false, featured:false},
  {id:'potrero-bike-rental', name:'Potrero Bike Rental', category:'turismo', address:'Av. del Circuito 900, Potrero de los Funes, San Luis',
   desc:'Alquiler de bicicletas para recorrer el circuito del lago a tu ritmo.',
   phone:'+54 9 266 000-0009', hours:'9:00 a 20:00', open:true, top:false, featured:false},

  // Salud
  {id:'farmacia-potrero', name:'Farmacia Potrero', category:'salud', address:'Av. del Circuito 450, Potrero de los Funes, San Luis',
   desc:'Farmacia con entrega a domicilio y guardia rotativa en temporada alta.',
   phone:'+54 9 266 000-0010', hours:'8:00 a 21:00', open:true, top:false, featured:false},
  {id:'centro-salud', name:'Centro de Salud Comunitario', category:'salud', address:'Calle Los Cardones s/n, Potrero de los Funes, San Luis',
   desc:'Atención primaria, vacunación y guardia para urgencias menores.',
   phone:'+54 9 266 000-0011', hours:'7:00 a 20:00', open:true, top:false, featured:false},

  // Comercios
  {id:'fuerza-12-store', name:'Fuerza 12 Store - Gym', category:'comercios', address:'Avenida Circuito y Las Higueras, Potrero de los Funes, San Luis',
   desc:'Indumentaria deportiva, suplementos y accesorios de entrenamiento.',
   phone:'+54 9 266 000-0012', hours:'9:00 a 20:00', open:true, top:false, featured:false},
  {id:'almacen-sierras', name:'Almacén de las Sierras', category:'comercios', address:'Calle Real 210, Potrero de los Funes, San Luis',
   desc:'Productos regionales, dulces artesanales y souvenirs de la zona.',
   phone:'+54 9 266 000-0013', hours:'9:00 a 21:00', open:false, top:false, featured:false},

  // Servicios
  {id:'gomeria-circuito', name:'Gomería El Circuito', category:'servicios', address:'Av. del Circuito 1500, Potrero de los Funes, San Luis',
   desc:'Reparación de neumáticos, auxilio mecánico y service básico.',
   phone:'+54 9 266 000-0014', hours:'8:00 a 19:00', open:true, top:false, featured:false},
  {id:'inmobiliaria-potrero', name:'Inmobiliaria Potrero', category:'servicios', address:'Calle Real 88, Potrero de los Funes, San Luis',
   desc:'Venta y alquiler de propiedades, cabañas y terrenos en la zona.',
   phone:'+54 9 266 000-0015', hours:'9:00 a 18:00', open:true, top:false, featured:false},

  // Deportes
  {id:'nautica-potrero', name:'Náutica Potrero', category:'deportes', address:'Costanera del Lago, Potrero de los Funes, San Luis',
   desc:'Alquiler de kayaks, tablas SUP y equipos náuticos para disfrutar del dique.',
   phone:'+54 9 266 000-0016', hours:'9:00 a 19:00', open:true, top:true, featured:false},
  {id:'fuerza-12-deportes', name:'Fuerza 12 - Entrenamiento Funcional', category:'deportes', address:'Avenida Circuito y Las Higueras, Potrero de los Funes, San Luis',
   desc:'Clases grupales de entrenamiento funcional al aire libre con vista al lago.',
   phone:'+54 9 266 000-0017', hours:'7:00 a 21:00', open:true, top:false, featured:false},

  // Entretenimiento
  {id:'cine-aire-libre', name:'Cine al Aire Libre La Salagria', category:'entretenimiento', address:'Parque Recreativo La Salagria, Potrero de los Funes, San Luis',
   desc:'Proyecciones de cine bajo las estrellas en temporada de verano.',
   phone:'+54 9 266 000-0018', hours:'Vie y Sáb 21:00', open:false, top:false, featured:true},
  {id:'boliche-latitud', name:'Boliche Latitud', category:'entretenimiento', address:'Av. del Circuito 3000, Potrero de los Funes, San Luis',
   desc:'Música en vivo y pista de baile los fines de semana en temporada alta.',
   phone:'+54 9 266 000-0019', hours:'Vie y Sáb 00:00 a 05:00', open:false, top:false, featured:false},
];

// Coordenadas automáticas para los comercios que no tienen lat/lng propia
// (se distribuyen alrededor del centro de Potrero para que se vean bien en el mapa).
BUSINESSES.forEach((b,i)=>{
  if(typeof b.lat !== 'number') b.lat = jitter(CENTER[0], i, 0.03);
  if(typeof b.lng !== 'number') b.lng = jitter(CENTER[1], i+7, 0.03);
});

const EVENTS = [
  {date:'12 Jul 2026', title:'Feria de Artesanos de Invierno', desc:'Artesanos locales exponen sus productos en el Paseo Laura Amaya, todo el fin de semana.'},
  {date:'18 Jul 2026', title:'Apertura de temporada de deportes náuticos', desc:'La Salagria y Náutica Potrero habilitan alquiler de kayaks y SUP para el receso invernal.'},
  {date:'25 Jul 2026', title:'Festival Gastronómico Sabores de Potrero', desc:'Los restaurantes de la zona ofrecen menúes especiales durante todo el fin de semana largo.'},
];

const NOVEDADES = [
  {date:'05 Jul 2026', title:'Nueva señalética en el Paseo del Lago', desc:'Se incorporaron carteles informativos y de accesibilidad en todo el recorrido peatonal.'},
  {date:'28 Jun 2026', title:'CCTA suma nuevos comercios adheridos', desc:'Se incorporaron 6 nuevos comercios a la guía oficial de Potrero de los Funes.'},
  {date:'15 Jun 2026', title:'Mejoras en la costanera', desc:'Trabajos de mantenimiento y nueva iluminación en el sector de la Salagria.'},
];

// Fotos de ejemplo (mismo estilo que usa PLIN en sus tarjetas) para previsualizar el diseño.
// Reemplazá cada "photo" en BUSINESSES por la foto real del comercio cuando la tengas.
const SAMPLE_PHOTOS = [
  'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
];
