import jsc from "jsverify"

describe("JSC forall", () => {
  it ("natural numbers are greater or equal to 0", () => {
    const property = jsc.forall (jsc.nat, (n) => {
      return n >= 0
    })
    jsc.assert(property)
  })
})
