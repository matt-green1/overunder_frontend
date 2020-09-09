import React from 'react'

class TopScores extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(users => this.setState({
            users: this.renderScores(users)
        }))
    }

    renderScores = (users) => {

         let avgArray = users.map(user => {
            
            let average = user.rounds.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.round_score
                }, 0) / user.rounds.length

            

            return {name: user.username, score: average >= 0 ? parseFloat(average.toFixed(2)): 0, index: user.id}
         } )
        
         let sorted = avgArray.sort(function (a, b) {
            return b.score - a.score;
          });

        return sorted
         
    }


    render() {
        
        return(
            <div className="scores">
                <h1>Top Scores</h1>
                <table  id="center" className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th>Place</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.slice(0,10).map((user, index)=> {
                        return(
                            <tr key={user.index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.score}</td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TopScores