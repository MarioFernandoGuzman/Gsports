"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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
titulo: "Jóvenes que sueñan con quedarse… o con partir",
resumen: "En Sololá y Quetzaltenango, muchos jóvenes indígenas enfrentan la falta de oportunidades y ven la migración como única salida, mientras surgen iniciativas para que puedan construir un futuro en sus comunidades.",
fecha: "23 de agosto de 2025",
categoria: "Sociedad",
imagen: "/noticias/noticia3.jpg",
contenidoCompleto: `
  Jóvenes que sueñan con quedarse… o con partir

  En muchas comunidades rurales de Sololá y Quetzaltenango, los jóvenes enfrentan un dilema creciente: la tierra que conocen ya no les ofrece oportunidades claras. La pobreza rural que afecta a más del 80 % de las comunidades indígenas y la falta de empleo digno hacen que migrar se vea como la única salida. Según el Banco Mundial, cada vez son más los adolescentes y jóvenes quienes encabezan estas migraciones, buscando un futuro mejor lejos de su lugar de origen (World Bank, 2023). En cifras más concretas, un estudio del PNUD reveló que en Sololá el 15.4 % de los hogares rurales tienen al menos un miembro que ha migrado al extranjero, mientras que en Quetzaltenango esta cifra llega al 12.5 %. Esto confirma que el altiplano occidental es una de las zonas más golpeadas por el éxodo juvenil (PNUD, 2023).

  Las causas: oportunidad, clima… y falta de alternativas

  ¿Sabías que el Brookings Institute afirma que el cambio climático es un motor silencioso de la migración en Guatemala? Sequías y lluvias extremas han reducido las cosechas y debilitado la economía agrícola que sostiene a miles de familias. A esto se suma la falta de opciones educativas: muchos jóvenes indígenas abandonan la escuela antes de terminar la secundaria porque deben trabajar para ayudar en casa (Banco Mundial, 2023). La violencia y la inseguridad también influyen. De acuerdo con Prensa Libre, la percepción de riesgo y la ausencia de instituciones que garanticen protección en las comunidades rurales refuerzan la idea de que salir es más seguro que quedarse (Prensa Libre, 2024).

  Alternativas en el campo: quedarte con futuro

  Pero no todo es desolación. Según la FAO, en Quetzaltenango y Sololá se han impulsado proyectos como La Factoría de Trabajo, donde jóvenes emprendedores desarrollan negocios locales de productos agrícolas, quesos, fertilizantes orgánicos y hasta ecoturismo. Jóvenes como María Chum Pastor y Nelson Chun Ramírez se han convertido en ejemplos de que sí se puede crear un futuro en la tierra que los vio nacer (FAO, 2022). Además, la organización Vida Digna acompaña a jóvenes migrantes que han retornado, ayudándoles con apoyo emocional, becas y orientación para emprender en sus comunidades. Gracias a estos programas, muchos han logrado reconstruir sus sueños sin tener que volver a migrar (Vida Digna, 2024).

  Apoyo institucional cerca de casa

  La OIM también ha puesto manos a la obra con el programa Quédate, que busca capacitar a jóvenes en oficios y habilidades digitales. En Sololá ya se reportan casos de migrantes retornados que, tras recibir formación, consiguieron empleo digno sin tener que arriesgar nuevamente su vida en un viaje irregular (OIM, 2024). Estas iniciativas demuestran que, con apoyo y visión, la juventud puede encontrar razones para quedarse y crecer en su propio territorio.

  ¿Qué podemos hacer desde el blog… y como sociedad?

  La historia de los jóvenes rurales de Sololá y Quetzaltenango es también la historia de la esperanza. Aunque muchos parten, otros demuestran que quedarse y luchar vale la pena. Como sociedad, podemos darles voz y visibilizar sus logros: desde los talleres comunitarios hasta los emprendimientos que nacen en el campo. Tu blog puede ser ese espacio donde se reconozca que la migración no siempre es la única opción, y que cada joven tiene derecho a soñar en su propio lugar.
`,
autor: {
  nombre: "Gabriel Cifuentes",
  foto: "/autores/gabriel.png",
},
  },
]


export default function NoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const noticiaId = Number.parseInt(resolvedParams.id)
  const noticia = noticias.find((n) => n.id === noticiaId)

  if (!noticia) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Noticia no encontrada</h1>
          <Link href="/">
            <button className="bg-red text-cream px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    )
  }

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

            {/* Botón volver */}
            <Link href="/">
              <button className="flex items-center space-x-2 text-cream hover:text-red transition-colors">
                <ArrowLeft size={20} />
                <span>Volver</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido del artículo */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categoría */}
        <div className="mb-4">
          <span className="bg-red text-cream px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            {noticia.categoria}
          </span>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">{noticia.titulo}</h1>

        {/* Fecha */}
        <div className="text-gray-600 mb-8 text-lg">{noticia.fecha}</div>

        {/* Imagen principal */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img src={noticia.imagen || "/placeholder.svg"} alt={noticia.titulo} className="w-full h-96 object-cover" />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none mb-12">
          {noticia.contenidoCompleto.split("\n").map((parrafo, index, array) => {
            // Para la noticia 2, agregar imagen antes del último párrafo
            

            return parrafo.trim() ? (
              <p key={index} className="text-gray-800 leading-relaxed mb-6 text-lg">
                {parrafo.trim()}
              </p>
            ) : null
          })}
        </div>

        {/* Información del autor */}
        <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red">
          <h3 className="text-xl font-bold text-black mb-4">
            {noticia.id === 3 ? "Sobre los autores" : "Sobre el autor"}
          </h3>

          {/* Para la noticia 3, mostrar dos autores */}
          {noticia.id === 3 ? (
            <div className="space-y-4">
              {/* Primer autor */}
              <div className="flex items-center space-x-4">
                <img
                  src={noticia.autor.foto || "/placeholder.svg"}
                  alt={noticia.autor.nombre}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-black">{noticia.autor.nombre}</h4>
                  <p className="text-gray-600">Periodista deportivo</p>
                </div>
              </div>

              {/* Segundo autor */}
              <div className="flex items-center space-x-4">
                <img src="/autores/cony.jpeg" alt="cony" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-black">Cony Rodriguez</h4>
                  <p className="text-gray-600">Periodista Deportivo</p>
                </div>
              </div>
            </div>
          ) : (
            /* Autor único para otras noticias */
            <div className="flex items-center space-x-4">
              <img
                src={noticia.autor.foto || "/placeholder.svg"}
                alt={noticia.autor.nombre}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-black">{noticia.autor.nombre}</h4>
                <p className="text-gray-600">Periodista deportivo</p>
              </div>
            </div>
          )}
        </div>

        {/* Botón volver */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="bg-black text-cream px-8 py-3 rounded-lg font-semibold hover:bg-red transition-colors duration-200 shadow-lg">
              Volver a noticias
            </button>
          </Link>
        </div>
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
