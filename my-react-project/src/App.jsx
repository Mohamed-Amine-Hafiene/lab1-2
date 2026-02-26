// Step 3 
const courseTitle = "Introduction to React";

function App() {

  // Step 2  
  const studentName = "Mohamed Amine";

  // Step 6 
  const student = {
    name: "Mohamed Amine",
    age: 21,
    track: "Business & Technology"
  };

  // Step 7
  function sayHello() {
    return `Hello ${studentName}, welcome back!`;
  }

  return (
    <div>
      
      {/* Step 2 – Display variable */}
      <p>{studentName}</p>

      {/* Step 4 – Dynamic sentence */}
      <p>Welcome to {courseTitle}, {studentName}!</p>

      {/* Step 5 – Form elements */}
      <label htmlFor="nameInput">Enter your name:</label>
      <input type="text" id="nameInput" />

      {/* Step 6 – Display object properties */}
      <h3>Student Info</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      {/* Step 7 – Call function */}
      <p>{sayHello()}</p>

      {/*
  

      One thing I understand well:
      I understand how JSX uses {} .

      One thing that is still confusing:
      The difference between props and state in larger applications.

      One mistake I made and fixed:
      I forgot to use {} .
      */}

    </div>
  );
}

export default App;