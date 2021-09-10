import React from 'react'
import FollowersList from '../FollowersList'
import Header from '../Header'
import "./Followers.css"

export default function Followers() {
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList />
        </div>
    )
}
