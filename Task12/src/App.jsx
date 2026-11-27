
import HelloWorld from './HelloWorld';
import './App.css';

function App() {

    var name = "Hardik";
    var age = 18;
    var a = 10;
    var b = 20;

    return (
        <div>
            <h1>My First React Application</h1>

            <HelloWorld />

            <h2>Dynamic Expressions</h2>

            <p>My name is {name}</p>

            <p>My age is {age}</p>

            <p>Sum is {a + b}</p>

            <p>Multiplication is {a * b}</p>
        </div>
    );
}

export default App;
