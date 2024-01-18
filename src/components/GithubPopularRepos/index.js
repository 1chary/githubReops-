import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {list: [], isLoading: true, activeId: languageFiltersData[0].id}

  componentDidMount() {
    this.getProducts()
  }

  changeColor = id => {
    this.setState({activeId: id}, this.getProducts)
  }

  getProducts = async () => {
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedCase = data.popular_repos.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        forksCount: eachItem.forks_count,
        avatarUrl: eachItem.avatar_url,
        issuesCount: eachItem.issues_count,
        starsCount: eachItem.stars_count,
      }))
      this.setState({list: updatedCase, isLoading: false})
    } else if (response.status === 401) {
      this.renderFailure()
    }
  }

  renderList = () => {
    const {list} = this.state
    return (
      <ul className="cardContainer">
        {list.map(eachItem => (
          <RepositoryItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failureView"
        alt="failure view"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  render() {
    const {activeId, isLoading} = this.state
    return (
      <div className="appContainer">
        <h1 className="heading">Popular</h1>
        <div className="buttonsContainer">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              eachLanguage={eachLanguage}
              changeColor={this.changeColor}
              isActive={eachLanguage.id === activeId}
            />
          ))}
        </div>
        {isLoading ? this.renderLoader() : this.renderList()}
      </div>
    )
  }
}

export default GithubPopularRepos
