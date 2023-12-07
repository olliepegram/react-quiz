function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
	const percentage = (points / maxPossiblePoints) * 100;

	let emoji;
	if (percentage === 100) emoji = '🥇';
	if (percentage >= 90) emoji = '🥈';
	if (percentage >= 80) emoji = '🥉';
	if (percentage >= 70) emoji = '💪';
	if (percentage < 50) emoji = '🫤';
	if (percentage < 20) emoji = '🤦‍♂️';

	return (
		<>
			<p className='result'>
				{emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
				({Math.ceil(percentage)}%)
			</p>
			<p className='highscore'>Highscore: {highscore} points</p>
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'reset' })}
			>
				Reset
			</button>
		</>
	);
}

export default FinishScreen;
