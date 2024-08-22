import { consejos } from "../hooks/useQuestionData"

const Consejos = () => {
    const consejo = consejos()
    return (
        <section className="container-consejos">
            {
                consejo === 'trattamento' && 
                <div className="consejo">
                    <h2>Consiglio: </h2>
                    <p className="p-consejo">
                        Ricorda che se stai assumendo farmaci, o sei in post parto / allattamento, o ti trovi in un particolare momento di stress, i capelli possono risultare meno reattivi ai trattamenti e più ribelli durante la fase di styling, non demoralizzarti e continua a seguire la tua routine di cure  per garantire una ripresa più veloce.
                    </p>
                </div>
            }
            {   
                consejo === 'styling' && 
                <div className="consejo">
                    <h2>Consiglio: </h2>
                    <p className="p-consejo">
                        Applica i prodotti styling solo alle punte e distribuiscilo con una spazzola, successivamente, dividi in ciocche per dare forma ai tuoi ricci, ricorda di mantenere le ciocche ben inumidite per ottenere risultati da effetto WOW, il gel applicalo solo alla fine facendo scrunch ma scegli la tecnica scrunch più adatta alle tue caratteristiche.
                    </p>
                </div>
            }
        </section>
    )
}

export default Consejos