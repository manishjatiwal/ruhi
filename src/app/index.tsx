import Select from 'components/select'

const REGIONS = [
    { label: 'Asia', value: 'asia' },
    { label: 'Africa', value: 'africa' },
    { label: 'North America', value: 'north-america' },
    { label: 'South America', value: 'south-america' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
    { label: 'Antartica', value: 'antartica' }
]

function App() {
    return (
        <div className='w-[300px]'>
            <Select
                label='Region'
                onSelect={(value) => console.log(value)}
                options={REGIONS}
                value={null}
            />
        </div>
    )
}

export default App
