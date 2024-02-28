import { render, screen } from "@testing-library/react"
import React from "react"
import Clock from "../Clock"
import { addLeadingZero, to12Format } from "../helper/formatTime"
import { ThemeContext } from "../contexts/theme"
import { LanguageContext } from "../contexts/languageContext"

describe("Renders Clock (Dark/Light) (English/Arabic)", () => {
    describe("Renders Clock in Dark Mode", () => {
        describe("Clock", () => {
            beforeEach(() => {
                render(
                    <ThemeContext.Provider value={[{ isDark: true }]}>
                        <LanguageContext.Provider value={["en"]}>
                            <Clock />
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>
                )
            })
            let date = new Date()
            it("renders Hour:Minute in 12 format", () => {

                const currentTime = `${date.getHours()}:${date.getMinutes()}`
                expect(screen.getByText(to12Format(currentTime))).toBeInTheDocument()
            })
            it("Renders Second", () => {
                let date = new Date()
                expect(
                    screen.getByText(`:${addLeadingZero(date.getSeconds())}`)
                ).toBeInTheDocument()
            })
            it("render AM or PM", () => {
                expect(
                    screen.getByText(date.getHours() < 12 ? "AM" : "PM")
                ).toBeInTheDocument()
            })
        })
        describe("Enlish", () => {
            it("Render Clock in Enlish", () => {
            render(
                <ThemeContext.Provider value={[{ isDark: true }]}>
                    <LanguageContext.Provider value={["en"]}>
                        <Clock />
                    </LanguageContext.Provider>
                </ThemeContext.Provider>
            )
                let date = new Date()
                expect(
                    screen.getByText(date.getHours() < 12 ? "AM" : "PM")
                ).toBeInTheDocument()
            })
        })
        describe("Arabic", () => {
            it("Render Clock in Arabic", () => {
                render(
                    <ThemeContext.Provider value={[{ isDark: true }]}>
                        <LanguageContext.Provider value={["ar"]}>
                            <Clock />
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>
                )
                let date = new Date()
                expect(
                    screen.getByText(date.getHours() < 12 ? "صباحاً" : "مساءً")
                ).toBeInTheDocument()
            })
        })
    })

    describe("Renders Clock in Light Mode", () => {
        describe("Clock", () => {
            beforeEach(() => {
                render(
                    <ThemeContext.Provider value={[{ isDark: false }]}>
                        <LanguageContext.Provider value={["en"]}>
                            <Clock />
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>
                )
            })
            let date = new Date()
            it("renders Hour:Minute in 12 format", () => {
                const currentTime = `${date.getHours()}:${date.getMinutes()}`
                expect(screen.getByText(to12Format(currentTime))).toBeInTheDocument()
            })
            it("Renders Second", () => {
                let date = new Date()
                expect(
                    screen.getByText(`:${addLeadingZero(date.getSeconds())}`)
                ).toBeInTheDocument()
            })
            it("render AM or PM", () => {
                expect(
                    screen.getByText(date.getHours() < 12 ? "AM" : "PM")
                ).toBeInTheDocument()
            })
        })
        describe("Enlish", () => {
            it("Render Clock in Enlish", () => {
                render(
                    <ThemeContext.Provider value={[{ isDark: true }]}>
                        <LanguageContext.Provider value={["en"]}>
                            <Clock />
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>
                )
                let date = new Date()
                expect(
                    screen.getByText(date.getHours() < 12 ? "AM" : "PM")
                ).toBeInTheDocument()
            })
        })
        describe("Arabic", () => {
            it("Render Clock in Arabic", () => {
                render(
                    <ThemeContext.Provider value={[{ isDark: true }]}>
                        <LanguageContext.Provider value={["ar"]}>
                            <Clock />
                        </LanguageContext.Provider>
                    </ThemeContext.Provider>
                )
                let date = new Date()
                expect(
                    screen.getByText(date.getHours() < 12 ? "صباحاً" : "مساءً")
                ).toBeInTheDocument()
            })
        })
    })
})
