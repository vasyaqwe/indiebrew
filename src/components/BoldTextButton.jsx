import { Link } from 'react-router-dom'

function BoldTextButton({ boldText, text }) {

    return (
        <Link to="/signup" className='btn'>
            <strong className="fw-500">
                {boldText} </strong>  {text}
        </Link>
    )
}
BoldTextButton.defaultProps = {
    boldText: 'Get Started -',
    text: "it's free"
}
export default BoldTextButton
