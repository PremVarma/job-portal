import React, { useEffect, useState } from 'react'
import { userService } from '../_services'
import { useParams } from 'react-router-dom'
import { Nav } from '../_components'

export const JobDetail = () => {
  const [job, setJob] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    userService.getById(id).then((x) => setJob(x))
  }, [])

  console.log(job, 'job')
  return (
    <>
      <Nav />
      <div className="d-flex justify-content-center" style={{ height: '92vh' }}>
        <div className="">
          <div className="">
            <img
              src={`https://pilbox.themuse.com/image.jpg?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Fa0722dff-6d2c-4d1e-aa71-a50d57c9636e.jpg%3Fv%3Dcea9f554f58b64c40f59b026031ac399aa45c0c8&w=750`}
              className="img-responsive"
            />
          </div>
          <div className="mt-4">
            <h4>Role - {job?.jobtitle}</h4>
            <div className=""></div>
            <p>Description - {job?.description}</p>
            <p>Location - {job?.location}</p>
            <h3 className="">
              <span className=""></span>Salary - {job?.salary}
            </h3>

            <div className=""></div>
            <div className="btn-ground">
              <button type="button" className="btn btn-primary">
                <span className=""></span> Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
