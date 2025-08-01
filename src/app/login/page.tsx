import PgHeader from '../components/PgHeader'
import PgFooter from '../components/PgFooter'
import SignUp from '../components/Login'

export const metadata = {
  title: 'Tridakta | Login',
  description: 'Tridakta Labs'
}

export default function SignUpPage() {
    return(
        <div className='main-page'>
            <PgHeader/>
            <SignUp/>
            <PgFooter/>
        </div>
    )
}