let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
//flag
let isOver = false;

//functions
const showFirstContact = arr => confirm(`${arr[0].name} \n${arr[0].phone} \n${arr[0].email}`)
const showLastContact = (arr) => confirm(`${arr[arr.length - 1].name} \n${arr[arr.length - 1].phone} \n${arr[arr.length - 1].email}`)

const quit = () => isOver = !isOver;

//user selection 
while (!isOver) {
    let userChoice = prompt("Choose action: \n1. show first contact (first)\n2. show last contact (last)\n3. show all contacts (all)\n4. add new contact (new)\n5. exit program (quit)");

    switch (userChoice) {
        case "quit":
            quit()
            break;
        case "first":
            showFirstContact(contacts);
            break;
        case "last":
            showLastContact(contacts);
            break;
    }
};
