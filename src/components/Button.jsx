import { Link } from 'react-router-dom'

function Button({ text }) {

    return (
        <Link to="/signup" className="btn">
            {text}
        </Link>
    )
}
Button.defaultProps = {
    text: 'Create an account'
}
export default Button
