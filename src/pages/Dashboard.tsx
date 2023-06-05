import { useGetCountryDataQuery, useGetGraphDataQuery, useGetWorldWideDataQuery } from '../api/CountrySlice'
import { DateStatistics } from '../components/DateStatistics'
import { Statistics } from '../components/Statistics'

function Dashboard() {
    // const { data: cdata } = useGetCountryDataQuery("")
    // const { data: gdata } = useGetGraphDataQuery("")
    // console.log(gdata)

    return <>
        <Statistics />
        <DateStatistics />

    </>
}

export default Dashboard