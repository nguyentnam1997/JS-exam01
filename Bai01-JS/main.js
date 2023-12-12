//1. Kiểm tra Javascript cơ bản
//Bài 1
let maxLength = 0;
function getStringHasMaxLength(arr) {
  arr.forEach((element) => {
    if (element.length > maxLength) {
      maxLength = element.length;
    }
  });
  return maxLength;
}
console.log(getStringHasMaxLength(["abzxczxa", "aa", "ad", "c", "vcd"]));

//Bài 2
users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];
function findByAge(users, age, isStatus) {
  return users.filter((user) => user.age > age && user.isStatus == isStatus);
}
console.log(findByAge(users, 25, true));
//trả về mảng có tuổi tăng dần
function sortAgeAscending(users) {
  users.sort((user1, user2) => user1.age - user2.age);
}
sortAgeAscending(users);
console.log(users);

//Bài 3
function getCountElement(arr) {
  const countObject = {};

  arr.forEach((element) => {
    if (countObject[element]) {
      countObject[element] += 1;
    } else {
      countObject[element] = 1;
    }
  });
  return countObject;
}
const result = getCountElement(["one", "two", "three", "one", "one", "three"]);
console.log(result);