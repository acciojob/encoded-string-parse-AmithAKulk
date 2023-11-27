const parseCode = (str) => {
  // your code here

  const [firstName, lastName, id] = str.split("000");

  // Return an object with firstName, lastName, and id
  return {
    firstName: firstName,
    lastName: lastName,
    id: id,
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));