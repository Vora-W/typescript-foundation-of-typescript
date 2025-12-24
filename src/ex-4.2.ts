function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else return "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
//เนื่องจากกำหนด type ของ data เป็น unknown ยังไงก็ต้องเช็คก่อนว่า data เป็น type ไหนและจัดการแต่ละ case ให้เรียบร้อยว่าจะทำอะไร
