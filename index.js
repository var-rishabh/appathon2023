import teachers from './teachers.js'
import subjects from './subjects.js'

const choices = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];
let teach = 0;
for (let i in teachers) {
    for (let j = 0; j < teachers[i]['1'].length; j++) {
        choices[teach][teachers[i]["1"][j] - 1] = 1;
    }
    for (let j = 0; j < teachers[i]['2'].length; j++) {
        choices[teach][teachers[i]["2"][j] - 1] = 2;
    }
    for (let j = 0; j < teachers[i]['3'].length; j++) {
        choices[teach][teachers[i]["3"][j] - 1] = 3;
    }
    teach++;
}
console.log(choices);

const removeTeacher = (arr, teach) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != teach) {
            temp.push(arr[i]);
        }
    }
    teacher_left = temp;
}
const removeSubject = (arr, sub) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sub) {
            temp.push(arr[i]);
        }
    }
    subject_left = temp;
}

let teacher_assigned = [];
let teacher_left = ["T001","T002","T003","T004","T005"];
let subject_assigned = [];
let subject_left = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let ans = { "T001": [1,2], "T002": [3], "T003": [4,5], "T004": [6,7,8], "T005": [9,10] }

// while (teacher_assigned.length != 5 && subject_assigned != 10) {
//     let temp = []

// }

let t1 = document.querySelector("#T001");
let t2 = document.querySelector("#T002");
let t3 = document.querySelector("#T003");
let t4 = document.querySelector("#T004");
let t5 = document.querySelector("#T005");

for (let i = 0; i < ans["T001"].length; i++) {
    t1.innerHTML += "CS10" + ans["T001"][i] + "<br>"
}
for (let i = 0; i < ans["T002"].length; i++) {
    t2.innerHTML += "CS10" + ans["T002"][i] + "<br>"
}
for (let i = 0; i < ans["T003"].length; i++) {
    t3.innerHTML += "CS10" + ans["T003"][i] + "<br>"
}
for (let i = 0; i < ans["T004"].length; i++) {
    t4.innerHTML += "CS10" + ans["T004"][i] + "<br>"
}
for (let i = 0; i < ans["T005"].length; i++) {
    t5.innerHTML += "CS10" + ans["T005"][i] + "<br>"
}