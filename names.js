const names =["Amirtha","Sindhu","Natchathra","Saranya","Asha","Nisha","Anushuya",];

var filteredNames = names.filter(function(word) {
    return word[0] === "A";
});

console.log(filteredNames);