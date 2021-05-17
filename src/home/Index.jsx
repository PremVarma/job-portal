import React from 'react'
import './styles.css'
import image from '../illustration-3.svg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="slice py-7">
      <div className="container-fluid">
        <div className="row row-grid align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
            <figure className="w-100">
              <img
                alt="Image placeholder"
                src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/01/job-search.jpg"
                className="img-fluid mw-md-120"
              />
            </figure>
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
            <h1 className="display-4 text-center text-md-left mb-3">
              It's time to create your <strong className="text-primary">Dream Job</strong>
            </h1>

            <p className="lead text-center text-md-left text-muted">
              Build a job, modern formik with yup validation components built from scratch.
            </p>
            <div className="text-center text-md-left mt-5">
              <Link to="#" className="btn btn-primary btn-icon">
                <span className="btn-inner--text">Get started</span>
                <span className="btn-inner--icon">
                  <i data-feather="chevron-right"></i>
                </span>
              </Link>
              <Link to="/jobs" className="btn btn-neutral btn-icon d-none d-lg-inline-block">
                See Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Home }
