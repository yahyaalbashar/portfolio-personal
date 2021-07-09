import React, { Component } from 'react'
import ArticlesList from './ArticlesList'
export class Main extends Component {
    render() {
        return (
            <main className='main'>
                <ArticlesList/> 
            </main>
        )
    }
}

export default Main
