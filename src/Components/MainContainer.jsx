import React from 'react'
import {Container, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import title from '../libs/icon/header-fixed.png'


const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:'40px',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"640px",
        height:"400px",
        position:'relative',
       },
    title:{
        textAlign:'center',
        marginTop:"200px",
    },
    subtitle:{
        textAlign:'center',
        fontSize:"24px",
        marginTop:"10px",
        color:"white",
        '& > span':{
            color:'#6CEEC7'
        }
    },
    footer:{
        display:"flex",
        justifyContent:"center",
        marginTop:"28rem",
        color:'white',
        '& > span':{
            color:'#6CEEC7',
            cursor:"pointer",
            textDecoration:"underline"
        }
    }
}))

const MainContainer = ({children,...props}) => {

    const styles = useStyles()
    return (
        <>
        <div className={styles.title}><img src={title} alt="" /></div>
        <div className={styles.subtitle}><span>Sign UP</span> and find the best place to rest while traveling</div>
        <Container className={styles.root} container='main' >
            {children}
        </Container>
        <div className={styles.footer}>If you have an account,<span> Log in</span></div>
        </>
    )
}

export default MainContainer
