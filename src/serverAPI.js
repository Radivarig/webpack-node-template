const api: Object = {}

api.handleRequest = async (req, res) => {
  const rb = req.body

  // eslint-disable-next-line no-console
  console.log ("request body: ", rb, "request_query", req.query)
  res.send ({ "request_body": rb })
}

// eslint-disable-next-line no-console
api.async_fn1 = async () => {console.log ("async called")}
api.async_fn2 = async () => await api.async_fn1 ()

export default api
