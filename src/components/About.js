import React, {Component} from 'react'
import Rainbow from '../hoc/Rainbow'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball2.jpg'
import { connect } from 'react-redux'

class About extends Component {

    render () {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="a pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}><span className="card-title">{post.title}</span></Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="about container">
                <h4 className="center">About</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Rainbow(About));