import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import '../styles/CategoryRegistration.css'

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
        <div className='input-group'>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="categoryName">Category Name </label>
                <input
                    id="categoryName"
                    name="categoryName"
                    type="categoryName"
                    onChange={formik.handleChange}
                    value={formik.values.categoryName}
                />
                <label htmlFor="categoryCode">Category Code </label>
                <input
                    id="categoryCode"
                    name="categoryCode"
                    type="categoryCode"
                    onChange={formik.handleChange}
                    value={formik.values.categoryCode}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default CategoryRegistration