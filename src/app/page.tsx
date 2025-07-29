import PgHeader from './components/PgHeader'
import PgFooter from './components/PgFooter'
import MainContent from './components/Maincontent'

export default function Home() {
  return (
    <div className='h-full w-full'>
      <PgHeader/>
      <MainContent/>
      <PgFooter/>
    </div>
  );
}
