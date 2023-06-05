import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



import { useGetGraphDataQuery } from "../api/CountrySlice"

export const DateStatistics = () => {
    const { data: graphData, isLoading, isError } = useGetGraphDataQuery("")
    const labelArray = graphData && Object.keys(graphData.cases)
    const casesArray = []
    const recoveredArray = []
    const deathsArray = []
    if (graphData) {

        for (const x in graphData.deaths) {
            deathsArray.push(graphData.deaths[x])

        }
        for (const x in graphData.recovered) {
            recoveredArray.push(graphData.recovered[x])

        }
        for (const x in graphData.recovered) {
            casesArray.push(graphData.cases[x])

        }

    }


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Covid Staristics',
            },
        },
    };
    const labels = labelArray || [];
    const data = {
        labels,
        datasets: [
            {
                label: 'Cases',
                data: casesArray,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
            {
                label: 'Recovered',
                data: recoveredArray,
                borderColor: 'rgb(53, 255, 16)',
                backgroundColor: 'rgba(53, 255, 16, 0.5)',
            },
            {
                label: 'Deaths',
                data: deathsArray,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    if (isLoading) return <h1>Loading...</h1>
    return <>
        {isError && <div>Something went wrong</div>}

        {
            graphData && <div className='w-1/2 mx-auto  [height:"500px"]'>
                <Line options={options} data={data} />
            </div>
        }
    </>
}
