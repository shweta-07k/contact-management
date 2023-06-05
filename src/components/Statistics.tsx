import { useGetWorldWideDataQuery } from "../api/CountrySlice"

export const Statistics = () => {
    const { data, isLoading, isError } = useGetWorldWideDataQuery("")
    if (isLoading) return <h1>Loading...</h1>
    return <>
        {isError && <div>Something went wrong</div>}
        {
            data && <section className="bg-white dark:bg-gray-900 ml-36  mb-5">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl className="grid max-w-screen-md gap-20 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
                        <div className="flex flex-col items-center justify-center   ">
                            <dt className="mb-2 text-2xl md:text-4xl font-extrabold">{data.cases}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Total</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-2xl md:text-4xl font-extrabold text-blue-600">{data.active}</dt>
                            <dd className="font-light  dark:text-gray-400 text-blue-600">Active</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-2xl md:text-4xl font-extrabold text-green-600">{data.recovered}</dt>
                            <dd className="font-light text-green-600 dark:text-gray-400">Recovered</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-2xl md:text-4xl font-extrabold text-red-600">{data.deaths}</dt>
                            <dd className="font-light text-red-600 dark:text-gray-400">Deaths</dd>
                        </div>
                    </dl>
                </div>
            </section>
        }


    </>
}
