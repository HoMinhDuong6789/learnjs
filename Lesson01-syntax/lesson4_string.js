/**
 * Chuỗi trong JS
 * 1. Tạo chuỗi
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ đài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6
 * 
 */

let fullName = 'I\'m a supperman!'; // I'm a supper..
fullName = 'I\\m a supperman!'; // I\m a supper..
/**
 * Template String
 * let firstName = 'Dang';
 * fullName = `I'm ${firstName}}`;
 */

/**
 * Làm việc với chuỗi
 * 1. length:
 * myString.lenght
 * 
 * 2. find index:
 *  myString.lastIndexOf('AVS') // nếu ko tìm được trả về -1
 * 
 *  myString.indexOf('Js') // vi tri dau tien xuat hien ki tu do trong chuoi
 *  myString.indexOf('Js', index); // index: vi tri bat dau tim
 * 
 *  console.log(myString.search('JS')) // ko hỗ trợ vị trí tìm kiếm, hỗ trợ tìm kiểm theo regex
 * 
 * 
 * 
 * 
 * 3. Cut string
 *  console.log(myString.slice(1)) //his is a lesson of JS course, as you know JS is famus today
 * myString.slice(startIndex, endIndex)
 * 
 * 4. Replace:
 * console.log(myString.replace('JS', 'JavaScript')) // chi replace thawng dau tien xuat hien JS
 * console.log(myString.replace(/JS/g, 'JavaScript')) 
 * 
 * 
 * 5. Convert to upper case
 * console.log(myString.toUpperCase())
 * console.log(myString.toLowerCase())
 * 
 * 6. Trim
 * console.log(myString.trim())
 * 
 * 7. Split
 * let languges ="JS, PHP, Jav";
 * console.log(languges.split(",")) //(3) ["JS", " PHP", " Jav"]
 * 
 * 9. Get a character by index
 * 
 * let string1 ="Today";
*   console.log(string1.charAt(3)) //a
 * console.log(string1[3])// a
 */