import {FC} from 'react'

type StockBarProps = {
    value: number;
    total?: number;
    width?: number;
}

const StockBar = ({value, total = 1000}: StockBarProps) => {
    const percent = Math.min(100, value/total*100).toFixed(0);

    return (
        <div className='w-full bg-gray-200 h-4 rounded overflow-hidden'>
            <div className='bg-green-500 h-full' style={{width: `${percent}%`}}></div>
        </div>
    )
}

export default StockBar