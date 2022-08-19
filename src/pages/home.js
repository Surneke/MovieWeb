import {Grid, Container,Box, Typography} from "@mui/material"
import { Cart } from "../components/cart"
import {useCartContext} from '../context/context'

export const Home= () => {
    let {data} = useCartContext()


    return (
       <Container>
         <Typography
            variant="h4"
         >
           Кино жагсаалт
         </Typography>
           <Grid 
            container
            >
                 {data.map((el)=>{
                     return <Cart el={el} />
                   })}
           </Grid>
       </Container>
    )
}