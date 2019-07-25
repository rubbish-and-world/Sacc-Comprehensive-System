import React from 'react'

import CodingHomeHeader from '../components/Header'
import CodingQuestionList from './questionList'

import './index.less'

class Home extends React.Component {
  render() {
    return (
      <div className="coding_home_container">
        <CodingHomeHeader />
        <div className="question_list_container">
          <CodingQuestionList />
        </div>
      </div>
    )
  }
}

export default Home