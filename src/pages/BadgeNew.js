import React from 'react';

import header from '../images/badge-header.svg';

import './styles/BadgeNew.css';

import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    // state = { form:{} }; //inicialemos un estado vacio con una propiedad FORM qu esta vacio

    // handleChange = e => {
    //     //copia del estado del form
    //     const nextForm = this.state.form
    //     nextForm [e.target.name] = e.target.value
    //     this.setState({
    //         form: nextForm, 
    //     });
    // };
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          twitter: '',
        },
      };
    
      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}
                            avatarUrl="https://s.gravatar.com/avatar/5d038130bf2d14b6df29a7a3a2d77275?s=80" />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                             />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew;