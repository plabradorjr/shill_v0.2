import React from 'react';
//Highcharts
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const PriceChart = ({data}) => {


    const options = {
    colors: ['#eb2f06',
            '#0eda63',
            '#14bb46',
            '#DDDF00', 
            '#24c90f',
            '#64E572',   
            '#1ed461',
            '#FFF263',
            '#0eda63'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(164, 164, 175)'],
                [1, 'rgb(164, 164, 175)']
            ]
        },
    },
    rangeSelector: {
        selected: 1
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'white'
        },
        itemHoverStyle:{
            color: 'white'
        }   
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false,
    },
    series: [{
        type: 'candlestick',
        name: '🚀',
        data: data,
    }]
    }

    return (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={'stockChart'}
      />
    )

}


export default PriceChart;