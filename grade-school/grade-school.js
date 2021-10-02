export class GradeSchool {
    #rosterByGrade
    #rosterByName

    constructor() {
        this.#rosterByGrade = {}
        this.#rosterByName = {}
    }

    roster = () => JSON.parse(JSON.stringify(this.#rosterByGrade))

    add = (name, grade) => {
        const currentGrade = this.#rosterByName[name]
        if (currentGrade) {
            const index = this.#rosterByGrade[currentGrade].indexOf(name);
            this.#rosterByGrade[currentGrade].splice(index, 1);
        }
        this.#rosterByGrade[grade] = this.grade(grade).concat(name).sort()
        this.#rosterByName[name] = grade
    }

    grade = (grade) => Array.from(this.#rosterByGrade[grade] || [])
}
