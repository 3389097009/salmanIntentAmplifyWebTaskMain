import { Box, Grid } from '@mui/material';
import React from 'react';
import DataTable from '../components/Infographics/DataTable/DataTable';
import Graph from '../components/Infographics/Graph/Graph';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Infographics = () => {
    return (<>
        <Navbar />
        <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
            <Box>
                <Grid spacing={1} container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item md={6} xs={8} className='px-4 '>
                        <DataTable />
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <Graph />
                    </Grid>
                </Grid>
            </Box>
        </div>
        <Footer />
    </>
    );
};

export default Infographics;