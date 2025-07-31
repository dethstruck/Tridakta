import PgHeader from '../components/PgHeader'
import PgFooter from '../components/PgFooter'
import SignUp from '../components/Login'

export default function SignUpPage() {
    return(
        <div className='main-page'>
            <PgHeader/>
            <SignUp/>
            <PgFooter/>
        </div>
    )
}