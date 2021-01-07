import React from 'react';
//Highcharts
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const PriceChart = ({data}) => {


    const options = {

    rangeSelector: {
        selected: 1
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