const myName = "Mehedy";
const Age = 26;
const Address = "Rajshahi";
const bouName = "Katappar Beti";
const sosurBari = "BrahmonBaria"

const sentense = " Amar naam " + myName + "\n Amar boyos "+Age+"\n Amar Bari "+Address+"\n Amar bou er naam "+bouName+ "\n Sosur Bari "+ sosurBari;

// console.log(sentense);

const subjects = ['bangla',"english","math"]
const sentense1 = `
Amar naam ${myName}
Amar boyos ${Age}
Amar Boi gula holo ${subjects.map(subject => subject).join("/")}
Amar Bari ${Address}
Amar bou er naam ${bouName}
Sosur bari ${sosurBari}
`;

console.log(sentense1)



