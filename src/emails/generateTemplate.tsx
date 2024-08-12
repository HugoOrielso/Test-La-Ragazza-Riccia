import { render } from "@react-email/components";
import { UseRecomendacionesStore } from "../store/recomendaciones";
import { consejos } from "../hooks/useQuestionData";
import { Recommendation } from "../types";
import { SendEmail } from "./SendEmail";



const generateTemplate = () => {
    const consejo = consejos()
    const defaultProduct = UseRecomendacionesStore(state=> state.defaultProduct)
    const product = UseRecomendacionesStore(state => state.recomendacion)
    const combinedRecommendations: Recommendation[] = [...defaultProduct?.recommendation || [], ...product?.recommendation || []];
    
    if (defaultProduct || product) {
        return render(
            <SendEmail 
                recomendacion={combinedRecommendations} 
                consejo={consejo} 
            />,
            { pretty: true }
        );
    }

    return null;
}

export default generateTemplate