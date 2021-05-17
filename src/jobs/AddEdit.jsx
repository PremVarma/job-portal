import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { userService, alertService } from '../_services'

function AddEdit({ history, match }) {
  const { id } = match.params

  const isAddMode = !id

  const initialValues = {
    jobtitle: '',
    location: '',
    salary: '',
    description: '',
  }

  const validationSchema = Yup.object().shape({
    jobtitle: Yup.string().required('Title is required'),
    location: Yup.string().required('Location is required'),
    salary: Yup.string().required('Last Name is required'),
    description: Yup.string().min(50).required('Description is required'),
  })

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus()
    if (isAddMode) {
      createUser(fields, setSubmitting)
    } else {
      updateUser(id, fields, setSubmitting)
    }
  }

  function createUser(fields, setSubmitting) {
    userService
      .create(fields)
      .then(() => {
        alertService.success('Job added', { keepAfterRouteChange: true })
        history.push('.')
      })
      .catch(() => {
        setSubmitting(false)
        alertService.error(error)
      })
  }

  function updateUser(id, fields, setSubmitting) {
    userService
      .update(id, fields)
      .then(() => {
        alertService.success('Job updated', { keepAfterRouteChange: true })
        history.push('..')
      })
      .catch((error) => {
        setSubmitting(false)
        alertService.error(error)
      })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        const [job, setJob] = useState({})

        useEffect(() => {
          if (!isAddMode) {
            // get user and set form fields
            userService.getById(id).then((job) => {
              const fields = ['jobtitle', 'location', 'salary', 'description']
              fields.forEach((field) => setFieldValue(field, job[field], false))
              setJob(job)
            })
          }
        }, [])

        return (
          <Form>
            <h1>{isAddMode ? 'Add Job' : 'Edit Job'}</h1>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Job Title</label>
                <Field
                  name="jobtitle"
                  type="text"
                  className={
                    'form-control' + (errors.jobtitle && touched.jobtitle ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage name="jobtitle" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group col-6">
                <label>Location</label>
                <Field
                  name="location"
                  type="text"
                  className={
                    'form-control' + (errors.location && touched.location ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage name="location" component="div" className="invalid-feedback" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Salary</label>
                <Field
                  name="salary"
                  type="text"
                  className={
                    'form-control' + (errors.salary && touched.salary ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage name="salary" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group col-6">
                <label>Description</label>
                <Field
                  name="description"
                  type="text"
                  className={
                    'form-control' +
                    (errors.description && touched.description ? ' is-invalid' : '')
                  }
                ></Field>
                <ErrorMessage name="description" component="div" className="invalid-feedback" />
              </div>
            </div>

            <div className="form-group">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Save
              </button>
              <Link to={isAddMode ? '.' : '..'} className="btn btn-link">
                Cancel
              </Link>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export { AddEdit }
