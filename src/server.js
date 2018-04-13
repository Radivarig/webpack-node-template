import app from "./app.js"

app.set ("port", process.env.PORT || 7777) // eslint-disable-line no-undef
app.set ("host", process.env.HOST) // eslint-disable-line no-undef

app.listen (app.get ("port"), () => {
  // eslint-disable-next-line no-console
  console.log (`Server listening on port ${app.get ("port")}`)
})
