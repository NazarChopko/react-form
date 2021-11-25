import React from 'react'
import { Button } from '@material-ui/core'
import  {makeStyles} from '@material-ui/core/styles'
import transitions from '@material-ui/core/styles/transitions'

const useStyles = makeStyles((theme) => ({
    root:{
        border:'1px solid #6CEEC7',
        background:'none',
        position:'absolute',
        bottom:'-50px',
        left:"85px",
        color:"#6CEEC7",
        "&:hover":{
            backgroundColor:"#6CEEC7",
            color:"black",
            transition:'.7s'
        }
    }
}))

const PrimaryButton = ({children,isAgree}) => {


    const styles = useStyles()
    return (
       <Button 
        className={styles.root} 
        type="submit"
        disabled={isAgree}
        variant='contained'
       >
            {children}
        </Button>
    )
}

export default PrimaryButton
