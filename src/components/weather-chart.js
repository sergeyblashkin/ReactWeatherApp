import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

    var average = props.data.reduce(function(sum, currentValue) {
        return sum + currentValue;
    }, 0);

    return (
        <div>
            <Sparklines
                width={props.width}
                height={props.height}
                data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{Math.round(average / props.data.length)}</div>
        </div>
    );
};
