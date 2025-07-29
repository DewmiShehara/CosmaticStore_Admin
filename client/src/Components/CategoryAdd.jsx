import { Formik } from 'formik'
import * as Yup from "yup";
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function CategoryAdd() {
    const [categoryData, setCategoryData] = useState({
        categoryName: ""
    })

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setCategoryData({
            ...categoryData,
            [e.target.name]: value
        })
    }

    function AddCategory() {
        const CategoryModel = {
            CategoryName: categoryData.categoryName
        }

        console.log("CategoryModel::> ", CategoryModel)
        axios.post('http://localhost:8000/category/createCategory', CategoryModel).then((res) => {
            console.log("res.data::> ", res)
            if (res.data != "") {
                alert("Category registration successfull!!")
            }
        })
    }

    return (
        <>
            <Formik
                initialValues={{
                    categoryName: categoryData.categoryName
                }}

                validationSchema={
                    Yup.object().shape({

                    })
                }
                onSubmit={() => AddCategory()}
                enableReinitialize
            >
                {({
                    errors,
                    handleBlur,
                    handleSubmit,
                    touched
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ width: '100%', height: '100%', }}>
                            <Grid container spacing={2}>
                                <Grid size={{ md: 6, xs: 6 }}>
                                    <TextField
                                        fullWidth
                                        error={Boolean(touched.categoryName && errors.categoryName)}
                                        helperText={touched.categoryName && errors.categoryName}
                                        onBlur={handleBlur}
                                        label="Category Name *"
                                        name='categoryName'
                                        value={categoryData.categoryName}
                                        id='categoryName'
                                        onChange={(e) => handleChange(e)}
                                        variant="outlined"
                                        size="small"
                                        type='text'
                                    />
                                </Grid>
                                <Grid size={{ md: 6, xs: 6 }}>
                                    <Button
                                        variant="contained"
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default CategoryAdd