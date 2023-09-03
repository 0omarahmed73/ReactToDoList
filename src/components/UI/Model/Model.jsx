import './Model.css'
import ReactDOM from 'react-dom'
const Model = ({children , visible , closeModel}) => {
  
  return (
      <>
      {visible ? ReactDOM.createPortal((
      <div className="model" onClick={closeModel}>
      <div className="model-body" onClick={e => e.stopPropagation()}>
      {children}
      </div>
    </div>
    ) , document.getElementById('root-model')) : ''}
      </>
    )
  }
  
export default Model