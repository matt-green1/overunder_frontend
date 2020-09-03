import React from 'react'

function UserProfile(props) {
    console.log(props.currentUser)
    return (
        <>
            <p>I am the user profile. I am simple and ugly now but I will one day cool and beautiful.</p>
            <h5>Name: {props.currentUser.username}</h5>
            <h5>Total Score: {props.currentUser.total_score}</h5>
            {/* <h5>All time Ranking: 5</h5> */}
            <h5>Title: Yung Gamer</h5>
        </>
    )

}

export default UserProfile