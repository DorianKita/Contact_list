
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
const showFirstContact = arr => confirm(`${arr[0].name} \n${arr[0].phone} \n${arr[0].email}`);
const showLastContact = arr => confirm(`${arr[arr.length - 1].name} \n${arr[arr.length - 1].phone} \n${arr[arr.length - 1].email}`);
const showAllContacts = arr => {
    for (contact of arr) {
        confirm(`${contact.name} \n${contact.phone} \n${contact.email}`);
    };
};
const addNewContact = arr => {
    let name = prompt("add contact name: ");
    let phone = Number(prompt("add phone number"))
    while (Number.isNaN(phone)) {
        phone = Number(prompt("add phone number"))
    }
    let email = prompt("add contact email: ");
    arr.push({ name, phone, email });
    confirm(`added new contact: \n${name} \n${phone} \n${email}`)
}

const sort = () => {
    let sortMethodChoice = Number(prompt("what would you like to sort by? \n1. name \n2. phone number \n3. email address"));
    if (sortMethodChoice === 1) {
        contacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        showAllContacts(contacts)

    } else if (sortMethodChoice === 2) {
        contacts.sort((a, b) => (a.phone < b.phone) ? 1 : (a.phone > b.phone) ? -1 : 0);
        showAllContacts(contacts)
    } else if (sortMethodChoice === 3) {
        contacts.sort((a, b) => (a.email > b.email) ? 1 : (b.email > a.email) ? -1 : 0);
        showAllContacts(contacts)
    }
}

const quit = () => isOver = !isOver;

//user selection 
while (!isOver) {
    let userChoice = prompt("Choose action: \n1. show first contact (first)\n2. show last contact (last)\n3. show all contacts (all)\n4. add new contact (new) \n5. sort (sort) \n6. exit program (quit)");

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
        case "all":
            showAllContacts(contacts);
            break;
        case "new":
            addNewContact(contacts);
            break;
        case "sort":
            sort();
            break;
    }
};
