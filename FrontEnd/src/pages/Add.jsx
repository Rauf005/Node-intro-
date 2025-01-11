import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import style from "./style.module.css";

function Add() {

  const formik = useFormik({
    initialValues: {
      brandName: '',
      modelName: "",
      year: "",
      New: false, 
    },
    validationSchema: Yup.object({
      brandName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .min(3, 'Must be 3 characters more')
        .required('Required'),
      modelName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .min(3, 'Must be 3 characters more')
        .required('Required'),
      year: Yup.number()
        .max(3000, 'Year must be less than 3000')
        .min(1900, 'Year must be greater than 1900')
        .required('Required'),
      New: Yup.boolean()
        .required('Required'), 
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/products", values);
        console.log("Product added successfully:", response.data);
        formik.resetForm(); 
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });

  return (
    <div style={{ width: "100%", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form id={style.addform} onSubmit={formik.handleSubmit}>
        <label htmlFor="New">New </label>
        <input
          id="New"
          name="New"
          type="checkbox" 
          onChange={formik.handleChange}
          checked={formik.values.New} 
        />
        {formik.touched.New && formik.errors.New ? (
          <div style={{ color: "red" }}>{formik.errors.New}</div>
        ) : null}

        <label htmlFor="brandName">Brand Name</label>
        <input
          id="brandName"
          name="brandName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.brandName}
        />
        {formik.touched.brandName && formik.errors.brandName ? (
          <div style={{ color: "red" }}>{formik.errors.brandName}</div>
        ) : null}

        <label htmlFor="modelName">Model Name</label>
        <input
          id="modelName"
          name="modelName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.modelName}
        />
        {formik.touched.modelName && formik.errors.modelName ? (
          <div style={{ color: "red" }}>{formik.errors.modelName}</div>
        ) : null}

        <label htmlFor="year">Year </label>
        <input
          id="year"
          name="year"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.year}
        />
        {formik.touched.year && formik.errors.year ? (
          <div style={{ color: "red" }}>{formik.errors.year}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
