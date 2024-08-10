import { Container, Hr } from '@react-email/components'

const ConsejoEmail = ({consejo}:{consejo:string}) => {
  return (
    <>
        {consejo === 'trattamento' &&
            <>
                <Hr className="border border-solid border-[#eaeaea] my-[10px] mx-0 w-full" />
                <Container className='bg-[#202945] text-left flex flex-col p-2 rounded-lg'>
                    <h2 className='m-0 p-0 text-[#E92176]'>Consiglio: </h2>
                    <p className="text-white">
                        Ricorda che se stai assumendo farmaci, o sei in post parto / allattamento, o ti trovi in un particolare momento di stress, i capelli possono risultare meno reattivi ai trattamenti e più ribelli durante la fase di styling, non demoralizzarti e continua a seguire la tua routine di cure  per garantire una ripresa più veloce.
                    </p>
                </Container>
            </>
        }

        {   
            consejo === 'styling' && 
            <>
                <Hr className="border border-solid border-[#eaeaea] my-[10px] mx-0 w-full" />
                <Container className='bg-[#202945] text-left flex flex-col p-2 rounded-lg'>
                    <h2  className='m-0 p-0 text-[#E92176]'>Consiglio: </h2>
                    <p  className="text-white">
                        applica i prodotti styling solo alle punte e distribuiscilo con una spazzola, successivamente, dividi in ciocche per dare forma ai tuoi ricci, ricorda di mantenere le ciocche ben inumidite per ottenere risultati da effetto WOW, il gel applicalo solo alla fine facendo scrunch ma scegli la tecnica scrunch più adatta alle tue caratteristiche.
                    </p>
                </Container>
            </>
        }
    
    
    
    </>
  )
}

export default ConsejoEmail