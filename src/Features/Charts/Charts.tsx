import React from 'react';
import {Grid, Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ISelectedMetrics, IDropdown} from './../utils/types';
import {ResponsiveContainer,LineChart,XAxis,YAxis,Tooltip,Line,CartesianGrid} from 'recharts';
const useStyles = makeStyles({
    chartContainer:{
        padding:20
    }
});
const Charts = ({selectedMetrics}:ISelectedMetrics) => {
    const classes = useStyles();
    const data = [{name:'A',metric:10},{name:'B',metric:5},{name:'C',metric:30},{name:'D',metric:20}];

    return (
        <Grid container className={classes.chartContainer}>
            <Grid item xs={12} >
           {
               selectedMetrics && selectedMetrics.map((metric:IDropdown) => (<Card>{metric.label}</Card>))
           }            
            </Grid>
            <Grid item xs={12} >
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Line dataKey="metric" type="monotone" stroke="#053c6d"/>
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    )
};
export default Charts;