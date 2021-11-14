import React,{useState} from 'react'
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {parsePhoneNumberFromString} from 'libphonenumber-js'
import MainContainer from './MainContainer'
import PrimaryButton from './PrimaryButton'
import Input from './Input'
import { makeStyles } from '@material-ui/core/styles'
import {InputAdornment} from '@material-ui/core'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import CountrySelect from './CountrySelect'
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';




const schema = yup.object().shape({
    firstName:yup
        .string()
        .matches(/^([^0-9]*)$/,"First name should not contain numbers")
        .required("First name is a required field"),
    lastName:yup
        .string()
        .matches(/^([^0-9]*)$/,"Last name should not contain numbers")
        .required("Last name is a required field"),
    email:yup
        .string()
        .email("Email shoul have correct format")
        .required("Email is a required field"),
    phoneNumber:yup
        .string()
        .required("Phone number is a required field"),
    password:yup
        .string()
        .required('Password is a required field') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^[a-zA-Z0-9]+$/, 'Password can only contain Latin letters and numbers.'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'),null],'Password must match')
        .required('Confirm password is a required field'),
})

const normalizePhoneNumber = (value,code) => {
    const phoneNumber = parsePhoneNumberFromString(value,code)

    if(!phoneNumber){
        return value
    }

    return phoneNumber.formatInternational()
    
}


const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        height:"100%",
        display:'flex',
        justifyContent:"center",
        flexWrap:'wrap'
    },
    checkbox:{
        color:'#6CEEC7',
        textDecoration:"underline",
        textDecorationColor:"#6CEEC7",
        paddingLeft:'5px',
        '&:hover':{
            textDecorationColor:"white",
            transition:'.3s',
        }
    },
    label:{
        width:'300px',
        color:'white',
        fontStyle:'italic',
        paddingTop:'23px'
    }
}))

const Form = () => {

    const [data,setData] = useState()
    const [chooseCountryPhone,setChooseCountryPhone] = useState(null) 
    const [countryCode,setCountryCode] = useState(null)
    const styles = useStyles()


    const {register,handleSubmit,formState:{ errors },watch} = useForm({
        mode:"onBlur",
        resolver:yupResolver(schema)
    })

    const isAgree = watch("agree")
    console.log(isAgree)

    const setValues = (value) => {
        setData(prev=> ({
            ...prev,...value
        }))
    }

    const onSubmit = (info) => {
        setValues(info)
        console.log(info)
    }

    return (
       <MainContainer>
           <form onSubmit={handleSubmit(onSubmit)} className={styles.root} noValidate>
           <div style={{position:'relative',width:"40%"}}>
           <AccountCircleOutlinedIcon 
                style={{
                    color:"#6CEEC7",
                    position:'absolute',
                    top:'32px',
                    left:"13px"
                    }}/>

                <Input 
                    {...register('firstName')} 
                    id="firstName" 
                    type="text" 
                    label={<span style={{paddingLeft:"15px"}}>FirstName</span>} 
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}

                    />
            </div>
            <div style={{position:'relative',width:"40%",marginLeft:"10px"}}>
                <AccountCircleOutlinedIcon 
                style={{
                    color:"#6CEEC7",
                    position:'absolute',
                    top:'32px',
                    left:"13px"
                    }}/>
                <Input 
                    {...register('lastName')} 
                    id="lastName" 
                    type="text" 
                    style={{width:'100%'}}
                    label={<span style={{paddingLeft:"15px"}}>LastName</span>} 
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                    /> 
                </div>
               <div style={{width:"40%"}}>
               <CountrySelect 
                    name="country" 
                    setChooseCountryPhone={setChooseCountryPhone}
                    setCountryCode={setCountryCode}
                    
                    />
               </div>
                <div style={{position:'relative',width:"40%",marginLeft:'10px'}}>
                <PhoneOutlinedIcon 
                    style={{
                        color:"#6CEEC7",
                        position:'absolute',
                        top:'32px',
                        left:"13px"
                        }}/>
                
                <Input 
                    {...register('phoneNumber')} 
                    id="phoneNumber" 
                    type="text" 
                    label={<span style={{paddingLeft:"15px"}}>PhoneNumber</span>} 
                    name="phoneNumber"
                    onChange={(event)=>setChooseCountryPhone(event.target.value)}
                    error={!!errors.phoneNumber}
                    helperText={errors?.phoneNumber?.message}
                    value={chooseCountryPhone ?normalizePhoneNumber(chooseCountryPhone,countryCode) :''}
                   />
                   </div>
                <div style={{position:'relative',width:"40%"}}>
                <LockOutlinedIcon style={{
                        color:"#6CEEC7",
                        position:'absolute',
                        top:'32px',
                        left:"13px"
                        }}/>
                <Input 
                    {...register('password')} 
                    id="password" 
                    type="password" 
                    label={<span style={{paddingLeft:"15px"}}>Password</span>}  
                    name="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    />
                </div>
                <div style={{position:'relative',width:"40%",marginLeft:"10px"}}>
                <LockOutlinedIcon style={{
                        color:"#6CEEC7",
                        position:'absolute',
                        top:'32px',
                        left:"13px"
                        }}/>
                <Input 
                    {...register('confirmPassword')} 
                    id="confirmPassword" 
                    type="password" 
                    label={<span style={{paddingLeft:"15px"}}>ConfirmPassword</span>} 
                    name="confirmPassword"
                    error={!!errors.confirmPassword}
                    helperText={errors?.confirmPassword?.message}
                    />
                </div>
                <div style={{position:'relative',width:"40%"}}>
                <MailOutlinedIcon style={{
                        color:"#6CEEC7",
                        position:'absolute',
                        top:'32px',
                        left:"13px"
                        }}/>
                <Input 
                    {...register('email')} 
                    id="email" 
                    type="email" 
                    label={<span style={{paddingLeft:"15px"}}>Email</span>} 
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    />
                    </div>
                <div style={{position:'relative',width:"40%",marginLeft:"10px"}}>
                <FormControlLabel 
                control={
                    <Checkbox 
                        name="agree"
                        {...register('agree')}
                        style={{marginLeft:10,color:'#6CEEC7',}}
                        size='small'/>
                        }
                label={<span style={{fontSize:'0.9rem'}}>I agree to the 
                    <span 
                    className={styles.checkbox}>Terms & Conditions</span></span>}
                className={styles.label}
                />

                </div>
                <PrimaryButton isAgree={!isAgree} >Sign Up</PrimaryButton>
           </form>
       </MainContainer>
    )
}

export default Form
