//ARRAY ITERATOR FUNCTIONS

// forEach - Using forEach log out each of my friends but with the first letter of their name lower-cased. Use the <str>.toLowerCase() method.
    const friends = ["Melissa", "Marc", "Andrew", "Nick"];

    // friends.forEach(function(friend) {
    //     console.log(`I have a friend named `+friend.toLowerCase());
    // });

// map - Use map to create a new array that adds the string “ is awesome” to each element in the array.
    const instructors = ["Alex", "Stephanie", "Daniel"];

    const awesomeInstructors = instructors.map(instructor => (instructor+' is awesome'))
    // console.log(awesomeInstructors)

// filter - Filter out all “jerks”!
    const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
    const nonJerks = people.filter((person) => person === "jerks" ? null:person)
    // console.log(nonJerks)

//find - Find an element within an array. 
    const cars = [
        {color: 'red', make: 'BMW', year: 2001},
        {color: 'white', make: 'Toyota', year: 2013},
        {color: 'black', make: 'Ford', year: 2014},
        {color: 'white', make: 'Tesla', year: 2016}
      ];
      
      const firstWhiteCar = cars.find((car) => car.color === 'white');
      
      const missingCar = cars.find((car) => car.color === 'blue');

    //Find the first car whose year is older than 2014 and assign it to a variable named notTooOldCar
      const notTooOldCar = cars.find((car) => car.year > 2014) 
    //console.log(notTooOldCar)

//findIndex - returns the found element’s index instead of the element

//some - Check if array has at least one element that meets a certain condition

    const myRoom = ["evil monkey", "bed", "lamp"];

    // Do I have an evil monkey in my room?
    const isEvilMonkeyInRoom = myRoom.some((x) => x === 'evil monkey')
    // console.log(isEvilMonkeyInRoom)

//reduce - Reduce an array into a single value or thing (such as an object).

    const nums = [25, 6, 100, 3];

    // The callback returns the value of
    // acc (accumulator) for the next iteration.
    // The second argument, `0`, is the value
    // of acc on the first iteration.
    const sum = nums.reduce((acc, num) => acc + num, 0);

    // The reduce method returns whatever the callback
    // returns for the last iteration.
    // sum equals 134 (the final value returned)

    const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
    const tally = votes.reduce((acc, vote) => {
        // Assign 1 if first time seeing a certain "type" of vote
        // otherwise increase count by 1
        acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
        return acc;
    }, {});  // Note the initial value is an empty object
    
    console.log(tally)
    console.log(votes['Yes'])
    // tally -> {"No": 2, "Yes": 3}
