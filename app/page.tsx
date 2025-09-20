"use client"

import Link from "next/link"

export default function NewsPage() {
  // Aquí puedes agregar más noticias siguiendo la misma estructura
const noticias = [
  {
    id: 1,
    titulo: "Lester Martínez empata con Mbilli y ya tiene revancha confirmada",
    resumen: " Lester Martínez hizo historia al empatar con Christian Mbilli en Las Vegas, y ya tiene una revancha ordenada por el WBC.",
    fecha: "6 de septiembre de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia1.jpg",
    contenidoCompleto: `
      El boxeador guatemalteco Lester Martínez vivió una noche histórica el pasado 13 de septiembre de 2025 en Las Vegas, donde se enfrentó al camerunés Christian Mbilli en la cartelera del combate entre Canelo Álvarez y Terence Crawford.

      La pelea, pactada a 10 asaltos por el título interino supermediano del Consejo Mundial de Boxeo (WBC), fue intensa y pareja de principio a fin. Ambos púgiles intercambiaron golpes con gran determinación y mostraron por qué llegaron invictos a este escenario.
     
      Al sonar la campana final, los jueces no pudieron dar un ganador claro: uno calificó la pelea 97-93 para Martínez, otro la vio 96-94 para Mbilli y el tercero la marcó 95-95. El resultado oficial fue empate mayoritario, con lo que Mbilli retuvo su cinturón.
     
      Martínez, quien salió del ring con récord de 19 victorias, 0 derrotas y 1 empate, se mostró convencido de que hizo lo suficiente para ganar, destacando que en varios momentos pudo conectar con su uppercut y responder con fuerza ante la ofensiva del camerunés. Sin embargo, también reconoció que hay aspectos por mejorar para la próxima vez.
      
      Y esa próxima vez ya está asegurada: el Consejo Mundial de Boxeo ordenó una revancha inmediata entre ambos peleadores, luego de la paridad mostrada en el primer combate. El guatemalteco aseguró que esta vez trabajará aún más fuerte y que confía plenamente en lograr la victoria.

      “Yo sé que en la revancha puedo ganar. Esta oportunidad me motiva más y voy a corregir lo que faltó”, declaró Martínez al salir del ring.

      La segunda pelea aún no tiene fecha confirmada, pero se espera que sea a más rounds, lo que podría darle un giro distinto al desenlace. Para Lester y para Guatemala, será una nueva oportunidad de demostrar que el boxeo chapín puede brillar en la élite mundial.

      `,
    autor: {
      nombre: "Gabriel Gifuentes",
      foto: "/autores/gabriel.png",
    },
  },
  {
    id: 2,
    titulo: "Sydney McLaughlin-Levrone bate récord y gana el título mundial de 400 metros",
    resumen: " Sydney McLaughlin-Levrone hizo historia al ganar el oro en los 400 metros planos en el Campeonato Mundial de Atletismo 2025, rompiendo el récord del campeonato con un tiempo de 47.78 segundos.",
    fecha: "6 de Septiembre de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia2.jpg",
    contenidoCompleto: `
      En una actuación histórica, Sydney McLaughlin-Levrone ganó el oro en los 400 metros planos en el Campeonato Mundial de Atletismo 2025, celebrado recientemente en Tokio, con un tiempo de 47.78 segundos.

      Este tiempo no sólo le otorgó la medalla de oro, sino que rompió el récord del campeonato, acercándose mucho al récord mundial que data de 1985 (47.60 segundos, de Marita Koch).

      McLaughlin-Levrone, originalmente famosa por sus logros en los 400 metros con vallas, ha demostrado una transición espectacular al plano liso, situándose ya como una de las atletas más destacadas del atletismo mundial.
      
      `,
    autor: {
      nombre: "Cony Rodriguez",
      foto: "/autores/cony.jpeg",
    },
  },
  {
    
    id: 3,
titulo: "Guatemala rescata un empate 1-1 en Panamá y sigue con vida en las Eliminatorias",
resumen: " La Selección Nacional de Guatemala sumó un punto importante tras empatar 1-1 contra Panamá el 8 de septiembre de 2025 en el estadio Rommel Fernández, por la segunda fecha de la fase final de las Eliminatorias de la Concacaf rumbo al Mundial 2026.",
fecha:  "6 de Septiembre de 2025",
categoria: "Deportes",
imagen: "/noticias/noticia3.jpg",
contenidoCompleto: `
  La Selección Nacional de Guatemala sumó un punto importante tras empatar 1-1 contra Panamá el 8 de septiembre de 2025 en el estadio Rommel Fernández, por la segunda fecha de la fase final de las Eliminatorias de la Concacaf rumbo al Mundial 2026.

  El encuentro inició con dominio panameño, pero Guatemala sorprendió al minuto 35 cuando Óscar Santis definió con calidad luego de una gran jugada colectiva. La alegría duró poco: tres minutos más tarde, Carlos Harvey empató para Panamá con un cabezazo tras un tiro de esquina.

  Panamá controló el balón con más del 60%, pero Guatemala apostó por un juego ordenado y contragolpes rápidos. 

  Con este resultado, Guatemala suma su primer punto en el Grupo A, tras la derrota inicial en casa (0-1) contra El Salvador. Panamá, por su parte, acumula dos empates consecutivos. El técnico Luis Fernando Tena valoró la entrega del equipo: “Sacamos un punto en una cancha complicada. Aún debemos mejorar en la concentración defensiva, pero el grupo tiene carácter”.
      
  `,
autor: {
  nombre: "Gabriel Cifuentes",
  foto: "/autores/gabriel.png",
},
  },
]


  return (
    <div className="min-h-screen bg-cream">
      {/* Header con logo */}
      <header className="bg-black shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-cream text-2xl font-bold">NOTICIAS GSPORTS</h1>
            </div>

            {/* Fecha actual */}
            <div className="text-cream text-sm">
              {new Date().toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">ÚLTIMAS NOTICIAS</h2>
          <div className="w-24 h-1 bg-red mx-auto"></div>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-red"
            >
              {/* Imagen de la noticia */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={noticia.imagen || "/placeholder.svg"}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Categoría sobre la imagen */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red text-cream px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 leading-tight hover:text-red transition-colors duration-200">
                  {noticia.titulo}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">{noticia.resumen}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{noticia.fecha}</span>
                  <Link href={`/noticia/${noticia.id}`}>
                    <button className="bg-red text-cream px-4 py-2 rounded-md text-sm font-semibold hover:bg-black transition-colors duration-200">
                      Leer más
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón para cargar más noticias */}
        <div className="text-center mt-12"></div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-cream py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 Blog de Noticias. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
