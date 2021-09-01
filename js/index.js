const data = { name: 'sanju', work: 'web', salary: 1500 };

const { name, work, salary } = data
// console.log(name);

const Array = [200, 'sanju', false]
const [balance, name2, boloen] = Array;
// console.log(balance);


const newArray = [35, 14, 21, 28, 70];

const newArrayItem = newArray.map(newArray => newArray / 7)
    // console.log(newArrayItem);


// const dataload = (num1, num2) => {

//     let newitem = num1 + 7;
//     let newitem2 = num2 + 7;
//     let sum = newitem + newitem2
//     return sum



// }

// const allsum = dataload(4, 6);
// console.log(allsum);
// const dataload = (num1, num2) => {

//     let newitem = num1 + num2;
//     let sum = newitem / 2
//     return sum



// }

// const allsum = dataload(4, 6);
// console.log(allsum);
// const dataload = (num1) => {

//     let newitem = num1 / 7
//     return newitem



// }

// const allsum = dataload(21);
// console.log(allsum);
const dataload = () => {

    let newitem = 89
    return newitem



}

const allsum = dataload();
console.log(allsum);


const newobj = {
    id: 101,
    name: 'sanju',
    job: 'web',
    array: [101, 40, 'sanju', 'web'],
    obj: {
        ade: 'bonpare',
        education: 'honours'
    },

    loaddara: function(name) {

        this.name = name;
        return name
    }



}

const item12 = `${newobj.name} ${newobj.array[1]}  ${newobj.obj.ade} ${newobj.loaddara('sagor')}`;

console.log(item12);