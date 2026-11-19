/* ============================================================
   DATOS FIJOS DE CINDY MAYORISTA
   Los usan la página de clientes y el panel (/admin/).
   - WhatsApp y horario: son los valores iniciales. Una vez que
     se guardan desde el panel ("Horario y WhatsApp"), mandan los del panel.
   - colores: nombre del color y cómo se pinta su puntito.
   - secciones: productos de EJEMPLO. Los productos reales
     se cargan desde el panel y quedan guardados en Netlify.
   ============================================================ */
const TIENDA = {
  nombre: "Cindy Mayorista",
  whatsapp: "595972879400", // número con código de país, sin + ni espacios
  // Mensaje de los botones de consulta (verde flotante, "Escribinos" y WhatsApp de arriba). \n = salto de línea
  mensajeConsulta: "Hola! 👋 😊 Estoy interesado/a en conocer más sobre sus productos y precios mayoristas.\nPodrían brindarme más info?",
  modoEjemplo: true,       // muestra el aviso de "vista de ejemplo" (se apaga solo al guardar desde el panel)
  horario: [
    { etiqueta: "Lunes a viernes", dias: [1, 2, 3, 4, 5], turnos: [["08:00", "12:00"], ["14:00", "18:30"]] },
    { etiqueta: "Sábados",         dias: [6],             turnos: [["08:30", "12:00"], ["14:00", "17:30"]] }
  ],
  colores: {
    "negro": "#130a06", "blanco": "#ffffff", "nude": "#e8be9b", "beige": "#d9c3a5", "vino": "#540111",
    "rojo": "#b3122e", "rosa": "#d9a0a6", "fucsia": "#c2185b", "lila": "#b9a3d6", "celeste": "#8ec5e8",
    "azul marino": "#1f2a44", "verde": "#3f7d4e", "verde oliva": "#6b6b3a", "amarillo": "#e9c94a",
    "naranja": "#e07a2e", "gris": "#8c8580", "chocolate": "#5a3424", "marrón": "#6b4226"
  },
  // CATÁLOGO DE EJEMPLO: se muestra solo mientras no se haya guardado nada desde el panel (/admin/).
  // tipo: dibujo que se muestra mientras no haya foto (body, brasier, bombacha, calza, top)
  // precio: número en guaraníes, o null para mostrar "Consultar"
  // minimo: unidades mínimas por mayor, o null
  secciones: [
    { id: "emocione", nombre: "Emocione", productos: [
      { nombre: "Conjunto de encaje con aro", descripcion: "Brasier con aro y bombacha a juego en encaje suave, con breteles regulables.", tipo: "brasier", talles: ["P", "M", "G", "GG"], colores: ["negro", "nude", "vino"], precio: null, minimo: 6, imagen: "", ejemplo: true },
      { nombre: "Body de encaje", descripcion: "Escote en V, espalda de tul y cierre con broches en la entrepierna.", tipo: "body", talles: ["P", "M", "G"], colores: ["negro", "vino"], precio: 89000, minimo: 3, imagen: "", ejemplo: true }
    ]},
    { id: "recco", nombre: "Recco", productos: [
      { nombre: "Brasier sin aro con soft", descripcion: "Copa con soft removible y base elástica ancha para el uso diario.", tipo: "brasier", talles: ["40", "42", "44", "46"], colores: ["nude", "negro", "blanco"], precio: null, minimo: null, imagen: "", ejemplo: true },
      { nombre: "Bombacha tiro alto de microfibra", descripcion: "Microfibra lisa que no marca bajo la ropa, con costuras planas.", tipo: "bombacha", talles: ["P", "M", "G", "GG"], colores: ["nude", "negro", "rosa"], precio: 18000, minimo: 12, imagen: "", ejemplo: true }
    ]},
    { id: "alto-giro", nombre: "Alto Giro", productos: [
      { nombre: "Calza deportiva tiro alto", descripcion: "Tela de compresión opaca, cintura ancha que no se enrolla y bolsillo lateral.", tipo: "calza", talles: ["P", "M", "G", "GG"], colores: ["negro", "azul marino", "verde oliva"], precio: null, minimo: null, imagen: "", ejemplo: true },
      { nombre: "Top deportivo con soporte", descripcion: "Espalda nadadora, soporte medio y forro interno.", tipo: "top", talles: ["P", "M", "G"], colores: ["negro", "rosa"], precio: null, minimo: null, imagen: "", ejemplo: true }
    ]},
    { id: "mov", nombre: "MOV", productos: [
      { nombre: "Conjunto top y calza", descripcion: "Set de dos piezas en suplex con brillo suave.", tipo: "calza", talles: ["P", "M", "G"], colores: ["negro", "chocolate"], precio: 120000, minimo: 3, imagen: "", ejemplo: true },
      { nombre: "Top cruzado", descripcion: "Breteles cruzados en la espalda y copas removibles.", tipo: "top", talles: ["P", "M", "G"], colores: ["negro", "vino"], precio: null, minimo: null, imagen: "", ejemplo: true }
    ]},
    { id: "dalcosta", nombre: "Dalcosta", productos: [
      { nombre: "Brasier con aro y encaje", descripcion: "Copa estructurada con detalle de encaje en el escote.", tipo: "brasier", talles: ["42", "44", "46", "48"], colores: ["negro", "nude"], precio: null, minimo: null, imagen: "", ejemplo: true },
      { nombre: "Bombacha clásica de algodón", descripcion: "Algodón con elastano, cómoda para todos los días.", tipo: "bombacha", talles: ["P", "M", "G", "GG", "XG"], colores: ["blanco", "nude", "negro"], precio: null, minimo: 12, imagen: "", ejemplo: true }
    ]},
    { id: "stoff", nombre: "Stoff", productos: [
      { nombre: "Body manga larga", descripcion: "Punto liso con cuello alto, para combinar con jeans o faldas.", tipo: "body", talles: ["P", "M", "G"], colores: ["negro", "nude", "vino"], precio: null, minimo: null, imagen: "", ejemplo: true },
      { nombre: "Calza de compresión", descripcion: "Cintura alta y tela firme que modela sin transparentar.", tipo: "calza", talles: ["P", "M", "G", "GG"], colores: ["negro", "gris"], precio: null, minimo: null, imagen: "", ejemplo: true }
    ]},
    { id: "formitz", nombre: "Formitz", productos: [
      { nombre: "Body modelador sin costuras", descripcion: "Moldea la cintura con un tejido sin costuras que no marca bajo la ropa.", tipo: "body", talles: ["P", "M", "G", "GG"], colores: ["nude", "negro"], precio: 95000, minimo: 3, imagen: "", ejemplo: true },
      { nombre: "Short modelador", descripcion: "Tiro alto que afina la cintura y realza los glúteos.", tipo: "bombacha", talles: ["P", "M", "G", "GG"], colores: ["nude", "negro"], precio: null, minimo: null, imagen: "", ejemplo: true }
    ]},
    { id: "sizely", nombre: "Sizely", productos: [
      { nombre: "Brasier talles grandes", descripcion: "Base ancha y breteles acolchados para mayor sostén.", tipo: "brasier", talles: ["48", "50", "52", "54"], colores: ["nude", "negro", "blanco"], precio: null, minimo: null, imagen: "", ejemplo: true },
      { nombre: "Bombacha talles grandes", descripcion: "Tiro alto y laterales anchos en algodón suave.", tipo: "bombacha", talles: ["XG", "G1", "G2", "G3"], colores: ["nude", "negro"], precio: null, minimo: null, imagen: "", ejemplo: true }
    ]}
  ]
};
