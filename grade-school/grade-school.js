export class GradeSchool {

    #roster

    constructor() {
        this.#roster = {}
    }

    roster() {
        const shallow = {}
        for (const [name, grade] of Object.entries(this.#roster)) {
            shallow[grade] ? shallow[grade].push(name) : shallow[grade] = [name]
        }
        for (const [grade] of Object.keys(shallow)) {
            shallow[grade].sort();
        }
        return shallow
    }

    add(name, grade) {
        this.#roster[name] = grade
    }

    grade(grade) {
        const g = []
        for (let key of Object.keys(this.#roster)) {
            if (this.#roster[key] === grade) g.push(key)
        }
        return g.sort()
    }
}
