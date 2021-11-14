import React,{forwardRef} from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({
    root:{
    width:'100%',
    marginLeft:"10px",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
        
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#6CEEC7",
        transition:'.3s'
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#6CEEC7"
      },
      "& .MuiOutlinedInput-input": {
        color: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "white",
        transition:'.3s'
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "white"
      },
      "& .MuiInputLabel-outlined ": {
        color: "#6CEEC7"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "white",
        transition:'.3s'
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#6CEEC7"
    }},
    
}))

const Input = forwardRef((props,ref)=>{

    const styles = useStyles()
    return <TextField 
        className={styles.root} 
        variant="outlined" 
        margin="normal" 
        inputRef={ref} 
        {...props}/>
})

export default Input
