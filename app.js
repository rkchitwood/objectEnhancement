const createInstructor = (firstName, lastName) => ({firstName, lastName})

const favoriteNumber=42;
const instructor ={
    firstName: 'colt',
    [favoriteNumber]: "That is my favorite!",
}
const createAnimal = (species, verb, noise) => {
    return{
        species, 
        [verb](){
            return noise
        }
    }
}