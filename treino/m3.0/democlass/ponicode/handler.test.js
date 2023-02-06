const rewire = require("rewire")
const handler = rewire("../handler")
const getWeather = handler.__get__("getWeather")
// @ponicode
describe("getWeather", () => {
    test("0", async () => {
        await getWeather("Johnson City")
    })

    test("1", async () => {
        await getWeather("Redmond")
    })

    test("2", async () => {
        await getWeather("Livermore")
    })

    test("3", async () => {
        await getWeather("Annandale")
    })

    test("4", async () => {
        await getWeather("Diamond Bar")
    })

    test("5", async () => {
        await getWeather("")
    })
})
