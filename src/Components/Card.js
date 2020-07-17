import React, {Fragment} from 'react';


function Card ({name, status, id, job, rank}) {

	return(
			
			<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='' src={require('./images/worker_rs3.jpg')}/>
				<div>
					<h2>{name}</h2>
					<p>Position: {job}</p>
					<p>Status: {status}</p>
					<p>Rank: {rank}</p>

				</div>
			</div>
			
		)
}

export default Card;