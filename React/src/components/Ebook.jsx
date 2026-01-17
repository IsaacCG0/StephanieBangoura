import schlange from "../assets/images/schlange.jpg"
import tanzpadagogik from "../assets/images/Tanzpadagogik.jpg"

const Ebook = () => {
    return (
        <>
            <div className="relative h-70 w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-fixed bg-center bg-cover brightness-50 z-0" style={{ backgroundImage: `url(${schlange})` }}>
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-brandYellow lg:text-6xl md: text-3xl font-tussilago">Rituelle Tanzpädagogik</h1>
                </div>
            </div>
            <div className="h-15"></div>
            <div className="h-125 flex md:flex-col lg:flex-row justify-between">
                <div className="w-125 flex justify-end items-start ">
                    <img src={tanzpadagogik} alt="Rituelle Tanzpädagogik" className="w-64 h-auto object-contain" />
                </div>
                <div className="w-225 flex flex-col justify-normal mx-10">
                    <div>
                        <p>
                            Stephanie Bangoura
                        </p>
                        <h1 className="font-tussilago text-2xl">
                            Grundlagen für tanzpädagogische Workshops
                        </h1>
                    </div>
                    <br />
                    <div className="mt-10 text-justify">
                        <p>
                            Aus der Verbindung westafrikanisch-animistischer Tanztraditionen und humanistischer
                            Psychologie hat Stephanie Bangoura eine Tanzpädagogik entwickelt,
                            die spirituelle und heilsame Potenziale des Tanzes erschließt.
                        </p>
                        <br />
                        <p>
                            Grundlage ist das Ritual als zentrales Element des Animismus, das die Autorin entmystifiziert und in pädagogische Praxis im
                            Tanz integriert. Nach einer Einführung in den Animismus und die humanistische Psychologie wird das pädagogische
                            Handwerkszeug erläutert. Konkrete Praxisanleitungen und autobiografische Elemente ermöglichen die Planung und Umsetzung
                            eigener tanzpädagogischer Workshops. Der Band endet mit einem Blick auf Rituelle Tanzpädagogik in anderen soziopolitischen
                            Diskursen sowie einem tanzpädagogischen Plädoyer für Selbst-Dekolonisierung.
                        </p>
                        <br />
                        <p>
                            Professionelle Tänzer:innen, Tanzpädagog:innen, Sozialarbeiter:innen, Therapeut:innen und alle, 
                            die Tanz und Musik beruflich in Gruppen anwenden, finden hier den Zugang zu einer ganzheitlichen und transkulturellen Pädagogik, die kreative, 
                            spirituelle und heilsame Potenziale des Tanzes für Gemeinschaftsbildung und Persönlichkeitsstärkung verbindet.
                        </p>
                    </div>
                </div>
                <div className="w-125 bg-amber-200 flex justify-normal">
                    <div className="bg-amber-800 h-auto">

                        <h2 className="font-tussilago text-xl">
                            Grundlagen für tanzpädagogische Workshops
                        </h2>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Ebook;