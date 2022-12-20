import { Movie } from "./peliculaClass.js";
import { generateIdMovies } from "./id.js";

function idMovies(){

    let id =  generateIdMovies()

    let arrayMovies = JSON.parse( localStorage.getItem("Movies") ) || [];

    let movieFound = arrayMovies.find( movie => movie.code === id);

    while(movieFound !== undefined){

        id = generateIdMovies();

        movieFound = arrayMovies.find( movie => movie.code === id);
    }

    return id
}

export function hardCodedMovies () { 

    if( localStorage.getItem("Movies") === null  ||  JSON.parse(localStorage.getItem("Movies")).length === 0  ){

    // let movie1 = new Movie(idMovies(),
    //                         "The Batman",
    //                         "Superhéroes",
    //                         "Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía Batman a una investigación en los bajos fondos. A medida que las pruebas comienzan a acercarse a su casa y se hace evidente la magnitud de los planes del autor, Batman debe forjar nuevas relaciones, desenmascarar al culpable y hacer justicia al abuso de poder y la corrupción que durante mucho tiempo han asolado Gotham City.",
    //                         "https://drive.google.com/file/d/1qbTf4f6ePIXKrvhPDqU9jOOvP8oS0y_M/view?usp=share_link",
    //                         "https://drive.google.com/file/d/1qUL2I50GSJzbzzdRBxaxfjR_OMfgtTsk/view?usp=share_link",
    //                         "https://www.youtube.com/watch?v=fWQrd6cwJ0A");
    
    // let movie2 = new Movie(idMovies(),
    //                       "Avengers End Game",
    //                       "Superhéroes",
    //                       "Tras los sucesos de «Vengadores: Infinity War», los superhéroes que sobrevivieron a Thanos se reunen para poner en práctica un plan definitivo que podría acabar con el villano definitivamente. No saben si funcionará, pero es su única oportunidad de intentarlo. Cuarta entrega de la saga «Vengadores» ",
    //                       "https://drive.google.com/file/d/1qRO-11JWO6nrk7owNSsvIeBMekDJRVDc/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1P6o20kmeXCqmJz2ADBrNp3l9_vWv4pby/view?usp=share_link",
    //                       "https://youtu.be/znk2OICHbjY")

    // let movie3 = new Movie(idMovies(),
    //                       "Black Adam",
    //                       "Superhéroes",
    //                       "Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses -y encarcelado con la misma rapidez-, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.",
    //                       "https://drive.google.com/file/d/1dT1AH4JMNyQXfCShApW970Bv7dBLxUrB/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1xzWhtAVInLqt4CY4FNX-esjo1qUbGU9F/view?usp=share_link",
    //                       "https://www.youtube.com/watch?v=a1mcS4tKGNg");

    // let movie4 = new Movie(idMovies(),
    //                       "Spiderman Sin Camino A Casa",
    //                       "Superhéroes",
    //                       "Peter Parker está desenmascarado y ya no puede separar su vida normal de las altas apuestas de ser un superhéroe. Cuando le pide ayuda al Doctor Strange, lo que está en juego se vuelve aún más peligroso, lo que lo obliga a descubrir lo que realmente significa ser Spider-Man.",
    //                       "https://drive.google.com/file/d/11Lw4e1m_kxkLrsQ9JpGHj2yOJ0DZ8vzt/view?usp=share_link",
    //                       "https://drive.google.com/file/d/18U9VUH5GHi7_TfEoOc87XIRS556HkWbb/view?usp=share_link",
    //                       "https://youtu.be/r6t0czGbuGI")

    // let movie5 = new Movie(idMovies(),
    //                       "Thor Amor y Trueno",
    //                       "Superhéroes",
    //                       "Cuarta película sobre «Thor» del MCU, en la que el Dios del trueno contará con Lady Thor como acompañante, personaje que interpretará Natalie Portman.",
    //                       "https://drive.google.com/file/d/17Lu5By83hzTJ7r9l8gQqSnv2rSbnCS8l/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1yt76RMcUMjXnKuKiJ-QZ6o2hAz1vgRw1/view?usp=share_link",
    //                       "https://youtu.be/vKKu-Wt7O2Q")

    // let movie6 = new Movie(idMovies(),
    //                       "Wakanda Forever",
    //                       "Superhéroes",
    //                       "La reina Ramonda, Shuri, M’Baku, Okoye y las Dora Milaje, luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia y Everett Ross, y forzar un nuevo destino para el reino de Wakanda.",
    //                       "https://drive.google.com/file/d/1lk8ZGBefwhaoyHHYwLUn8AauAadefPND/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1IeM0xIpOVrINmdYtL2-pT4EDfGL6DfH-/view?usp=share_link",
    //                       "https://youtu.be/BPjbiZQmBI4")

    // let movie7 = new Movie(idMovies(),
    //                       "1899",
    //                       "Ciencia Ficcion",
    //                       "Al cruzar el océano del viejo al nuevo continente, varios inmigrantes de diversas nacionalidades viven una pesadilla a bordo de un segundo barco a la deriva.",
    //                       "https://drive.google.com/file/d/1f5VZM0PO5p0z9Y0GrrlnWFOXPaSDsScK/view?usp=share_link",
    //                       "https://drive.google.com/file/d/16Gv61KNhos4JKgbU2WAiDjtKGn0ZPWYg/view?usp=share_link",
    //                       "https://youtu.be/J8pOtl3fze8")

    // let movie8 = new Movie(idMovies(),
    //                       "Free guy",
    //                       "Ciencia Ficcion",
    //                       "Un trabajador de un banco descubre que en realidad es un jugador dentro de un videojuego.",
    //                       "https://drive.google.com/file/d/1U0tp8j-FtGRoyXNvlyMDl7fiH_-Au0pL/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1vCfauCPR8hOsJl3cCeoUZUpBpW9Ez1Px/view?usp=share_link");

    // let movie9 = new Movie(idMovies(),
    //                       "Godzilla vs Kong",
    //                       "Ciencia Ficcion",
    //                       "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.",
    //                       "https://drive.google.com/file/d/1IF-i6DtTZ72PjiqoouP_NUKrB4uN13sJ/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1L5GATeel0C8eNTmMaEfMHkKOpM59PYwE/view?usp=share_link");

    // let movie10 = new Movie(idMovies(),
    //                       "Jurassic World: El reino caído",
    //                       "Ciencia Ficcion",
    //                       "Tras cuatro años de abandono del complejo turístico Jurassic World, Isla Nublar sólo está habitada por los dinosaurios supervivientes. Cuando el volcán de la isla entra en erupción, Owen (Chris Pratt) y Claire (Bryce Dallas Howard) vuelven allí para rescatar a los dinosaurios de la extinción. Owen va en busca de Blue, el raptor al que crió mientras que Claire, que ha empezado a valorar a estas criaturas, se centra más en salvar al resto. Cuando llegan a la isla descubren una conspiración que pretende llevar al planeta de nuevo a la era prehistórica.",
    //                       "https://drive.google.com/file/d/1rCjPZKTZBP7i7pa98n8CpOgzHYMCcd4x/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1iVDmd7lH_v2hWdOCbFMQlNs9vFbZdr_Z/view?usp=share_link");

    // let movie11 = new Movie(idMovies(),
    //                       "Matrix Resurrections",
    //                       "Ciencia Ficcion",
    //                       "Cuarta entrega de la franquicia «Matrix», que estará dirigida en solitario por Lana Wachowski. La producción del film arrancará en 2020, con Keanu Reeves y Carrie-Anne Moss interpretando de nuevo a sus personajes Neo y Trinity, respectivamente.",
    //                       "https://drive.google.com/file/d/1DHhHLRY7OnTNNruqC7Mvokr0brc1iXYY/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1IcH4uNilsMgy6asr7SyWa-vcwjQwAL3m/view?usp=share_link");
    // let movie12 = new Movie(idMovies(),
    //                       "Moonfall",
    //                       "Ciencia Ficcion",
    //                       "Una fuerza misteriosa golpea a la Luna fuera de su órbita y la envía en choque directo contra la Tierra a toda velocidad. Unas semanas antes del impacto con el mundo al borde de la aniquilación, la ejecutiva de la NASA y ex astronauta Jo Fowler está convencida de tener la clave para salvar nuestro planeta. Pero solo el astronauta Brian Harper y el teórico conspiranoico KC Houseman la creen. Estos héroes inverosímiles montarán una misión imposible al espacio, dejando atrás a todos sus seres queridos, para aterrizar en la superficie lunar e intentar salvar a la humanidad, enfrentándose a un misterio de proporciones cósmicas.",
    //                       "https://drive.google.com/file/d/1iqN61PrpGagSd5tMXpIS-ADc_1Li3EQW/view?usp=share_link",
    //                       "https://drive.google.com/file/d/10un2Hrqm1G2leRgvI8L3F9F-5TDP1D45/view?usp=share_link");
    // let movie13 = new Movie(idMovies(),
    //                       "Dragon Ball Super: Super Hero",
    //                       "Accion",
    //                       "El Ejército de la Cinta Roja del pasado de Goku ha regresado con dos nuevos androides para desafiarlo a él y a sus amigos.",
    //                       "https://drive.google.com/file/d/1hXcBP56cNYv3uawbaxNd2SFibvQy3Y-T/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1R_tSKQQ0uHKkruNBxKjc3Bzk4CW6rqIN/view?usp=share_link");
    // let movie14 = new Movie(idMovies(),
    //                       "John Wick",
    //                       "Accion",
    //                       "En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.",
    //                       "https://drive.google.com/file/d/1NEqTXGnAaSMby9Py3tMTdUjNjAWlVWtd/view?usp=share_link",
    //                       "https://drive.google.com/file/d/18TkWoKUMQ0PHASbZsY3sgZQoog6GcXRT/view?usp=share_link");
    // let movie15 = new Movie(idMovies(),
    //                       "Memory",
    //                       "Accion",
    //                       "Alex, un asesino a sueldo, descubre que se ha convertido en un objetivo después de que se niega a completar un trabajo para una peligrosa organización criminal. Con el sindicato del crimen y el FBI persiguiéndolo, Alex tiene las habilidades para mantenerse a la vanguardia, excepto por una cosa: está luchando con una pérdida de memoria severa que afecta todos sus movimientos. Alex debe cuestionar cada una de sus acciones y en quién puede confiar en última instancia.",
    //                       "https://drive.google.com/file/d/1Cuhr-FZoIF32HwSYEw_46nofdW41qywX/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1DaDiMj5cHCDewsSYzVg06aHR3SWL0Ltr/view?usp=share_link");
    // let movie16 = new Movie(idMovies(),
    //                       "Detective Knight: Sin piedad",
    //                       "Accion",
    //                       "James Knight es un veterano detective dedicado a navegar por las exigentes calles de Los Ángeles. Mientras la ciudad se prepara para Halloween, ladrones armados con máscaras hieren gravemente al compañero de Knight en un tiroteo después de un atraco. Con Knight persiguiéndolos, los bandidos huyen de Los Ángeles hacia Nueva York, donde el oscuro pasado del detective choca con su caso actual y amenaza con destrozar su mundo… a menos que la redención pueda reclamar primero a Knight.",
    //                       "https://drive.google.com/file/d/1spA8AwHwuTZQfAiD96L_-dRVTWnGmDU5/view?usp=share_link",
    //                       "https://drive.google.com/file/d/12EyeHmvktqFDy3CudtwDAGQXUX27qfen/view?usp=share_link");
    // let movie17 = new Movie(idMovies(),
    //                       "Top Gun: Maverick",
    //                       "Accion",
    //                       "Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete «Mavericks» Mitchel (Tom Cruise) se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba y esquivando el alcance en su rango, que no le dejaría volar emplazándolo en tierra. Cuando se encuentra entrenando a un destacamento de graduados de Top Gun para una misión especializada, Maverick se encuentra allí con el teniente Bradley Bradshaw (Miles Teller), el hijo de su difunto amigo «Goose»… Secuela de Top Gun.",
    //                       "https://drive.google.com/file/d/1f7ZClHmIXh5WP4zIDEePKp3iMXxNsZ97/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1ksDHy2O3NOOqMt3_HUwLZXx9oQMICA1k/view?usp=share_link");
    // let movie18 = new Movie(idMovies(),
    //                       "Tren Bala",
    //                       "Accion",
    //                       "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
    //                       "https://drive.google.com/file/d/1rXI9rm10Om27hIlfiN25fpqyF43ctoGm/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1CJHdhLkH5KCioozyAho9Sk_Gcb2NdYon/view?usp=share_link");
    // let movie19 = new Movie(idMovies(),
    //                       "River, el Más Grande Siempre",
    //                       "Documental",
    //                       "Documental que relata la historia de River desde sus comienzos, y su desarrollo como institución, el Monumental, el club, su labor social, y los éxitos deportivos, desde sus inicios hasta estos últimos dos años y cinco copas.",
    //                       "https://drive.google.com/file/d/1O-ABHWUEYocdrV5PHKrTcMhelr2wrh7A/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1toBigzphWo5kdeiOr5PCqJbd9XFiRFMz/view?usp=share_link");
    // let movie20 = new Movie(idMovies(),
    //                       "Rubius X",
    //                       "Documental",
    //                       "Hace ya 10 años del primer vídeo publicado por el Rubius en YouTube. Con motivo de esta celebración llega “Rubius X”, el documental sobre uno de los creadores de contenido españoles más reconocidos. Conoceremos la historia de la revolución que causó el nacimiento de YouTube con una de las figuras pioneras en el sector y el influencer más popular en España e Hispanoamérica con más de 40 millones de seguidores.",
    //                       "https://drive.google.com/file/d/1f6o9majYKtmVU4h4x8U0N_sikwAfQ69I/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1pUbqiOaDpatyBvpeitAdMu2zCARvcO0W/view?usp=share_link");
    // let movie21 = new Movie(idMovies(),
    //                       "Sean eternos: Campeones de América",
    //                       "Documental",
    //                       "This series takes an unprecedented closeup look at Lionel Messi and the Argentine team’s battle to break a 28-drought in Copa América.",
    //                       "https://drive.google.com/file/d/1e0yLzUOHuhWkKlFGkzQQ8sAglGctKSZC/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1buSRe83GmCkSKAYnZNut_TKp5EzvcD4r/view?usp=share_link");
    // let movie22 = new Movie(idMovies(),
    //                       "Robert Downey Sr",
    //                       "Documental",
    //                       "El relato de la vida y la carrera de Robert Downey, Sr., el intrépido y visionario director estadounidense que marcó la línea de la comedia contracultural en los años sesenta y los setenta.",
    //                       "https://drive.google.com/file/d/13XTfl4GDlFzlVbkkc5m_YCBKw5c2Kbzk/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1W5QdgskmNLk3Mex0gqH2jU6n2eVIqvBR/view?usp=share_link");
    // let movie23 = new Movie(idMovies(),
    //                       "QT8: Los primeros ocho",
    //                       "Documental",
    //                       "Documental que se centra en los primeros 21 años de la carrera cinematográfica de Quentin Tarantino, en el que se incluyen entrevistas con sus colaboradores habituales.",
    //                       "https://drive.google.com/file/d/15yM5LQa_xKACHLMZ_jG2H_8i30SPMSMk/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1oTWWbREyNODv_HfMLTrxzCQsGmyBnAdQ/view?usp=share_link");
    // let movie24 = new Movie(idMovies(),
    //                       "The United Way",
    //                       "Documental",
    //                       "The United Way es la legendaria historia de uno de los equipos deportivos más emblemáticos del mundo, el Manchester United, desde sus humildes comienzos hasta convertirse en un gigante con más de 650 millones de seguidores en todo el mundo. Presentado por Eric Cantona y con la participación de Charlton, Best, Cantona, Beckham y Ronaldo, junto con impresionantes imágenes de archivo y nunca antes vistas, The United Way celebra el fenómeno mundial de un club unificador para el pueblo, por el pueblo.",
    //                       "https://drive.google.com/file/d/14vHV3wfXS-7fl5A-QbRg0isF0y057-T1/view?usp=share_link",
    //                       "https://drive.google.com/file/d/1VY8-8dTypYVRGn5ufIgFIUYucFCNDFNm/view?usp=share_link");


    let movie1 = new Movie (idMovies(),
    "John Wick",
    "Accion",
    "Después de que John Wick pierda a su esposa, Helen, por una enfermedad terminal, recibe un cachorro beagle llamado Daisy de su difunta esposa para ayudarlo a sobrellevar su dolor. A pesar del comportamiento estoico de John, él se une con el cachorro y pasan el día conduciendo en su Ford Mustang Boss 429 de 1969. En una estación de servicio, se encuentra con un trío de gánsteres rusos cuyo líder, llamado Iosef, insiste en comprar su automóvil, pero John reiteradamente afirma que el auto no está a la venta. Frustrados, los mafiosos siguen a John a su casa, lo dejan inconsciente a golpes, roban su auto y matan a Daisy.",
    "https://drive.google.com/file/d/1vTbaJzvXeCDBjsvNh1y99GSiEIsBJRHM/view?usp=share_link",
    "https://drive.google.com/file/d/18TkWoKUMQ0PHASbZsY3sgZQoog6GcXRT/view?usp=share_link",
    "https://youtu.be/C0BMx-qxsP4"
    )
    let movie2 = new Movie (idMovies(),
    "Nobody",
    "Accion",
    "Hutch Mansell (Bob Odenkirk) es un hombre de familia corriente. Una noche unos ladrones entran a su casa y él renuncia a defenderse y defender a su familia con el fin de evitar complicaciones. Esto decepciona a su hijo Blake (Gage Munroe) y a su mujer Becca (Connie Nielsen) que empiezan a distanciarse de él. El incidente le reconcome por dentro y hace que salga a la luz su lado más oscuro.",
    "https://drive.google.com/file/d/1JNtgGmV7lPBsFBpcM9EyF7p1j8XtQXCY/view?usp=share_link",
    "https://drive.google.com/file/d/1gdvmob3_LoDvxig0xCF97MeFI3iLurlA/view?usp=share_link",
    "https://www.youtube.com/watch?v=wZti8QKBWPo"
    )

    let movie3 = new Movie ( idMovies(),
    "Kill Bill",
    "Accion",
    "El día de su boda, una asesina profesional (Thurman) sufre el ataque de algunos miembros de su propia banda, que obedecen las órdenes de Bill (David Carradine), el jefe de la organización criminal. Logra sobrevivir al ataque, aunque queda en coma. Cuatro años después despierta dominada por un gran deseo de venganza.",
    "https://drive.google.com/file/d/1VAzhYOiM8spEuPqycm50gQODYIOV_rRo/view?usp=share_link",
    "https://drive.google.com/file/d/114AVd8oSDtPUEAAsfOo0L8O5NYcfFq26/view?usp=share_link",
    "https://youtu.be/7kSuas6mRpk"
    )

    let movie4 = new Movie (idMovies(),
    "Bullet Train",
    "Accion",
    "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
    "https://drive.google.com/file/d/1C22QDtIz7kx6NhXrLaAO9wdNZQLeynoE/view?usp=share_link",
    "https://drive.google.com/file/d/1lVNGwGZczpx6w4JB0570NtBvcJKVn7qj/view?usp=share_link",
    "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
    )

    let movie5 = new Movie ( idMovies(),
    "Serbuan Maut",
    "Accion",
    "Todo el mundo en Jakarta sabe que en los barrios bajos de la ciudad hay un edificio que sirve de refugio para los criminales más peligrosos de Indonesia. Algo así como una fortaleza del mal cuya leyenda crece día a día y a la que incluso la policía teme acercarse. Pese a ello, un grupo de fuerzas especiales de élite intentará derribar sus defensas y penetrar en sus entrañas. Pero la operación no sale según lo previsto, y los policías se encontrarán atrapados en el edificio, sin escapatoria posible y rodeados de asesinos y gángsters.",
    "https://drive.google.com/file/d/1i13hsxETpYIg7c3tyin4Lycj_jOfYHMy/view?usp=share_link",
    "https://drive.google.com/file/d/1EdSz9rdn9XZjsKUjKz-DF9C2BdQM8Dpq/view?usp=share_link",
    "https://youtu.be/m6Q7KnXpNOg"
    )

    let movie6 = new Movie (idMovies(),
    "Memory",
    "Accion",
    "Un asesino a sueldo descubre que se ha convertido en un objetivo después de que se niega a completar un trabajo para una peligrosa organización criminal... Remake de la película belga 'De zaak alzheimer' (2003).",
    "https://drive.google.com/file/d/1rZ4Goa3ouwAKFH-1y550CUV3q9jnqe_p/view?usp=share_link",
    "https://drive.google.com/file/d/1Y-1LZTfU-MWyETKPA1BVbH-4eVSOcmRZ/view?usp=share_link",
    "https://youtu.be/ye63hQLDj4k"
    )
          
    let movie7 = new Movie (idMovies(),
    "Sean Eternos",
    "Documental",
    "Esta serie documental cuenta la historia de Lionel Messi y la Selección Argentina en la Copa América 2021. A través de entrevistas a jugadores, cuerpo técnico y leyendas del fútbol mundial, junto con imágenes exclusivas, da una mirada inédita de la consagración que terminó una racha de 28 años sin títulos y 7 finales perdidas.",
    "https://drive.google.com/file/d/10qLZqSK-KqkrzX3FXnyba00c1uggoFS4/view?usp=share_link",
    "https://drive.google.com/file/d/1FwT8Comw5qu_NC1srln7cE0Tht3Z9hkS/view?usp=share_link",
    "https://youtu.be/zkmxFvWu8Bc"
    )

    let movie8 = new Movie (idMovies(),
    "No me olvido ese día",
    "Documental",
    "“No me olvido ese día que una vieja chiflada decía que Racing no existía y tenía que ser liquidado. Si llenamos nuestra cancha y no jugamos, oh, oh; defendimos del remate nuestra sede, oh, oh; si la nuestra es una hinchada diferente…” reza, al son de la célebre canción de Andrés Calamaro 'Para no olvidar', un emblemático cántico del folclore futbolístico argentino. Ese día fue el 4 de marzo de 1999 cuando la síndico Liliana Ripoll anunció, poco después de leer la resolución de la Cámara, que Racing Club Asociación Civil había dejado de existir. La respuesta de los hinchas de La Academia no se hizo esperar y evitaron la clausura de la sede mediante encadenamientos.",
    "https://drive.google.com/file/d/1-zAV7zPNZHs9UZz84BxAeMrrxtUbjfhH/view?usp=share_link",
    "https://drive.google.com/file/d/1a5BOi1ZRFLnXBMf2dgtwjYaVtTRopqOH/view?usp=share_link",
    "https://youtu.be/4AmEKbyGBqI"

    )

    let movie9 = new Movie ( idMovies(),
    "En palabras del Unabomber",
    "Documental",
    "4 episodios. Articulada en torno a una entrevista, esta docuserie narra cómo el joven intelectual Ted Kaczynski pasó a ser una de las personas más peligrosas de la historia de EE UU.",
    "https://drive.google.com/file/d/16SxoUQQoOBdN70Jba5zq4YCmnKz3JTea/view?usp=share_link",
    "https://drive.google.com/file/d/1xK14AbVMpYlNJyXl4bXQ7zn-ceFLfE8m/view?usp=share_link",
    "https://youtu.be/uaSuNEcW6fM"

    )

    let movie10 = new Movie ( idMovies(),
    "D.B Cooper: Where are you?",
    "Documental",
    "Documental sobre el célebre caso de D. B. Cooper, es el nombre atribuido al hombre que secuestró un avión Boeing 727 en Estados Unidos el 24 de noviembre de 1971, recibió un rescate de 200.000 dólares y saltó en paracaídas desde la aeronave.​ La forma en la que Cooper escapó de la justicia así como la incertidumbre sobre su paradero continúan intrigando al público. Es el único caso de piratería aérea sin resolver en Estados Unidos.",
    "https://drive.google.com/file/d/1GdrwG7-cjlSjSddNzwG4d-Ca-LRFZSXV/view?usp=share_link",
    "https://drive.google.com/file/d/1O-tG1cSBsP4L8x9pBNs-jh0zWcCtAsZM/view?usp=share_link",
    "https://youtu.be/29i4ZpCxeJA",

    )

    let movie11 = new Movie ( idMovies(),
    "La patagonia rebelede",
    "Documental",
    "En 1920, unos obreros de la Patagonia (Argentina), agrupados en sociedades anarquistas y socialistas, deciden hacer una huelga exigiendo mejoras laborales. Entre los trabajadores hay numerosos emigrantes europeos que influyen ideológicamente en sus compañeros. La situación se hace insostenible y el gobierno de Yrigoyen manda, desde Buenos Aires, al teniente coronel Zavala para que restablezca el orden...",
    "https://drive.google.com/file/d/1guCRg_QxSLbPu-1Yqw1EzS8FMYKL9VFp/view?usp=share_link",
    "https://drive.google.com/file/d/1Myu_qQhwLtXvGoC7kujJbt-0YrVtPn4x/view?usp=share_link",
    "https://www.youtube.com/watch?v=i56UdTCk8bg",


    )

    let movie12 = new Movie ( idMovies(),
    "The last Dance",
    "Documental",
    "Miniserie de TV (2020). 10 episodios. Docuserie repleta de material inédito de la temporada 1997-98 , que muestra la carrera del legendario baloncestista Michael Jordan, uno de los mayores iconos del deporte de todos los tiempos, y su trayectoria con los Chicago Bulls en los años 90",
    "https://drive.google.com/file/d/1jU8Zva8XCb7Xoq1TpR5Ts1GHaHvDacoj/view?usp=share_link",
    "https://drive.google.com/file/d/1CU3ULeCNN2honjrWUZsUn8bIoRJ3a6hp/view?usp=share_link",
    "https://youtu.be/qQjYmZgB3QQ"
    )

    let movie13 = new Movie ( idMovies(),
    "QT8: The First Eight",
    "Documental",
    "Documental que se centra en los primeros 21 años de la carrera cinematográfica de Quentin Tarantino, en el que se incluyen entrevistas con sus colaboradores habituales. ",
    "https://drive.google.com/file/d/14F2l6deRQ2cnWBATYgW0ssp47E6nmXL4/view?usp=share_link",
    "https://drive.google.com/file/d/19V_zjB4yqR8rMIUd02Yph-EHkPvZpIqL/view?usp=share_link",
    "https://youtu.be/6j2kdRK1AR8",
    )

    let movie14 = new Movie ( idMovies(),
    "2001: Una odisea del espacio",
    "Ciencia Ficcion",
    'La película de ciencia-ficción por excelencia de la historia del cine narra los diversos periodos de la historia de la humanidad, no sólo del pasado, sino también del futuro. Hace millones de años, antes de la aparición del "homo sapiens", unos primates descubren un monolito que los conduce a un estadio de inteligencia superior. Millones de años después, otro monolito, enterrado en una luna, despierta el interés de los científicos. Por último, durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.',
    "https://drive.google.com/file/d/1iEVzA8AQ90kY4RiQBuJrh5G9Z1KVjLj8/view?usp=share_link",
    "https://drive.google.com/file/d/1CpMlh3sYUbdVrwyuZuKO-tLE_DCBKt_W/view?usp=share_link",
    "https://youtu.be/oR_e9y-bka0"
    )

    let movie15 = new Movie ( idMovies(),
    "Matrix",
    "Ciencia Ficcion",
    "Un programador pirata recibe un día una misteriosa visita... Nada más se debe contar de la sinopsis de Matrix. Es más, si todavía no la ha visto, no deje que nadie le cuente qué es Matrix. Porque gran parte del éxito mundial de esta fascinante y entretenidísima película se basa en su original guion, asombrosa idea y producto de la era tecnológica en la que vivimos. Si a ello le unimos su revolucionaria estética -con espectaculares y trepidantes escenas de acción nunca vistas en el género-, tendremos el porqué de la consagración de esta cinta fantástica como el mayor film de culto de final de siglo. Puede que en unos años quede obsoleta, pero para entonces ya nada nos hará olvidar el día que descubrimos qué es Matrix... y a aquella Trinity | Carrie-Anne Moss, auténtico hielo -que de frío quema-, la más hipnótica heroína de estos tiempos cibernéticos.",
    "https://drive.google.com/file/d/1L049jINVoXhY8r_WewgDjr-NqGOXAIGE/view?usp=share_link",
    "https://drive.google.com/file/d/1LqE4cUeb7r18vr4bTPJ4J0HnWEHIVB8l/view?usp=share_link",
    "https://youtu.be/vKQi3bBA1y8",

    )

    let movie16 = new Movie ( idMovies(),
    "Blade Runner",
    "Ciencia Ficcion",
    'Noviembre de 2019. A principios del siglo XXI, la poderosa Tyrell Corporation creó, gracias a los avances de la ingeniería genética, un robot llamado Nexus 6, un ser virtualmente idéntico al hombre pero superior a él en fuerza y agilidad, al que se dio el nombre de Replicante. Estos robots trabajaban como esclavos en las colonias exteriores de la Tierra. Después de la sangrienta rebelión de un equipo de Nexus-6, los Replicantes fueron desterrados de la Tierra. Brigadas especiales de policía, los Blade Runners, tenían órdenes de matar a todos los que no hubieran acatado la condena. Pero a esto no se le llamaba ejecución, se le llamaba "retiro". Tras un grave incidente, el ex Blade Runner Rick Deckard es llamado de nuevo al servicio para encontrar y "retirar" a unos replicantes rebeldes.',
   "https://drive.google.com/file/d/1JLfwoR2hjkhArJI4ZCQE_NkoZlMFj3g1/view?usp=share_link",
    "https://drive.google.com/file/d/1WfaEpuFt1jyDN23TK4ldQ4m394ZOlJSW/view?usp=share_link",
    "https://youtu.be/eogpIG53Cis",
    )

    let movie17 = new Movie ( idMovies(),
    "Inception",
    "Ciencia Ficcion",
    "Dom Cobb (DiCaprio) es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir.",
    "https://drive.google.com/file/d/1vQXJK59H4_NuCOMX92-S1a97jBZArDMw/view?usp=share_link",
    "https://drive.google.com/file/d/1YB_X4_YIfL5VLMZeukNrKm-c7LIOFmNV/view?usp=share_link",
    "https://youtu.be/YoHD9XEInc0"


    )

    let movie18 = new Movie ( idMovies(),
    "Interstellar",
    "Ciencia Ficcion",
    "Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana. ",
    "https://drive.google.com/file/d/1CsvucSukOgp6olPcKGhdKLdXSXzTl0It/view?usp=share_link",
    "https://drive.google.com/file/d/1iT_jjBEoR9vJH5qADJe5Yuzzpv_6B5Uz/view?usp=share_link",
    "https://youtu.be/zSWdZVtXT7E"
    )

    let movie19 = new Movie ( idMovies(),
    "Star Wars: El despertar de la Fuerza",
    "Ciencia Ficcion",
    "Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte (hechos narrados en el Episodio VI: El retorno del Jedi), la galaxia está todavía en guerra. Una nueva República se ha constituido, pero una siniestra organización, la Primera Orden, ha resurgido de las cenizas del Imperio Galáctico. A los héroes de antaño, que luchan ahora en la Resistencia, se suman nuevos héroes: Poe Dameron, un piloto de caza, Finn, un soldado desertor de la Primera Orden, Rey, una joven chatarrera, y BB-8, un androide rodante. Todos ellos luchan contra las fuerzas del Mal: el Capitán Phasma, de la Primera Orden, y Kylo Ren, un temible y misterioso personaje que empuña un sable de luz roja.",
    "https://drive.google.com/file/d/1PCBnO8QRg4TtQ1ntmwWZMi6Jwx3vuePQ/view?usp=share_link",
    "https://drive.google.com/file/d/1_-Un1qRUwfpVV-6HERRIat3V9fVzVrto/view?usp=share_link",
    "https://youtu.be/sGbxmsDFVnE"
    )

    let movie20 = new Movie ( idMovies(),
    "Star Trek",
    "Ciencia Ficcion",
    "Siglo XXIII. Al almirante James T. Kirk, de la nave Enterprise, se le encomienda una difícil misión: neutralizar un extraño cuerpo para evitar su colisión con la Tierra y la consiguiente catástrofe. El oficial Spock, el capitán Willard Decker, la asesora Ilia y el doctor McCoy ayudan a Kirk a descubrir la naturaleza de este cuerpo sideral, provisto de un mecanismo de inteligencia de origen terrestre. La expedición del Enterprise localiza al ente y, entonces, se apresta a introducirse en su centro de operaciones.",
    "https://drive.google.com/file/d/1pzfpI2jF24iL-SKNm8KIGyY9JcOQvp5W/view?usp=share_link",
    "https://drive.google.com/file/d/1-CMwC1KzTtNPtcrk5a6ES81NzIn_D2q2/view?usp=share_link",
    "https://www.youtube.com/watch?v=nPDb5wX4H7I"
    )

    let movie21 = new Movie ( idMovies(),
    "The Batman",
    "Superhéroes",
    "Después de dos años acechando por las calles de la ciudad como Batman (Robert Pattinson), e infundiendo miedo en las mentes perversas de los criminales, Bruce Wayne está sumido en las profundidades de las sombras de Gotham City. Este vigilante solitario cuenta con pocos aliados de confianza y eso le ha llevado a convertirse en la única encarnación de la venganza entre sus conciudadanos. Cuando un asesino apunta a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas lleva a Batman a realizar una investigación en el inframundo.",
      "https://drive.google.com/file/d/1sW1ed9w32z2GC9ZZzkzxS3gK261v7e7E/view?usp=share_link",
      "https://drive.google.com/file/d/1YVgqlWxmx4Ha72CuH3LfaSOpDBFTPsFu/view?usp=share_link",
   "https://youtu.be/fWQrd6cwJ0A"
    )

    let movie22 = new Movie ( idMovies(),
    "Deadpool",
    "Superhéroes",
    "Basado en el anti-héroe menos convencional de la Marvel, Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, reconvertido a mercenario, y que tras ser sometido a un cruel experimento adquiere poderes de curación rápida, adoptando Wade entonces el alter ego de Deadpool. Armado con sus nuevas habilidades y un oscuro y retorcido sentido del humor, Deadpool intentará dar caza al hombre que casi destruye su vida.",
    "https://drive.google.com/file/d/1fqXG2T4RxgS2iAMKJjdkegok_VIT4Wdz/view?usp=share_link",
    "https://drive.google.com/file/d/1xnAakf9B_IfHc1_oK40wDOtkWVBWtgL_/view?usp=share_link",
    "https://youtu.be/ONHBaC-pfsk"

    )

    let movie23 = new Movie ( idMovies(),
    "Doctor Strange in the Multiverse of Madness",
    "Superhéroes",
    "Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.",
    "https://drive.google.com/file/d/1XPzUmWzyepC4T3DWrzNNYb4ZLJ9X-Gg5/view?usp=share_link",
    "https://drive.google.com/file/d/1IhhSb7m1CtmxHx6Fpmc5yPCzXxohlZ2Q/view?usp=share_link",
    "https://youtu.be/aWzlQ2N6qqg"


    )

    let movie24 = new Movie ( idMovies(),
    "Spider-Man: No Way Home",
    "Superhéroes",
    "Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado, y por tanto, ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un superhéroe. Cuando pide ayuda al Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser él.",
    "https://drive.google.com/file/d/19lm6yNB5XdWkDdKo72FPpINzDGNonTsa/view?usp=share_link",
    "https://drive.google.com/file/d/1O8itC0_kDaHHEqm_K_ofdg2Gh8oF2G6Z/view?usp=share_link",
    "https://youtu.be/JfVOs4VSpmA"
    )

    let movie25 = new Movie ( idMovies(),
    "Avengers: Endgame",
    "Superhéroes",
    "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias",
     "https://drive.google.com/file/d/1Q7xdo-rEE3lauZPaKwSRUvxhrzCbRDj7/view?usp=share_link",
     "https://drive.google.com/file/d/1qfgZU7TLQZbTeeEHpmaQo72KbZsm_nqq/view?usp=share_link",
     "https://www.youtube.com/watch?v=hA6hldpSTF8"
    )

    let movie26 = new Movie ( idMovies(),
    "Black Panther: Wakanda Forever",
    "Superhéroes",
    "La reina Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) y las Dora Milaje (incluida Florence Kasumba), luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia (Lupita Nyong’o) y Everett Ross (Martin Freeman), y forzar un nuevo destino para el reino de Wakanda.",
    "https://drive.google.com/file/d/1ro2vnDWRmcgx_AJYSnUXsy5wKxG8rNCK/view?usp=share_link",
    "https://drive.google.com/file/d/1QEr7PTc20bWjyVurgZluCbTntvmwloB6/view?usp=share_link",
    "https://www.youtube.com/watch?v=_Z3QKkl1WyM", 

    )

    let movie27 = new Movie ( idMovies(),
    "Black Widow",
    "Superhéroes",
    "Natasha Romanoff, alias Viuda Negra, se enfrenta a los capítulos más oscuros de su historia cuando surge una peligrosa conspiración relacionada con su pasado. Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe lidiar con su historia como espía y con la estela de relaciones destruidas que dejó atrás mucho antes de convertirse en Vengadora.",
    "https://drive.google.com/file/d/1Qx1lEY-7rAvmR8LgG4fULw2wMuz1j1ZX/view?usp=share_link",
    "https://drive.google.com/file/d/1sXiRBU9XflW3q1uZ__93zefDEgv49PgX/view?usp=share_link",
    "https://www.youtube.com/watch?v=ybji16u608U"
    )


    let arrayMovies = [];
  
    arrayMovies.push(movie1);
    arrayMovies.push(movie2);
    arrayMovies.push(movie3);
    arrayMovies.push(movie4);
    arrayMovies.push(movie5);
    arrayMovies.push(movie6);
    arrayMovies.push(movie7);
    arrayMovies.push(movie8);
    arrayMovies.push(movie9);
    arrayMovies.push(movie10);
    arrayMovies.push(movie11);
    arrayMovies.push(movie12);
    arrayMovies.push(movie13);
    arrayMovies.push(movie14);
    arrayMovies.push(movie15);
    arrayMovies.push(movie16);
    arrayMovies.push(movie17);
    arrayMovies.push(movie18);
    arrayMovies.push(movie19);
    arrayMovies.push(movie20);
    arrayMovies.push(movie21);
    arrayMovies.push(movie22);
    arrayMovies.push(movie23);
    arrayMovies.push(movie24);
    arrayMovies.push(movie25);
    arrayMovies.push(movie26);
    arrayMovies.push(movie27);
    localStorage.setItem("Movies",JSON.stringify(arrayMovies));
  
    }
}