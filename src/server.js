import app from "./app.js"

app.listen (app.get ("port"), () => {
  // eslint-disable-next-line no-console
  console.log (`Server listening on port ${app.get ("port")}`)
})
