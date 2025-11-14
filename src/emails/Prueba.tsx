import { Html, Body, Container, Text , Img, Link, Hr} from '@react-email/components'
const Prueba = () => {
    return (
        <Html>

            <Body >
                <Container   

                    style={{
                        border: '1px solid #eaeaea',
                        borderRadius: '8px',
                        margin: '40px auto',
                        padding: '20px',
                        maxWidth: '465px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}>
                    <Container>
                        <Img src='https://eu9x3bnep7j.exactdn.com/wp-content/uploads/2022/10/CISCAN-Final-e1663303902898.png?strip=all&lossy=1&ssl=1&fit=187%2C100' />
                    </Container>
                    <Text>
                        Hi [Client's Name],
                    </Text>

                    <Text>
                        We’re reaching out to confirm that we’ve successfully received your payment.
                        Attached to this email you’ll find the invoice for your recent purchase.
                    </Text>

                    <Text>

                        🔖 Invoice No.: [Invoice number or code]
                    </Text>
                    <Text>
                        💳 Payment Method: Stripe

                    </Text>
                    <Text>
                        📅 Issue Date: [Today’s date]
                    </Text>
                    <Text>
                        💰 Total Amount: €[Amount]
                    </Text>
                    <Container
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '20px',
                            marginBottom: '20px',
                            padding: '20px',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.06)',
                            border: '1px solid #eaeaea',
                        }}
                        >
                        <Text style={{ marginBottom: '10px' }}>
                            You can also download your invoice directly via this link:
                        </Text>
                        <Link
                            href="[Link to the Stripe invoice]"
                            style={{
                            display: 'inline-block',
                            textDecoration: 'none',
                            color: '#ffffff',
                            padding: '10px 20px',
                            borderRadius: '6px',
                            background: 'linear-gradient(to right, #56ab2f, #a8e063)',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                            }}
                        >
                            👉 Download Invoice
                        </Link>
                        </Container>

                    <Text>

                        If you have any questions about the invoice or need a version with specific billing details, feel free to reply to this email..
                    </Text>

                    <Text>
                        Thanks again for your trust 💛
                    </Text>
                    <Hr style={{border: '1px solid #eaeaea'}}/>
                    <Container style={{width: '100%',
                            textAlign: 'center',
                            marginTop: '5px',
                            marginBottom: '5px',
                            padding: '20px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Text>
                            CISCAN - Corrosion & Integrity Solutions Canada Ltd
                        </Text>
                        <Link href='https://ciscan.ca/'>
                            cisca.ca
                        </Link>
                    </Container>
                    
                </Container>

            </Body>
        </Html>
    )
}

export default Prueba

