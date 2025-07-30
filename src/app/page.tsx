import PgHeader from './components/PgHeader'
import PgFooter from './components/PgFooter'
import MainContent from './components/Maincontent'

export default function Home() {
  return (
    <div className='min-h-screen max-h-screen w-screen flex flex-col'>
      <PgHeader/>
      <MainContent/>
      <PgFooter/>
    </div>
  );
}
