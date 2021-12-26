import { add } from "."

describe("Simple Suite", ()=>{

    it("Sould sum 2 + 2", ()=>{
        const sum = add(10,5);
        expect(sum).toBe(15);
    })

    it("Should fail", ()=>{
        expect(10).toBe(5);
    })

    it("should read an environment variable", ()=>{
        expect(process.env.SOMETHING).toBeTruthy()
        expect(process.env.SOMETHING).toBe("pa$$word")
    })

})
