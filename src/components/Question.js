import Options from './Options';

function Question({ question, answer, dispatch }) {
	return (
		<div>
			<h4>{question.question}</h4>

			<div className='options'>
				<Options
					answer={answer}
					dispatch={dispatch}
					question={question}
				/>
			</div>
		</div>
	);
}

export default Question;
