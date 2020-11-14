class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} ${
      this.tardies > 1 ? 'times' : 'time'
    }`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calcAvg() {
    return this.scores.reduce((a, b) => a + b) / this.scores.length;
  }

  static EnrollStudent() {
    return 'Enrolling Students';
  }
}

const firstStudent = new Student('Juan', 'Ramirez', '34');
const secondStudent = new Student('Julie', 'Ramirez', '27');

console.log();
