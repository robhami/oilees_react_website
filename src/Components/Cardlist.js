import React from 'react';
import Card from './Card';

const CardList = ({users}) => {
	if (true) {
		throw new Error("Error");
	}
	
		return (
			<div>
				{

					users.map((user, i) => {
						return(
						<Card
						key={users[i].id}
						id={users[i].id}
						name={users[i].name}
						job={users[i].job}
						status={users[i].status}
						rank={users[i].rank}
						/>
						);

					})
				}
	
			</div>

		);


}

export default CardList;