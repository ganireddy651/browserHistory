import './index.css'

const BrowserHistoryItems = props => {
  const {eachHistory, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div className="list-container">
        <div className="list-sub-container">
          <p className="timeAccessed">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button type="button" className="custom-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItems
