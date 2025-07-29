import { BsCodeSlash } from "react-icons/bs"

const PgFooter = () => (
    <footer className="absolute bottom-0 mb-10 w-full flex flex-row justify-center text-offgray items-center group">
        <span className="font-light mr-3 group-hover:-translate-x-10 transition-all duration-300 ease-linear hover:-translate-x-0">Developed by</span>
        <div className="flex flex-row gap-2 text-white hover:scale-150 cursor-pointer transition-all duration-300 ease-linear items-center hover">
            <BsCodeSlash className="" size="18"/>
            <span className="font-light">Tridakta Labs</span>
        </div>
    </footer>
)

export default PgFooter