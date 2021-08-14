import React from 'react'
import { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import { Country, City } from 'country-state-city';
import {Link} from 'react-router-dom'
import FormInput from './FormInput';
import './Payment.css'

const AddressForm = ({next}) => {
    const methods = useForm();

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [location, setLocation] = useState({
        country: '',
        city: ''
    })
    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, [])

    const selectCountry = e => {
        let value = e.target.value;
        setSelectedCountry(value);
        setCities(City.getCitiesOfCountry(value));
        let countryName = countries.filter(el => el.isoCode === value)[0]?.name;
        setLocation({ ...location, country: countryName, city: '' })
    }

    const selectCity = e => {
        setLocation({ ...location, city: e.target.value });
    }

    return (
        <div value={{ location, setLocation }} style={{ margin: "30px" }}>
            <h3 style={{ textAlign: "center" }}>Payment</h3>
            <Typography variant="h6" gutterBottom style={{margin: '10px 0'}}>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data }) )}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lastName' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='region' label='Region' />
                        <FormInput required name='zip' label='ZIP / Postal code' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select required onChange={selectCountry} fullWidth labelId="countries" id="select">
                            {countries.map(el => <MenuItem key={el.isoCode} value={el.isoCode}>{el.name}</MenuItem>)}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Select your city</InputLabel>
                            {selectedCountry ? <Select required onChange={selectCity} fullWidth>
                                {cities.map(el => <MenuItem key={el.name + '_' + el.stateCode} value={el.name}>{el.name}</MenuItem>)}
                            </Select> : ''}
                        </Grid>
                    </Grid>
                    <br/>
                    <div className={'address'} style={{display: 'flex', justifyContent: 'space-between' }}>
                        <button component={Link} to="/cart" variant="outlined">Back to Cart</button>
                        <button type="submit" variant="contained" color="primary">Next</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
