import schlange from "../assets/images/schlange.jpg"
import tanzpadagogik from "../assets/images/Tanzpadagogik.jpg"

const Ebook = () => {
    return(
        <>
        <div className="relative h-70 w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover brightness-50 z-0" style={{ backgroundImage: `url(${schlange})` }}>
        </div>
        <div className="relative z-10 text-center">
            <h1 className="text-brandYellow text-6xl font-tussilago">Rituelle Tanzpädagogik</h1>
        </div>
        </div>
        <div className="h-125 flex justify-between">
        <div className="w-125 flex justify-end align-top ">
            <img src={tanzpadagogik} alt="Rituelle Tanzpädagogik" className="w-64 h-auto object-contain"/>
        </div>
        <div className="w-325 bg-amber-200">
            <h2 className="font-tussilago text-xl">
                Grundlagen für tanzpädagogische Workshops
            </h2>
        </div>
        </div>

        </>
    )
}
export default Ebook;