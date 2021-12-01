const users = [
  {
    id: "user1",
    name: "User 1",
    lastName: "Test1",
  },
  {
    id: "user2",
    name: "User 2",
    lastName: "Test2",
  },
  {
    id: "user3",
    name: "User 3",
    lastName: "Test3",
  },
  {
    id: "user4",
    name: "User 4",
    lastName: "Test4",
  },
];

const blackList = ["user1", "user3"];

// User 3 Test3, User 1 Test1 can not login

function butt(users, blackList) {
  const newArr = users.filter((item) => blackList.includes(item.id));
  console.log(newArr);

  let masage = newArr.reduce((acc, curr, index, arr) => {
    console.log("$$$", acc);
    const fullName = `${curr.name} ${curr.lastName}, `;
    return fullName + acc;
  }, "");
  masage = masage.slice(0, -2);
  masage += " can not login";

  return console.log(`${masage}`);
}

butt(users, blackList);
