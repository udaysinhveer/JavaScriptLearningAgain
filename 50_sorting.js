//sorting

const arrayOnNames = ["Anil", "Shantanu", "Nutan", "Suyog", "DD", "Pradnya"];
arrayOnNames.sort();
console.log(arrayOnNames);


const arrayOfNumbers = [22, 360, 50, 100, 600, 77, 455]
arrayOfNumbers.sort((first, second)=>{
    return (first>second ? 1:-1);
});
console.log(arrayOfNumbers);