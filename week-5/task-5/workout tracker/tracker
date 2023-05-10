const form = document.querySelector('form');
const workoutTable = document.querySelector('#workout-table tbody');

form.addEventListener('submit', addWorkout);

function addWorkout(event) {
	event.preventDefault();

	const exerciseInput = document.querySelector('#exercise');
	const repsInput = document.querySelector('#reps');
	const setsInput = document.querySelector('#sets');
	const weightInput = document.querySelector('#weight');

	const exercise = exerciseInput.value;
	const reps = repsInput.value;
	const sets = setsInput.value;
	const weight = weightInput.value;

	const workoutRow = document.createElement('tr');
	workoutRow.innerHTML = `
		<td>${exercise}</td>
		<td>${reps}</td>
		<td>${sets}</td>
		<td>${weight}</td>
	`;

	workoutTable.appendChild(workoutRow);

	exerciseInput}
