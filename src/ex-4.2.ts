function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// error TS18046: 'data' is of type 'unknown'.
// compile ไม่ได้เนื่องจาก function processData มี parameter type เป็น unknown ต้องเขียนเงื่อนไขเพื่อตรวจสอบ type ของ parameter ก่อน
