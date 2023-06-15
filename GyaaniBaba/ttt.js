function getSolution() {
    const name = document.getElementById('name').value;
    const problem = document.getElementById('problem').value;

    // You can add your logic here to fetch a random solution from the Bhagavad Gita text
    // For demonstration purposes, let's consider a static array of solutions
    const solutions = [
        "The solution is to perform your duty without attachment to the results.",
        "The solution lies in seeking knowledge and wisdom.",
        "The solution is to surrender to the divine will.",
        "The solution is to find inner peace through meditation and self-realization."
    ];

    // Get a random solution from the array
    const randomIndex = Math.floor(Math.random() * solutions.length);
    const solution = solutions[randomIndex];

    const solutionElement = document.getElementById('solution');
    solutionElement.innerHTML = `Dear ${name}, your solution is: <br>${solution}`;
}
