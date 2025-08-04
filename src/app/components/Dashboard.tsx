import Card from './Card'

const Dashboard = () => {

    return (
        <div id='dash-content' className="bg-back2 w-full h-[90vh] overflow-auto flex flex-col py-[1%] px-[4%]">
            <h2 className="mx-auto font-bold text-4xl text-center mb-[3%]">Welcome, Geovanna</h2>
            <h3 className="font-bold text-2xl mb-[1%]">What would you like to do next?</h3>
            <div className="w-full h-[17vh] mb-[2%] flex flex-row p-1 gap-[2%]">
                <Card title='Add Filament' desc='Add new filament to inventory.' roll={90}/>
                <Card title="Log Print" desc='Generate a Print Report' roll={180}/>
                <Card title='Upcoming Feature' desc='Stay tunned for updates on our GitHub'/>
                <Card title='Upcoming Feature' desc='Stay tunned for updates on our GitHub'/>
            </div>
            <h3 className="font-bold text-2xl mb-[1%]">Manage Fillament Inventory</h3>
        </div>
    )
}

export default Dashboard