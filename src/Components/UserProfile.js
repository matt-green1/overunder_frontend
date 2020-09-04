import React from 'react'

function UserProfile(props) {
    
    let scoreArray = props.userRounds.map(round => {return round.round_score})
    console.log(scoreArray)
    let average = scoreArray.reduce(function(a,b) {
        return a + b
    }, 0)  / scoreArray.length

   
    return (
        <>
            <p>I am the user profile. I am simple and ugly now but I will one day cool and beautiful.</p>
            <h5>Name: {props.currentUser.username}</h5>
            <h5>Total Score: {average}</h5>
            {/* <h5>All time Ranking: 5</h5> */}
            <h5>Title: Yung Gamer</h5>
        </>
    )

}

export default UserProfile