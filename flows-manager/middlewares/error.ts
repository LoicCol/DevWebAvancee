module.exports.handleErrors = (err, req, res, next, options) => {
  options = options || {}
  let req_metadata = {
    ip: req.ip,
    host: req.hostname,
    headers: req.headers,
    method: req.method,
    query: req.query
  }
  if (err instanceof SyntaxError) {
    res.status(400).json({
      error: true,
      errorMessage: 'invalid_data',
      errorDetails: 'invalid_json_data'
    })
  } else if (err.name === 'RequestError') {
    res.status(500).json({
      error: true,
      errorMessage: 'service_unavailable',
      errorDetails: 'service_unavailable'
    })
  } else if (err.name === 'APINotFound') {
    res.status(404).json({
      error: true,
      errorMessage: 'not_found'
    })
  } else if (err.name === 'NotAuthed') {
    res.status(401).json({
      error: true,
      errorMessage: err.message,
      errorDetails: err.description
    })
  } else if (err.name === 'StatusCodeError') {
    res.status(err.statusCode).json(err.response.body)
  } else {
    res.send(err)
  }
}
