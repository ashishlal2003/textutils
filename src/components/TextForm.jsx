import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleRandom = ()=>{
        let newText = '';
        let str = text;
        for(let i=0;i<str.length;i++){
            newText += str.charAt(Math.floor(Math.random()*str.length));
        }
        setText(newText);
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container beech'>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1 style={{color:props.mode==='light'?'#212529':'white'}}>{props.heading}</h1></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} style={{
  backgroundColor: props.mode === 'light' ? 'white' : '#212529',
  color: props.mode === 'light' ? '#212529' : 'white'
}}
 placeholder='Enter text here' onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRandom}>Randomise Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} style={{color:props.mode==='light'?'#212529':'white'}}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
            <h2 style={{color:props.mode==='light'?'#212529':'white'}}>Your text summary</h2>
            <p style={{color:props.mode==='light'?'#212529':'white'}}>{text.split(" ").length} words, {text.length} characters.</p>
            <p style={{color:props.mode==='light'?'#212529':'white'}}>{0.008 * text.split(" ").length} Minutes read</p>
            <h2 style={{color:props.mode==='light'?'#212529':'white'}}>Preview</h2>
            <p style={{color:props.mode==='light'?'#212529':'white'}}>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

