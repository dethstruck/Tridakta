import PgHeader from '../components/PgHeader'
import PgFooter from '../components/PgFooter'
import SignUp from '../components/Login'

export default function SignUpPage() {
    return(
        <div className='min-h-screen max-h-screen w-screen flex flex-col'>
            <PgHeader/>
            <SignUp/>
            <PgFooter/>
        </div>
    )
}