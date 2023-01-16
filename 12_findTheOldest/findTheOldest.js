const findTheOldest = function(people) {
  people.sort((personA, personB) => {
    return ((deadOrAlive(personB) - personB.yearOfBirth) -
      (deadOrAlive(personA) - personA.yearOfBirth));
  });
  return people[0];
};

const deadOrAlive = (person) => ('yearOfDeath' in person) ?
  person.yearOfDeath :
  new Date().getFullYear();

// Do not edit below this line
module.exports = findTheOldest;
