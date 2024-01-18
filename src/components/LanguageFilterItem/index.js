// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, changeColor, isActive} = props
  const {language, id} = eachLanguage

  const giveId = () => {
    changeColor(id)
  }

  return (
    <div>
      <button
        type="button"
        className={isActive ? 'activeBtn' : 'btn'}
        onClick={giveId}
      >
        {language}
      </button>
    </div>
  )
}

export default LanguageFilterItem
