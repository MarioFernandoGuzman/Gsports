"use client"

import Link from "next/link"

export default function NewsPage() {
  // Aquí puedes agregar más noticias siguiendo la misma estructura
const noticias = [
  {
    id: 1,
    titulo: "Lester Martínez: Una pelea histórica en la cartelera de Canelo vs. Crawford",
    resumen: "El guatemalteco Lester Martínez enfrentará a Christian Mbilli en Las Vegas, en la antesala del combate entre Canelo Álvarez y Terence Crawford.",
    fecha: "16 de agosto de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia3.jpg",
    contenidoCompleto: `
      Las Vegas, 13 de septiembre de 2025 será una fecha histórica para el boxeo guatemalteco. En esa noche, el guatemalteco Lester Martínez, invicto con 19 triunfos (16 por nocaut), subirá al ring en el Allegiant Stadium para enfrentarse al también invicto Christian Mbilli (29-0, 24 KOs) en la antesala del esperado combate entre Canelo Álvarez y Terence Crawford.
      
      Para Martínez, este combate representa una ventana a nivel mundial. "El premio al trabajo de muchos años", según su entrenador Héctor Arriola. Estar en esta cartelera no solo es visibilidad masiva, sino un reconocimiento al esfuerzo constante.
      
      Christian Mbilli, originario de Camerún y afincado en Canadá, es considerado el segundo mejor supermediano en el ranking, justo detrás de Canelo. Martínez, por su parte, ya se colocó en el top 10 mundial de los 168 libras tras derrotar a Joeshon James el 22 de marzo de 2025.
      
      Aunque designado como coestelar, el impacto de esta pelea puede trascender el resultado: aumentar su visibilidad internacional, abrirle puertas a enfrentamientos de alto perfil y posicionarlo como figura clave de la división. 
      
      La presencia de Lester Martínez en la cartelera de Canelo vs. Crawford no es casualidad, sino el fruto de una carrera forjada con disciplina, efectividad y contundencia.
    `,
    autor: {
      nombre: "Gabriel Gifuentes",
      foto: "/autores/gabriel.png",
    },
  },
  {
    id: 2,
    titulo: "Entradas volaron en horas: La fiebre por ver a La Bicolor contra El Salvador rompe récords y desata polémica por fallos en la compra",
    resumen: "Los 11,000 boletos para el duelo Guatemala vs El Salvador se agotaron en horas, generando euforia y quejas por fallos en la plataforma de venta.",
    fecha: "16 de agosto de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia2.jpg",
    contenidoCompleto: `
      La pasión por la Selección Nacional de Guatemala alcanzó un nuevo punto álgido esta semana, luego de que los 11,000 boletos disponibles para el duelo contra El Salvador correspondiente a la ronda final de las Eliminatorias de Concacaf rumbo al Mundial 2026 se agotaran en tiempo récord. 
      
      El encuentro, programado para el 4 de septiembre de 2025 en el Estadio Cementos Progreso de Ciudad de Guatemala, marcará el inicio de un tramo decisivo para La Bicolor. Aunque la capacidad del recinto es cercana a 14,000 espectadores, la Federación Nacional de Fútbol de Guatemala (Fedefut) dispuso un aforo reducido por motivos de seguridad y logística.
      
      Sin embargo, la euforia también vino acompañada de frustración. Numerosos aficionados denunciaron en redes sociales que la plataforma de venta en línea presentó fallos constantes, como lentitud en pagos, errores de carga e incluso caídas del sistema. Esto alimentó sospechas de acaparamiento por revendedores, ya que algunos usuarios aseguraron haber visto boletos revendidos a precios inflados pocas horas después.
      
      El partido no solo es relevante por su valor deportivo, sino también por su contexto histórico y emocional. Guatemala y El Salvador comparten una de las rivalidades más antiguas del fútbol centroamericano. Además, el traslado al Cementos Progreso se debe a las remodelaciones del Estadio Doroteo Guamuch Flores, lo que implicó retos adicionales en logística y accesos.
    `,
    autor: {
      nombre: "Cony Rodriguez",
      foto: "/autores/cony.jpeg",
    },
  },
  {
    
    id: 3,
    titulo: "¡Golpe maestro desde adentro! Guatemala acelera trámites de nacionalización para reforzar a La Bicolor antes de arrancar la gran eliminatoria",
    resumen: "Luis Fernando Tena gestiona la nacionalización de José Corena y Cristian ‘Cheka’ Hernández como estrategia para fortalecer a la Selección Nacional rumbo al Mundial 2026.",
    fecha: "16 de agosto de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia1.jpg",
    contenidoCompleto: `
      La selección nacional de Guatemala, dirigida por el estratega mexicano Luis Fernando Tena, ha dado un paso estratégico que podría marcar una diferencia clave en su camino rumbo al Mundial 2026. 
      Según declaraciones del propio Tena, está solicitando desde hace más de un año la nacionalización de dos figuras foráneas que han brillado en la liga local: el colombiano José Corena, de Comunicaciones FC, y el argentino Cristian ‘Cheka’ Hernández, de Municipal. Ambos jugadores ya cumplen los requisitos de residencia más de siete años en el país, e incluso los trámites están en marcha, aunque no se han concluido aún.
      
      Los números hablan por sí mismos. Corena ha acumulado 32 goles y 10 asistencias en Comunicaciones FC, mientras que Hernández ha dejado su huella en Municipal con 55 goles, siendo decisivo en múltiples encuentros. 
      
      Pese a ello, Tena ha sido claro: la naturalización está considerada como un refuerzo, no una necesidad urgente. Confía en el plantel actual, aunque reconoce que estos refuerzos podrían ser fundamentales en caso de lesiones o suspensiones. 
      
      El objetivo es “potencializar el plantel” y crear competencia interna, fortaleciendo así la profundidad del equipo. Esta estrategia llega justo antes del debut en la ronda final de las Eliminatorias de Concacaf, programado para el 4 de septiembre de 2025, cuando Guatemala reciba a El Salvador.
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
