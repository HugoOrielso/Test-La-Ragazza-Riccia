import {Html,Head,Tailwind,Body,Text,Container,Img,Section, Heading, Hr, Link} from '@react-email/components'
import { ObjectOfRecommendation } from '../types';
import ConsejoEmail from './ConsejoEmail';





export const SendEmail = ({name, defaultProduct,productRecomended,consejo}:{name:string | null, defaultProduct: ObjectOfRecommendation | null, productRecomended: ObjectOfRecommendation | null, consejo:string | null}) => {
    
    return (
        
        <Html>
            <Head/>
            <Tailwind>
            <Body>
                <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px] shadow-lg'>
                    <Section className='text-center'>
                        <Img src={`https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/09/La-Ragazza-Riccia-350-x-100-px.png?w=350&ssl=1`} width="120" height="37" alt="Logo la ragazza riccia" className="my-0 mx-auto"/>
                        <Heading className='text-black text-[24px] font-normal text-center p-0 mx-0'>
                            <strong>Raccomandazioni</strong>  
                        </Heading>
                    </Section>
                    <Text className="text-black text-[14px] leading-[24px]">
                        Ciao <strong>{name}</strong>,
                    </Text>
                    <Text>
                        Apprezziamo la tua fiducia in noi, quindi ti regaliamo questo buono sconto:  
                        <strong className='text-[#E92176]'>código</strong> 
                    </Text>
                    <Hr className="border border-solid border-[#eaeaea] my-[10px] mx-0 w-full" />
                    <section>
                        {
                        defaultProduct && 
                        defaultProduct.recommendation.map((rec)=>{
                            return(
                                <Container key={crypto.randomUUID()}  className='flex flex-col text-left'>
                                    <Text className="text-black text-[20px] leading-[24px] m-0 p-0">
                                        <strong>{rec.rutina}</strong> 
                                    </Text>
                                    <Container >
                                        {rec.productos.map(producto=>{
                                            return(
                                                <Link key={crypto.randomUUID()} href={producto.webSite} className='flex w-full items-center gap-4'>
                                                    <Container className='max-w-[100px] w-full'>
                                                        <Img src={producto.urlImage} className='w-full max-w-24 '/>
                                                    </Container>
                                                    <Container className='flex  flex-col text-left w-full '>
                                                        <h4 className='w-full block m-0 p-0 text-#0A66C2'>{producto.nombre}</h4>
                                                        <Text className="text-black text-[14px] leading-[24px] m-0 p-0">
                                                            {producto.descripcion}
                                                        </Text>
                                                    </Container>
                                                </Link>
                                            )
                                        })}
                                    </Container>
                                </Container>
                            )
                        })}
                        <Container>
                        {   
                            productRecomended &&
                            productRecomended.recommendation.map((pro)=>{
                                return(
                                    <Container key={pro.rutina}>
                                        <Text className="text-black text-[20px] leading-[24px] m-0 p-0">
                                            <strong>{pro.rutina}</strong> 
                                        </Text>
                                        <Container>
                                            {
                                                pro.productos.map(p=>{
                                                    return(
                                                    <Link key={p.nombre + p.descripcion} href={p.webSite} className='flex w-full items-center gap-4'>
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
                    <Hr className="border border-solid border-[#eaeaea] my-[10px] mx-0 w-full" />
                    <Text className='mb-0 p-0'>
                        Saluti 👋 
                    </Text>
                    <Text className='m-0 p-0'>
                        <strong className='text-[#E92176]'>La Ragazza Riccia Team.</strong>
                    </Text>
                </Container>    
            </Body>
            </Tailwind>
        </Html>
    )
}
