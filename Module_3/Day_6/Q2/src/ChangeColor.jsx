import {useState} from 'react';

function ChangeColor() {
  const [isRed, setIsRed] = useState(true);

    const handleClick = () => {
        setIsRed(!isRed);
    };

    return (
        <div>
            <div className={isRed ? 'red' : 'blue'}>
               <h1>This div changes color !</h1>
            </div>
            <button onClick={handleClick}>Change Color</button>
        </div>
    );
}
export default ChangeColor;