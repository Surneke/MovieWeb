import {Grid, Container,Box} from "@mui/material"
import { Cart } from "../components/cart"
import {useCartContext} from '../context/context'

export const Home= () => {
    let {data} = useCartContext()
    console.log(data)


    return (
       <Container>
           <Grid container>
                 {data.map((el)=>{
                       console.log(el)
                     return <Cart el={el} />
                   })}
           </Grid>
       </Container>
    )
}