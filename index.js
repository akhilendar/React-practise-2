const Notification = props => {
  //  Write your code here.
    {className, imgUrl, content} = props
  return (
  <div className={className}>
      <img src={imgUrl} className=="image"/>
      <p className= "para">{content}</p>
  </div>
  )
}

const element = (
  //  Write your code here.   
  <div className="bg-container">
      <h1 className = "heading">Notifications</h1>
      <Notification className = "blue" content= "Information Message" imgUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification className = "success" content= "Success Message" imgUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification className = "warning" content= "Warning Message" imgUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification className = "error" content= "Error Message" imgUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
