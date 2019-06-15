import React, { Component } from 'react'

class ListUsers extends Component {
  

  render() {
    let items = [];
    
    for (let p of  Object.values(this.props.profiles)) {
        let u = this.props.users[p.userID];
        let m = this.props.movies[p.favoriteMovieID];

        items.push(`${u.name} likes ${m.name}`);      
    }    

    return ( // use map
		<ol className='user-list'> 
          { items.map(i => (
      		  <li>{i}</li>
           ))}
        </ol>
	)
  }
}

export default ListUsers
