import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import '../styles/CategoryRegistration.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CategoryAdd from '../Components/CategoryAdd';

function CategoryRegistration() {

    const formik = useFormik({
        initialValues: {
            categoryName: '',
            categoryCode: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div style={{ height: '100vh', display: 'flex', padding: '15px', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)', padding: '10px' }}>
                <Grid container spacing={2} >
                    <Grid size={{ md: 12, xs: 12 }} sx={{ height: '100%', width: '100%', padding: '15px' }} >
                        <CategoryAdd />
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }} sx={{ height: '100%', width: '100%' }} >
                        <h1>djj</h1>

                    </Grid>
                </Grid>

            </Box>
        </div>
    );

}

export default CategoryRegistration