import { Link } from 'react-router-dom'

function LinkTag({ text }) {
    return (
        <Link to="/signup" className="link text-accent">{text}</Link>
    )
}

export default LinkTag
