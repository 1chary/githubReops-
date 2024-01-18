// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {name, forksCount, avatarUrl, issuesCount, starsCount} = eachItem

  return (
    <li className="individualCardContainer">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="redHeading">{name}</h1>
      <div className="inRow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="starsImage"
          alt="stars"
        />
        <p>{`${starsCount} stars`}</p>
      </div>
      <div className="inRow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="starsImage"
          alt="forks"
        />
        <p>{`${forksCount} forks`}</p>
      </div>
      <div className="inRow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="starsImage"
          alt="open issues"
        />
        <p>{`${issuesCount} issue`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
