import { render } from "@react-email/components";
import { UseRecomendacionesStore } from "../store/recomendaciones";
import { SendEmail } from "./SendEmail";
import { consejos } from "../hooks/useQuestionData";



const generateTemplate = () => {
    const name = UseRecomendacionesStore(state=>state.nameUser)
    const defaultProduct = UseRecomendacionesStore(state=> state.defaultProduct)
    const product = UseRecomendacionesStore(state => state.recomendacion)
    const consejo = consejos()
    
    if (name && (defaultProduct || product)){
        return (render(<SendEmail name={name} defaultProduct={defaultProduct} productRecomended={product} consejo={consejo}/>,{pretty:true} ))
    }
}

export default generateTemplate