//Bankist Appp

//Data

const account1={
    owner:'Jonas',
    movements:[200,450,-400,3000,-650,-130,70,1300],
    interestRate:1.2,
    pin:1111
};



const account2={
    owner:'Mike',
    movements:[-400,3000,-650,200,450,-130,70,1300],
    interestRate:1.5,
    pin:1102
};


const account3={
    owner:'Smith',
    movements:[-650,-130,70,1300,200,450,-400,3000],
    interestRate:0.8,
    pin:2311
};


const account4={
    owner:'Mike',
    movements:[-130,70,1300,200,450,-400,3000,-650],
    interestRate:1.9,
    pin:1491
};

const accounts=[account1,account2,account3,account4];
console.log(accounts);