import React from 'react'
import { ButtonStyle } from '../../styles/styledComponent/buttons/button'

import { Card } from '../../styles/styledComponent/cards/card'
import { Container } from '../../styles/styledComponent/constainers/container'
import { Form } from '../../styles/styledComponent/forms/form'
import { Input } from '../../styles/styledComponent/inputFields/input'


const LoginPage = () => {
    return (
        <>
           <Container>
               <Card>
                    <Form>
                        <Input type="text" placeholder='Enter Your name'/>
                        <Input type="text" placeholder='Enter Your password'/>
                        <ButtonStyle name="Submit"/>
                    </Form>
               </Card>
               <Card>

               </Card>
           </Container>
        </>
    )
}

export default LoginPage
