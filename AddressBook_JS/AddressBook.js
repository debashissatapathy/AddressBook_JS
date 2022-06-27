const read = require("readline-sync");
class AddressBook{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    printDetails(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.address);
        console.log(this.city);
        console.log(this.state);
        console.log(this.zip);
        console.log(this.phoneNumber);
        console.log(this.email);

    }
}
var contact1=new AddressBook("Akhay","Das","Remuna","Balasore","Odisha",700001,9876543210,"akhay@gmail.com");
var contact2=new AddressBook("Shristi","Choudhury","BaniBihar","Bhubaneswar","Odisha",720101,1234567890,"shristi@gmail.com");
//contact1.printDetails();
var contact3=new AddressBook("Sangram","Pani","Kuansh","Bhadrak","Odisha",756100,9005315003,"sangram@gmail.com");
//contact2.printDetails();
//contact3.printDetails();
var map1= new Map();
map1.set(1,contact1);
map1.set(2,contact2);
map1.set(3,contact3);
//console.log(map1.size);
var array=[];
array.push(contact1);
array.push(contact2);
array.push(contact3);
console.log(array[0].firstName);
function addDetails(){
    var contact = new AddressBook();
    contact.firstName = read.question("Please enter the firstName :");
    contact.lastName = read.question("Please enter the lastName :");
    contact.address = read.question("Please enter the address :");
    contact.city = read.question("Please enter the city :");
    contact.state = read.question("Please enter the state :");
    contact.zip = read.question("Please enter the zip :");
    contact.phoneNumber = read.question("Please enter the phoneNumber :");
    contact.email = read.question("Please enter the email :");
    array.push(contact);
}

function addDetails(){
    var contact = new AddressBook();
    contact.firstName = read.question("Please enter the firstName :");
    contact.lastName = read.question("Please enter the lastName :");
    contact.address = read.question("Please enter the address :");
    contact.city = read.question("Please enter the city :");
    contact.state = read.question("Please enter the state :");
    contact.zip = read.question("Please enter the zip :");
    contact.phoneNumber = read.question("Please enter the phoneNumber :");
    contact.email = read.question("Please enter the email :");
    array.push(contact);
}
function editContact(){
    var name = read.question("Please enter the firstname of contact you want to Edit :");
    for(let i=0;i<array.length;i++){
        if(array[i].firstName == name){
            var choice = read.question("Please choose what you want to edit : \n1)firstName \n2)lastName \n3)Address \n4)city \n5)State \n6)Zip \n7)Phone Number \n8)Email \n");
            switch(choice){
                case "1":
                    array[i].firstName=read.question("Please enter the firstName :");
                    break;
                case "2":
                    array[i].lastName = read.question("Please enter the lastName :");
                    break;
                case "3":
                    array[i].address = read.question("Please enter the address :");
                    break;
                case "4":
                    array[i].city=read.question("Please enter the city :");
                    break;
                case "5":
                    array[i].state = read.question("Please enter the state :");
                    break;
                case "6":
                    array[i].zip = read.question("Please enter the zip :");
                    break;
                case "7":
                    array[i].phoneNumber=read.question("Please enter the phoneNumber :");
                    break;
                case "8":
                    array[i].email = read.question("Please enter the email :");
                    break;
                default:
                    console.log("Please choose correct option!");
                    break;
            }
        }
    }
}

function deleteContact(){
    var name = read.question("Please enter the firstname of contact you want to delete :");
    for(let i=0;i<array.length;i++){
        if(array[i].firstName == name){
            array.splice(i,1);
        }
    }
}

function countOfContacts(data) {
    return data.reduce((sum, a) => sum + 1, 0);
}

function displayContacts(){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

//uc7
function dupicateCheckInAddContacts(){
    var flag=0;
    var contact = new AddressBook();
    contact.firstName = read.question("Please enter the firstName :");
    for(let i=0;i<array.length;i++){
        if(array[i].firstName === contact.firstName){
            flag=1;
            console.log("Contact with this first name already exists!");
        }
    }
    if(flag===0){
        contact.lastName = read.question("Please enter the lastName :");
        contact.address = read.question("Please enter the address :");
        contact.city = read.question("Please enter the city :");
        contact.state = read.question("Please enter the state :");
        contact.zip = read.question("Please enter the zip :");
        contact.phoneNumber = read.question("Please enter the phoneNumber :");
        contact.email = read.question("Please enter the email :");
        array.push(contact);
    }
}

while(true){
    console.log("Please choose the option");
    var option = read.question("1)Display Contacts in AddressBook. \n2)Add Details in AddressBook\n3) Edit Contact using FirstName\n4)Delete contact \n5)count using Reduce \n6)Ensure no duplicate entries \n");
    switch(option){
        case "1":
            displayContacts();
            break;
        case "2":
            addDetails();
            break;
        case "3":
            editContact();
            break;
        case "4":
            deleteContact();
            break;
        case "5":
            var coun = countOfContacts(array);
            console.log(coun);
            break;
        case "6":
            dupicateCheckInAddContacts();
            break;
        default:
            console.log("Please choose the correct option");
            break;
    }
}