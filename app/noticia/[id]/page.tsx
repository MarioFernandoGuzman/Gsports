"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const noticias = [
  {
    id: 1,
    titulo: "El Bochornozo inicio de Guatemala rumbo al mundial",
    resumen: "El Bochornozo inicio de Guatemala rumbo al mundial tras la derrota 1-0 ante El Salvador en el Estadio Cementos Progreso.",
    fecha: "6 de septiembre de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia1.jpg",
    contenidoCompleto: `
      La Selección Nacional de Guatemala arrancó su camino hacia el Mundial con un partido que dejó más dudas que ilusiones. El pasado 4 de septiembre, los chapines se enfrentaron a El Salvador, en un encuentro que pintaba para ser el inicio de una nueva etapa llena de esperanza, pero terminó siendo recordado más por los errores que por el buen fútbol.
      
     La afición guatemalteca llegó con todo el ánimo al estadio, ondeando banderas y soñando con un debut que ilusionara, pero lo que vieron fue un equipo que se notó nervioso y poco conectado en la cancha. Fallas en la defensa, imprecisiones en el medio campo y la falta de contundencia arriba hicieron que la "azul y blanco" se viera apagada frente a un rival que tampoco brilló demasiado, pero que supo aprovechar los errores.
      
      Más que un tropiezo, este arranque fue un llamado de atención. Los jugadores saben que deben reaccionar pronto si no quieren complicarse en un camino que ya de por sí está lleno de obstáculos. El público, por su parte, sigue esperando esa selección que juegue con garra y demuestre que Guatemala no está solo para participar, sino para competir en serio.
      
     El proceso apenas empieza, pero si este partido fue una prueba, el mensaje está claro: hay mucho por mejorar y poco tiempo para hacerlo.
    `,
    autor: {
      nombre: "Gabriel Gifuentes",
      foto: "/autores/gabriel.png",
    },
  },
  {
    id: 2,
    titulo: "“Venus Williams se despide del US Open con estilo y ovación",
    resumen: "Los 11,000 boletos para el duelo Guatemala vs El Salvador se agotaron en horas, generando euforia y quejas por fallos en la plataforma de venta.",
    fecha: "6 de Septiembre de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia2.jpg",
    contenidoCompleto: `
      Venus Williams volvió a recordarnos por qué es considerada una leyenda viviente del tenis. A sus 45 años, la mayor de las hermanas Williams se presentó en el US Open 2025 y dejó una huella imborrable, no solo por su juego, sino también por su estilo y carisma fuera de la cancha.
      
     Esta vez, Venus decidió enfocarse en la modalidad de dobles junto a la canadiense Leylah Fernandez, con quien logró llegar hasta los cuartos de final, un resultado que pocos esperaban y que, sin embargo, estuvo cargado de emoción y nostalgia. Aunque la dupla no consiguió avanzar más allá de esa ronda, su participación fue celebrada como un auténtico triunfo para el deporte.
      
      Lo que más llamó la atención del público y la prensa especializada fue la forma en que Venus se despidió: con un atuendo diseñado por Lacoste, lleno de guiños a pioneras del tenis como Althea Gibson, quien en su momento abrió el camino para que mujeres afroamericanas tuvieran un lugar en este deporte. Cada detalle de su look fue interpretado como un homenaje a la historia del tenis femenino y a la lucha por la igualdad.
      
      Además, su presencia en el torneo coincidió con apariciones públicas en eventos de alto perfil, como el Met Gala 2025, donde también brilló por su elegancia y actitud. Esto refuerza una idea que Venus lleva años defendiendo: el tenis no solo es deporte, también es cultura, moda y expresión personal.

      En lo estrictamente deportivo, Venus sigue siendo un ejemplo de longevidad y resiliencia. Jugar a un nivel competitivo a los 45 años no es tarea fácil, pero ella lo hace con pasión y disciplina. Su nombre aparece constantemente junto al de Serena cuando se habla de las jugadoras que revolucionaron el tenis femenino, pero Venus ha sabido construir su propia identidad, más ligada a la elegancia, la constancia y el amor puro por el deporte.

      Los aficionados la despidieron con una ovación de pie, reconociendo no solo su trayectoria, sino también el hecho de que sigue inspirando a nuevas generaciones de tenistas. Y aunque no queda claro si este fue su último US Open, una cosa sí es segura: Venus Williams ya no juega por títulos, sino por legado, y eso la convierte en una figura irrepetible en la historia del deporte.
    `,
    autor: {
      nombre: "Cony Rodriguez",
      foto: "/autores/cony.jpeg",
    },
  },
  {
    
    id: 3,
titulo: "Arrancó la NFL: la temporada que promete emociones de principio a fin",
resumen: "la NFL está de vuelta y promete darnos drama, espectáculo y mucha adrenalina hasta febrero.",
fecha:  "6 de Septiembre de 2025",
categoria: "Deportes",
imagen: "/noticias/noticia3.jpg",
contenidoCompleto: `
  ¡Ya empezó la fiesta del fútbol americano! La NFL abrió su nueva temporada con todo, y los fanáticos alrededor del mundo ya se están frotando las manos porque se viene un calendario cargado de partidos vibrantes, estrellas que quieren brillar y equipos que buscan llegar al Super Bowl.

  El kickoff siempre es especial: estadios llenos, cánticos, luces y esa sensación de que cualquier cosa puede pasar. Y claro, este año no es la excepción. Los favoritos de siempre como Kansas City Chiefs, San Francisco 49ers y Philadelphia Eagles llegan con la presión de demostrar por qué son potencias. Pero ojo, porque siempre hay equipos que sorprenden y terminan robándose la película.

Más allá de estadísticas y números, lo que hace tan especial a la NFL es la emoción: partidos que se deciden en los últimos segundos, jugadas espectaculares y la pasión de millones de fanáticos que cada semana viven como si fuera la final.

  
Este inicio no solo marca el regreso de los tacleos y touchdowns, sino también de las historias que se van escribiendo jornada tras jornada. Desde jugadores jóvenes buscando dejar su huella, hasta veteranos que quieren una última gran temporada, cada partido cuenta y cada detalle suma.


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
