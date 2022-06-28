import { Student } from "../student";

export class StudentDAO {

    private students:Student[] = [

        //Se si mette un oggetto json con tutte le variabili che dovrebbe avere l'oggetto effettua automaticamente la conversione
        //Funziona solo se tutte le variabili sono public
        {name: "Manuel", surname: "Palumbo", age: 19, gender: "Male", major: "Informatica", employee: false},

        new Student("Manuel", "Palumbo", 19, "Male", false, "Informatica")

    ];

    findStudents() {
        return Array.from(this.students);
    }

    findAvrageAge():number {
        if(this.students.length == 0) return 0;

        let totalAge = 0;

        for(let s of this.students) {
            totalAge += s.age;
        }

        return totalAge/this.students.length;
    }

    addStudent(name:HTMLInputElement, surname:HTMLInputElement, major:HTMLInputElement, employee:HTMLInputElement, age:HTMLInputElement, gender:HTMLSelectElement) {
        this.students.push(

            new Student(
                name.value,
                surname.value, 
                Number(age.value),
                gender.value,
                employee.checked,
                major.value,
            )

        )
    }

}