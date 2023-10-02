import './error.css';
import { useNavigate } from 'react-router-dom';
function Error404() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
        console.log('go back')
    }
  return (
    <>
    <div className="error-container">
      <h1 className='heading'>Error 404</h1>
      <p className='title'>Page not found</p>
        <button className='button is-link' onClick={goBack}> Back to safe page</button>
    </div>
    
    </>
    
  );
}

export default Error404;