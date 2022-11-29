declare const loggedInUsername: string;

export function what(){
 
    const users = [
      { name: "Oby", age: 12 },
      { name: "Heera", age: 32 },
    ];
     
    const loggedInUser = users.find((u) => u.name === loggedInUsername);
    console.log(loggedInUser.age);
}