import { STATIC_URL } from '../config'

const Image = ({ src }) => {
    return (
        <img src={STATIC_URL + src} />
    )
}
export default Image