const person = ['Nandy', 'Sweden', 'Skinny' , 'Candy', 'Sandy','Natchathra' ,'Abishek','Samy',  ];

const out = person.filter((letter) => letter.startsWith("S") && letter.endsWith("y"));

console.log(out);