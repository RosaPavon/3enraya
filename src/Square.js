import classNames from 'classnames';

const Square = ({value, onClick, turn}) =>{
    const handleClick =()=>{
       (turn!== null && value === null) && onClick()
    }

    let squareClass = classNames({
        square: true,
        [`square--${value}`]:value !==null//da la clase a cada uno de los square
    })


    return(
        <div className={squareClass} onClick={() => handleClick()}>

        </div>
    )
}

export default Square