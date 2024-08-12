import {Html,Head,Tailwind,Body,Text,Container,Img, Link} from '@react-email/components'
import { Recommendation } from '../types';
import ConsejoEmail from './ConsejoEmail';

export const SendEmail = ({recomendacion,consejo}:{recomendacion: Recommendation[], consejo:string | null}) => {

    return (
        <Html>
            <Head/>
            <Tailwind>
            <Body>
                <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px] shadow-lg'>
                    <section>
                        <Container>
                            {
                                recomendacion.map((item,index)=>{
                                    return(
                                        <Container key={index}>
                                            <Text className="text-black text-[20px] leading-[24px] m-0 p-0">
                                                <strong>{item.rutina}</strong> 
                                            </Text>
                                            <Container>
                                                {
                                                    item.productos.map(p=>{
                                                        return(
                                                        <Link key={p.nombre + p.descripcion} href={p.webSite} className='flex w-full items-center' style={{gap: "10px"}}>
                                                            <Container className='max-w-[100px] w-full'>
                                                                <Img src={p.urlImage} className='w-full max-w-24 '/>
                                                            </Container>
                                                            <Container className='flex  flex-col text-left w-full '>
                                                                <h4 className='w-full block m-0 p-0 text-#0A66C2'>{p.nombre}</h4>
                                                                <Text className="text-black text-[14px] leading-[24px] m-0 p-0">
                                                                    {p.descripcion}
                                                                </Text>
                                                            </Container>
                                                        </Link>
                                                        )
                                                    })
                                                }
                                            </Container>
                                        </Container>
                                    )
                                })
                            }
                        </Container>
                    </section>
                    {consejo &&
                        <ConsejoEmail consejo={consejo} />
                    }
                </Container>    
            </Body>
            </Tailwind>
        </Html>
    )
}