import { UseRecomendacionesStore } from "../store/recomendaciones"
import { Producto } from "../types"

export const GenerateDefatultProduct = () =>{
  const defaultValues = UseRecomendacionesStore(state=> state.defaultProduct)
  let indexObj = UseRecomendacionesStore(state => state.recomendacion)?.recommendation.length
  return(
    <>
      {defaultValues ?
        <div >
        {
          defaultValues?.recommendation.map((item,index)=>{
            return(
              <div className="recomendacion" key={crypto.randomUUID()}>
                {indexObj ?
                  <h2 >
                    {index + indexObj + 1}. {item.rutina}
                  </h2> : 
                  <h2> {index + 1} {item.rutina} </h2>
                }
                <div className="layout_product">
                  {
                    item.productos.map((producto: Producto)=>{
                      return(
                        <div className="product" key={crypto.randomUUID()}>
                          <img src={producto.urlImage} alt={producto.nombre} />
                          <div className="info_product">
                            <div>
                              <h3> {producto.nombre} </h3>
                              <h4> {producto.precio} €</h4>
                            </div>
                            <a target="_blank" href={producto.webSite}> Ver detalle </a>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div> : null
      }
    </>
  )
}


export const GenerateProductsRecomended = () =>{
  const product = UseRecomendacionesStore(state => state.recomendacion)
  
  return(
    <>
      {product ?
        <div>
          {
            product?.recommendation.map((recomend, index)=>{
              return(
                <div className="recomendacion" key={crypto.randomUUID()}>
                  <h2 >
                    {index + 1}.  {recomend.rutina}
                  </h2>
                  <div className="layout_product">
                    {
                      recomend.productos.map((item: Producto)=>{
                        return(
                          <div className="product" key={crypto.randomUUID()}>
                            <div>
                              <img src={item.urlImage} alt={item.nombre} />
                            </div>
                            <div className="info_product">
                              <div>
                                <h3> {item.nombre} </h3>
                                <h4> {item.precio} €</h4>
                              </div>
                              <a target="_blank" href={item.webSite}> Ver detalle </a>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div> : null
      }
    </>
  )
}