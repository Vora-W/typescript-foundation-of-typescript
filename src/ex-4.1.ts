type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age !== undefined && user.age >= 18 ;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// error TS18048: 'user.age' is possibly 'undefined' 
// เนื่องจาก age เป็น optional property จึงมีค่าเป็น undefined ได้ด้วยหากไม่มี property นี้