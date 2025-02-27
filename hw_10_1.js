let mails = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
const check = /[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+(@gmail|@yahoo)\.com/gi;
const newMails = mails.filter(mail => check.test(mail.email));
console.log(newMails);
