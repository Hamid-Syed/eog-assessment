import React,{useState} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Select from 'react-select';
import Charts from './Charts';
const options = [{label:'One',value:1},{label:'Two',value:2}];
const useStyles = makeStyles({
    container:{
        padding:20
    }
});
const ChartsContainer = () => {
    const classes = useStyles();
    const [selectedOption,setSelectedOption] = useState(null);
    const handleDropdownChange = (option:any)=>{
        setSelectedOption(option);
    }
    return (
    
    <Grid  container className={classes.container}>
        <Grid item xs={10}>
            Live Charts
        </Grid>
        <Grid item xs={2}>
            <Select
            defaultValue={selectedOption}
            value={selectedOption}
            onChange={handleDropdownChange}
            options={options}
            isMulti
            />
        </Grid>
        <Grid item xs={12}>
            <Charts selectedMetrics={selectedOption}/>
        </Grid>
    </Grid>
    )

}
export default ChartsContainer;