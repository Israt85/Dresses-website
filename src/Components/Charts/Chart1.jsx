import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react';

const Chart1 = () => {
    return (
        <div>
            <HighchartsReact
	highcharts={Highcharts}
	options={options}
/>
        </div>
    );
};

export default Chart1;