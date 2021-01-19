import React from 'react';
import {Grid, Card} from '@material-ui/core';
import {ISelectedMetrics, IDropdown} from './../utils/types';

const Charts = ({selectedMetrics}:ISelectedMetrics) => {
    console.log(selectedMetrics);
    return (
        <Grid container>
            <Grid item xs={12}>
           {
               selectedMetrics && selectedMetrics.map((metric:IDropdown) => (<Card>{metric.label}</Card>))
           }            
            </Grid>
            <Grid item xs={12}>
                Charts content
            </Grid>
        </Grid>
    )
};
export default Charts;