import React, {useState} from 'react';
import './App.css';

function App() {

  const [rippleStyle, setRippleStyle] = useState({
    display: 'none',
    width: 0,
    height: 0,
    top: 0,
    left: 0
  })
 
  const [rippleName, setRippleName] = useState('')

  const showRipple = (e) => {
    setRippleName("rippleEffect")
  
    const button_left = e.target.offsetLeft;
    const button_top = e.target.offsetTop;
    const button_width = e.target.offsetWidth;
    const button_height = e.target.offsetHeight;
    
    let ripple_width = 0;
    ripple_width = button_height > button_width ? button_height : button_width;

    setRippleStyle(
      {
        display: 'block',
        width: button_width + 'px',
        height: button_width + 'px',
        top: e.pageY - button_top - ripple_width / 2 + 'px',
        left: e.pageX - button_left - ripple_width / 2 + 'px'
      }
    )
    setTimeout(() => {
      setRippleName('');
      setRippleStyle(
        {
          display: 'none',
        }
      )
    }, 1000)
  }

  return (
    <div className="App">
      <button onClick={e => showRipple(e)}>
        点我啊！！！
        <div className={`ripple ${rippleName}`}
        style={Object.assign({}, rippleStyle)}></div>
        </button>
    </div>
  );
}

export default App;
