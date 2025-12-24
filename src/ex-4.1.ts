type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age !== undefined && user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
//  return user.age >= 18; ไม่ได้บอกไว้ว่าถ้าไม่มี user.age แล้วจะเอาค่าอะไรไปแสดงหล่ะ ทำให้ตอนเข้าไปเจอว่าเป็น user.age = undefined  เลย return ออกกมาเป็น false เพราะ เอา undefined ไปเปรียบเทียบ
