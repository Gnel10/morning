import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';


const Product = (props) => {

    const {id} = props
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return(
        <div></div>
    )
}

    export default Product