import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const BoxContainer = (props) => (
    <Grid container spacing={1}>
         <Grid item xs={12} sm={4}>
        <Box bgcolor="warning.main" color="primary.contrastText" p={2}>
          {`Confirmados: ${props.data.confirmed}`}
        </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box bgcolor="error.main" color="primary.contrastText" p={2}>
            {`Muertes: ${props.data.deaths} `}
        </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box bgcolor="info.main" color="primary.contrastText" p={2}>
            {`Recuperados: ${props.data.recovered}`}
        </Box>
        </Grid>
    </Grid>
);
export default BoxContainer;