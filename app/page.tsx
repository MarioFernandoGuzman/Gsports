"use client"

import Link from "next/link"

export default function NewsPage() {
  // Aquí puedes agregar más noticias siguiendo la misma estructura
const noticias = [
  {
    id: 1,
    titulo: "Adidas presenta “Trionda”, el balón oficial del Mundial 2026",
    resumen: "Adidas ha revelado el diseño y las innovaciones tecnológicas del balón oficial que se utilizará en la Copa Mundial de la FIFA 2026, denominado “Trionda”. Este balón simboliza la unión de los tres países anfitriones: Estados Unidos, México y Canadá.",
    fecha: "4 de Octubre de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia1.jpg",
    contenidoCompleto: `
      Adidas presentó oficialmente el Trionda, el balón que se utilizará en la Copa Mundial de la FIFA 2026, que se disputará en Estados Unidos, México y Canadá. Su nombre surge de la combinación de “tri”, en referencia a los tres países anfitriones, y “onda”, como símbolo de la energía y emoción que recorrerá todo el torneo.

      El diseño del Trionda está cargado de simbolismo. Los colores verde, rojo y azul representan a las tres sedes mundialistas: México, Canadá y Estados Unidos. Además, incluye detalles como hojas de maple, un águila y estrellas, elementos que refuerzan la identidad de cada nación involucrada. Toques dorados evocan la grandeza del trofeo de la Copa del Mundo.

      En cuanto a su fabricación, se trata del balón con menos paneles en la historia de los mundiales, con solo cuatro, lo que mejora la aerodinámica y la estabilidad en el aire. Sus costuras profundas y el relieve gráfico garantizan mayor agarre y control bajo distintas condiciones de juego.

      La gran novedad tecnológica es la incorporación de un sensor interno que captura datos a una velocidad de 500 veces por segundo. Esta innovación permitirá al VAR contar con información precisa para decisiones en jugadas de fuera de lugar, manos o dudas en la trayectoria del balón, aportando un nivel de justicia y detalle nunca antes visto en un mundial.

      El Trionda no solo será protagonista dentro de la cancha, sino que también se convierte en un símbolo de unión entre tres culturas futbolísticas y en un reflejo de la modernización que acompañará al torneo más grande de la historia, con 48 selecciones participantes.

      `,
    autor: {
      nombre: "Gabriel Gifuentes",
      foto: "/autores/gabriel.png",
    },
  },
  {
    id: 2,
    titulo: "Xelajú MC avanza gracias a gol en la prórroga y asegura boleto internacional",
    resumen: "Xelajú MC logró una histórica clasificación a las semifinales de la Copa Centroamericana (Concacaf) tras vencer en la prórroga a Sporting San Miguelito en Panamá, con un gol decisivo en el minuto 119. Este triunfo no solo les permite avanzar en el torneo, sino que también asegura su participación en la próxima edición de la Copa de Campeones Concacaf 2026.",
    fecha: "4 de Octubre de 2025",
    categoria: "Deportes",
    imagen: "/noticias/noticia2.jpg",
    contenidoCompleto: `
      El club Xelajú MC vivió una noche heroica al conseguir su pase a las semifinales de la Copa Centroamericana (Concacaf) tras derrotar en la vuelta a Sporting San Miguelito y remontar la serie.

      En la ida, los quetzaltecos habían conseguido una ventaja de 2-0 en casa, lo que les daba un colchón para el partido de vuelta. En Panamá, Sporting San Miguelito abrió el marcador temprano, al minuto 4, con un gol de Ángel Valencia, lo que estrechó la serie.

      Cuando parecía que los panameños impondrían su momento, el guatemalteco Yair Jaén convirtió un penal al minuto 88, igualando el marcador del partido y nivelando la serie global. Con el agregado empatado, el encuentro se fue a la prórroga. En el minuto 119, Romário da Silva anotó el gol decisivo con un zurdazo desde un ángulo complicado, que selló la clasificación de Xelajú.

      Consecuencias deportivas y económicas:

      Con ese triunfo, Xelajú se mete entre los cuatro mejores del torneo regional. Además de avanzar en el torneo, el club aseguró su lugar en la Copa de Campeones Concacaf 2026. En el aspecto económico, se confirmó que el club recibirá una suma importante en premios por haber alcanzado esta fase. También ya se conocen las fechas oficiales para las semifinales: los partidos de ida serán entre el 22 y el 23 de octubre, y los de vuelta entre el 28 y el 30 de octubre. Xelajú se enfrentará al Real CD España (Honduras) como rival en esta fase.

      `,
    autor: {
      nombre: "Cony Rodriguez",
      foto: "/autores/cony.jpeg",
    },
  },
  {
    
    id: 3,
titulo: "Las Vegas Aces y su magnífico retorno: rumbo a las finales de la WNBA 2025",
resumen: " Las Vegas Aces han protagonizado una de las remontadas más impresionantes en la historia reciente de la WNBA, lideradas por la estelar A’ja Wilson, quien ha sido nombrada MVP por cuarta vez. Tras un inicio complicado, el equipo logró encadenar 16 victorias consecutivas y ahora se prepara para enfrentar a Phoenix Mercury en las finales, en una serie que promete ser muy reñida.",
fecha:  "4 de Octubre de 2025",
categoria: "Deportes",
imagen: "/noticias/noticia3.jpg",
contenidoCompleto: `
  En el baloncesto femenino de los Estados Unidos, las Las Vegas Aces están protagonizando una campaña impresionante al llegar a las finales (WNBA Finals) y con una estrella que hace historia: A’ja Wilson.
  
  Título personal histórico: A’ja Wilson logra su 4.º MVP

  En septiembre de 2025, A’ja Wilson fue proclamada MVP de la WNBA por cuarta vez, un récord en la historia de la liga. Durante la temporada, promedió 23.4 puntos por partido, fue la líder en bloqueos (2.3 por partido) y aportó con rebotes, defensa y versatilidad. Parte de su reconocimiento también se sustentó en la remontada que lideró el equipo: tras un mal partido en el que perdieron por 53 puntos, envió un mensaje al plantel que encendió un cambio mental decisivo. A partir de ese momento, Las Vegas encadenó una racha de 16 victorias consecutivas y aseguró el segundo lugar en la clasificación general. 
 
  Camino hacia las finales:
 
  En los playoffs, las Aces pasaron por una serie muy disputada contra el Indiana Fever, llegando al quinto partido para definir. En ese encuentro decisivo, ganaron 107-98 en tiempo extra. Ese juego 5 de la semifinal se convirtió en uno de los más vistos en la historia de la WNBA. Superó récords de audiencia en ESPN, con un promedio de alrededor de 1.8 millones de espectadores y picos de más de 2.1 millones. Además, los partido semifinales vieron un incremento notable en espectadores respecto a ediciones anteriores, con un crecimiento del 57 % en audiencias. 

  Enfrentamiento en las finales:

  En las finales, las Aces se enfrentarán al equipo Phoenix Mercury, que alcanzó la instancia tras eliminar al top-seed Minnesota Lynx. Una novedad importante: 2025 marca la primera vez que las finales de la WNBA se jugarán al formato de mejor de 7 partidos. Para el primer partido (Game 1) del series, tanto las Aces como los Mercury llegan con plantillas completas, sin reportes oficiales de lesiones que afecten la rotación inicial.

  Rivalidad interna y claves del duelo:

  Una historia interesante es que A’ja Wilson fue clave para que el equipo “despertara”. Después de ese traspié ante Minnesota, envió un mensaje al grupo: “Si no estás avergonzado por el partido de ayer, no vengas hoy al gimnasio”, dando un giro mental importante. La otra cara del duelo será Alyssa Thomas, la estrella del Mercury, que jugó una temporada excepcional y lideró el resurgimiento del equipo. Analistas predicen que la serie será muy cerrada. Algunos ven ventaja para Las Vegas por su experiencia y estado de forma, mientras otros apuntan que Phoenix puede sorprender por su intensidad defensiva y profundidad.
  
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
