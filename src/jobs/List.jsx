import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { userService } from '@/_services'

function List({ match }) {
  const { path } = match
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    userService.getAll().then((x) => setJobs(x))
  }, [])

  return (
    <div>
      <h1>Jobs</h1>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">
        Add Job
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Job title</th>
            <th style={{ width: '30%' }}>Location</th>
            <th style={{ width: '30%' }}>Salary</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.jobtitle}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td style={{ whiteSpace: 'nowrap' }}>
                  <Link to={`${path}/edit/${job.id}`} className="btn btn-sm btn-primary mr-1">
                    Edit
                  </Link>
                  <Link to={`${path}/job/${job.id}`} className="btn btn-sm btn-secondary mr-1">
                    View
                  </Link>
                  {/* <button
                    onClick={() => deleteUser(job.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                  >
                    <span>View</span>
                  </button> */}
                </td>
              </tr>
            ))}
          {!jobs && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="spinner-border spinner-border-lg align-center"></div>
              </td>
            </tr>
          )}
          {jobs && !jobs.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">No Jobs To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export { List }
