import { describe, expect, it } from "vitest"
import { strings, lowercase, uppercase, capitalize } from "./index"

describe("lowercase", () => {
  it("should lowercase string", () => {
    expect(lowercase("hello, world!")).toBe("hello, world!")
    expect(lowercase("Hello, world!")).toBe("hello, world!")
    expect(lowercase("HELLO, WORLD!")).toBe("hello, world!")
    expect(lowercase("Hello, World!")).toBe("hello, world!")
  })
})

describe("uppercase", () => {
  it("should uppercase string", () => {
    expect(uppercase("hello, world!")).toBe("HELLO, WORLD!")
    expect(uppercase("Hello, world!")).toBe("HELLO, WORLD!")
    expect(uppercase("HELLO, WORLD!")).toBe("HELLO, WORLD!")
    expect(uppercase("Hello, World!")).toBe("HELLO, WORLD!")
  })
})

describe("capitalize", () => {
  it("should capitalize string", () => {
    expect(capitalize("Hello, world!")).toBe("Hello, world!")
    expect(capitalize("hello, world!")).toBe("Hello, world!")
    expect(capitalize("HELLO, WORLD!")).toBe("HELLO, WORLD!")
    expect(capitalize("hello, World!")).toBe("Hello, World!")
  })
})

describe("strings", () => {
  it("should validate if string includes a number", () => {
    expect(strings("hello").hasNumber()).toBeFalsy()
    expect(strings("hello1").hasNumber()).toBeTruthy()
  })

  it("should validate if string includes special character", () => {
    expect(strings("hello").hasSpecialChar()).toBeFalsy()
    expect(strings("hello!").hasSpecialChar()).toBeTruthy()
  })

  it("should validate if string includes lowercase character", () => {
    expect(strings("HELLO").hasLowercaseChar()).toBeFalsy()
    expect(strings("HeLLO").hasLowercaseChar()).toBeTruthy()
  })

  it("should validate if string includes uppercase character", () => {
    expect(strings("hello").hasUppercaseChar()).toBeFalsy()
    expect(strings("hEllo").hasUppercaseChar()).toBeTruthy()
  })
})
