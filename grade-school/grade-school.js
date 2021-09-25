export class GradeSchool {

    #roster

    constructor() {
        this.#roster = {}
    }

    roster() {
        return this.#roster
    }

    add(name, grade) {
        this.#roster[grade] && this.#roster[grade].length ? this.#roster[grade].push(name) : this.#roster[grade] = [name]
        this.#roster[grade].sort()
    }

    grade(grade) {
        return this.#roster[grade] && this.#roster[grade].length ? this.#roster[grade] : []
    }
}

// let school = new GradeSchool()
// school.add('Jennifer', 4);
// school.add('Kareem', 6);
// school.add('Christopher', 4);
// school.add('Kyle', 3);
// console.log(school.grade(4))