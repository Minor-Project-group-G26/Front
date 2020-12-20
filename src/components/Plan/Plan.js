import { Button, Grid, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect } from 'react'
import './Plan.css';
import { PlanList } from './planTypes'
const useStyle = makeStyles(theme => ({
    planList: {
        width: '100%',
        position: 'relative',
        margin: '1rem auto',
    },
    planItem: {
        maxWidth: '80%',
        background: 'rgb(32, 32, 32)',
        padding: '2rem',
        margin: '2rem auto',
        borderRadius: '10px',
        border: '2px solid #fff',
        color: 'rgb(212, 203, 203)',
    },
    header: {
        margin: '1rem 1.6rem',
        textAlign: 'center',
    },
    headerText: {
        fontSize: '38px',
        fontFamily: "Roboto",
        fontStyle: 'oblique',
        fontWeight: 800,
        overflowWrap: 'break-word',
        letterSpacing: '2px',
    },
    detail: {
        margin: '1rem 0',
    },
    detailList: {
        width: '50%',
        margin: '0 auto',
        fontFamily: 'Roboto',
        letterSpacing: '1.5px',
        fontWeight: 500,
        textAlign: 'center',
    },
    detailLi: {
        margin: '0.5rem 0',

    },
    price: {
        width: '100%',
        margin: '2rem auto 1rem auto',
        /* position: relative; */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buyButton: {
        fontSize: '24px',
        borderRadius: '20px',
        color: '#fff',
        fontWeight: 600
    },
    '@global': {
        html: {
            WebkitFontSmoothing: 'auto',
        },
        span: {
            color: '#fff'
        }
    },
    priceText: {
        fontSize: '40px',
        color: '#EEE'
    }

}))


function Plan(props) {
    // const [SelectedPlan, setSelectedPlan] = useState(null)
    const classes = useStyle()

    const planBuyHandler = async(id) =>{
        console.log(id)
        if(!props.LoginUser)
            return window.location.href = ('/user/signin');
        
        const formdata = new FormData()
        formdata.append('token', localStorage.getItem('USER_TOKEN'))
        formdata.append('plantype', id)
        const res = await Axios.put("http://127.0.0.1:5000/plan", formdata)
        console.log(res)
        return 
    }
    useEffect(() => {
        
    })

    const plans = PlanList.map(plan => (
    <Grid item md={4} xs={12}>
        <div className={classes.planItem}>
            <div className={classes.header}>
                <h2><span className={classes.priceText}>{plan.priceText.number}&#8377;</span>/{plan.priceText.per}</h2>
            </div>
            <div className={classes.detail}>
                <ul className={classes.detailList}>
                    {plan.details.map((detail) => (<li key={detail.toString()} className={classes.detailLi}>{detail}</li>))}
                </ul>
            </div>
            <div className={classes.price}>
                <Button className={classes.buyButton} onClick={()=> planBuyHandler(plan.id)} variant="contained" color="secondary">
                    Buynow
                </Button>
            </div>
        </div>
    </Grid>
    ))
    return (
        <main>
            <Grid container className={classes.planList}>
                {plans}
            </Grid>
        </main>
    )
}

export default Plan
