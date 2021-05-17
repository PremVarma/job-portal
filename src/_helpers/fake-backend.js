export function configureFakeBackend() {
  // array in local storage for user records
  let jobs = JSON.parse(localStorage.getItem('jobs')) || [
    {
      id: 1,
      jobtitle: 'Software Engineer',
      location: 'Remote',
      salary: '1500000',
      description: 'This is test job',
    },
  ]

  // monkey patch fetch to setup fake backend
  let realFetch = window.fetch
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500)

      function handleRoute() {
        const { method } = opts
        switch (true) {
          case url.endsWith('/jobs') && method === 'GET':
            return getUsers()
          case url.match(/\/jobs\/\d+$/) && method === 'GET':
            return getUserById()
          case url.endsWith('/jobs') && method === 'POST':
            return createUser()
          case url.match(/\/jobs\/\d+$/) && method === 'PUT':
            return updateUser()
          case url.match(/\/jobs\/\d+$/) && method === 'DELETE':
            return deleteUser()
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error))
        }
      }

      // route functions

      function getUsers() {
        return ok(jobs)
      }

      function getUserById() {
        let job = jobs.find((x) => x.id === idFromUrl())
        return ok(job)
      }

      function createUser() {
        const job = body()

        if (jobs.find((x) => x.id === job.id)) {
          return error(`Job with the email ${job.email} already exists`)
        }

        // assign job id and a few other properties then save
        job.id = newUserId()
        job.dateCreated = new Date().toISOString()
        jobs.push(job)
        localStorage.setItem('jobs', JSON.stringify(jobs))

        return ok()
      }

      function updateUser() {
        let params = body()
        let job = jobs.find((x) => x.id === idFromUrl())

        // update and save user
        Object.assign(job, params)
        localStorage.setItem('jobs', JSON.stringify(jobs))

        return ok()
      }

      function deleteUser() {
        jobs = jobs.filter((x) => x.id !== idFromUrl())
        localStorage.setItem('jobs', JSON.stringify(jobs))

        return ok()
      }

      // helper functions

      function ok(body) {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
      }

      function error(message) {
        resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
      }

      function idFromUrl() {
        const urlParts = url.split('/')
        return parseInt(urlParts[urlParts.length - 1])
      }

      function body() {
        return opts.body && JSON.parse(opts.body)
      }

      function newUserId() {
        return jobs.length ? Math.max(...jobs.map((x) => x.id)) + 1 : 1
      }
    })
  }
}
