import PgHeader from "../components/PgHeader"
import PgFooter from "../components/PgFooter"
import AboutContent from "../components/About"

export const metadata = {
  title: 'Tridakta | About Us',
  description: 'Tridakta Labs'
}

export default function About() {
    return (
        <div className='min-h-screen max-h-screen w-screen flex flex-col'>
            <PgHeader/>
            <AboutContent/>
            <PgFooter/>
        </div>
    )
}