import React,{useState, useEffect} from 'react';
import Filters from '../../components/Filters'
import Chart from 'react-apexcharts'
import {barOptions, pieOptions} from './chart-options'
import './styles.css'
import Axios from 'axios';
import {buildBarSeries, getGenderChartData, getPlatformChartData} from './helpers'


type PieChartData = {
    labels:string[];
    series:number[];
}

type BarChartData = {
    x:string;
    y:number;
}

const initialPieData = {
    labels:[],
    series:[]
}
const BASE_URL = "https://sds1-lfcsvt.herokuapp.com";

const Charts = ( ) =>{

    const [barData, setBarData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(()=>{
        async function getData(){
            const recordsResponse = await Axios.get(`${BASE_URL}/records`);
            const gamesResponse = await Axios.get(`${BASE_URL}/games`);
            console.log(gamesResponse.data)
            const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content)
            setBarData(barData)
            
            const platformChartData = getPlatformChartData(recordsResponse.data.content)
            setPlatformData (platformChartData)

            const genderChartData = getGenderChartData(recordsResponse.data.content)
            setGenderData(genderChartData)
        }
        getData();
    }, [])
    return (
        <div className="page-container">
            <Filters link="/records" linkText="SEE TABLE"/>
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">MOST VOTED GAMES</h1>
                    <div className="games-container">
                    <Chart 
                        options={barOptions}
                        type="bar"
                        width="900"
                        height="500"
                        series={[{data:barData}]}
                    />
                </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">PLATFORMS</h2>
                        <Chart 
                            options={{...pieOptions, labels:platformData?.labels}}
                            type="donut"
                            series={platformData?.series}
                            width="350"
                        />
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">GENDER</h2>
                        <Chart 
                            options={{...pieOptions, labels:genderData?.labels}}
                            type="donut"
                            series={platformData?.series}
                            width="350"
                        />
                    </div>
                </div>

            </div>
        </div>

    )
};

export default Charts;