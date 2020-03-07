import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import Scream from '../components/Scream';

const Home = () => {

    const [screams, setScreams] = useState([]);

    useEffect(() => {
        const fetchScreams = async () => {
            const result = await axios.get('/screams');
            setScreams(result.data);
        }
        fetchScreams();
    }, []);

    return (
        <Grid container spacing={8}>
            <Grid item sm={8} xs={12}>
                {screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile...</p>
            </Grid>
        </Grid>
    );
}

export default Home;
