import 'date-fns';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Header from '../Header/Header';
import { useHistory, useLocation } from 'react-router';





const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const PlaceOrder = () => {
    const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    //date pickers
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const orderData = {
            name: data.name,
            email: data.email,
            price: data.price,
            time: { selectedDate }.selectedDate,
            productName : data.productName,
            productWeight : data.weight
        };
        console.log(orderData);
        const url = `https://glacial-peak-87735.herokuapp.com/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Thank you for placing your order");
                    history.replace(from);
                }
            })
    }
    return (
        <div>
            <Header />
            <div className="mt-5 container w-25 bg-warning">
                <form  onSubmit={handleSubmit(onSubmit)} className={classes.container} noValidate>
                    <div>
                        <label class="form-label">User Name:</label><br />
                        <input class="form-control" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} /> <br />
                    </div>
                    <div>
                        <label class="form-label">User Email:</label> <br />
                        <input class="form-control" name="email" defaultValue={loggedInUser.email} ref={register} />
                    </div>
                    <br/>
                    <div>

                        <label class="form-label">Product name:</label><br />
                        <input class="form-control" name="productName" defaultValue={loggedInUser.productName} ref={register} />
                    </div>
                    <br/>
                    <div>
                        <label class="form-label">Product Weight:</label><br />
                        <input class="form-control" name="weight" defaultValue={loggedInUser.productWeight} ref={register} />
                    </div>
                    <br/>

                    <div className="mb-5">
                        <label class="form-label">Product Price:</label><br />
                        <input class="form-control" name="price" defaultValue={loggedInUser.price} ref={register} />
                    </div>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Select Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>



                    {errors.exampleRequired && <span>This field is required</span>}
                    <p className="text-center mt-4"><input className="btn btn-success mb-3" type="submit" /></p>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;