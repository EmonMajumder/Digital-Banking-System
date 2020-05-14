import React from 'react';
import { Link  } from 'react-router-dom'
import SingleAccount from './SingleAccount';
import './summary.css';
import NavBar from '../NavBar';


class AccountSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Accounts: [],
            errors: {},
            acntfrom: 0,
            acntto: 0,
            transferamount: 0,
            transferrecord: {
                date: 0,
                to: 0,
                from: 0,
                amount: 0,
                type: 0,
                invoice: 0
            }
        }; 
        
        this.handletransfer = this.handletransfer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({transferamount: event.target.value});
      }

    handletransfer = e => {
        alert("Transaction Successfull");
        let newacnt = this.state.Accounts.map(each => each.id === 1 ? {...each, amount: each.amount - this.state.transferamount} : each);
        this.setState({Accounts: newacnt}); 
        localStorage.setItem("auth-transferrecord",1);
        document.getElementById("transferamount").value = "0.00";
    }
     

    componentDidMount() { 
        document.body.style.background= '#fff';
        fetch("http://localhost:8080/api/AccountDetail", {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("auth-token")}`
        },     
        })
        .then(      
        response => response.json())
        .then(data => {
            if(localStorage.getItem("transfered") === "1")
            {
                console.log("emon");
                let newacnt = data.map(each => each.id !== 2 ? {...each, amount: each.amount - 100} : each);
                this.setState({Accounts: newacnt}); 
            }
            else{
                this.setState({Accounts : data});
            }               
        });        
    }

    render() {
        
        return (
            <div className="bg-white">
                <NavBar component={NavBar}/>
                <main role="main" className="container">
                    <div className="d-flex mx-auto">
                        <div className="container">
                            <div className="align-items-center p-3 mt-3 mb-0 text-white-50 bg-secondblue rounded shadow-sm">
                                <div>
                                    <h6 className="mb-0 text-white ">Bank & Credit Card</h6>
                                </div>
                            </div>

                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Balance</th>
                                            <th scope="col">Quick Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            this.state.Accounts.map(item=>(<SingleAccount key={item.accountno} item={item}/>))                                        
                                        }                                        
                                    </tbody>
                                </table>
                            </div>

                            <div className="align-items-center p-3 mt-3 mb-0 text-white-50 bg-secondblue rounded shadow-sm">
                                <div>
                                    <h6 className="mb-0 text-white ">Investments</h6>
                                </div>
                            </div>
                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Quick Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle col-8"><Link to="/"><u>TFSA</u></Link></td>
                                            <td className="align-middle text-right">$23,456.00</td>
                                            <td className="align-middle">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Build GIC</u></Link></td>
                                            <td className="align-middle text-right">$67,452.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>NONRegisted GIC</u></Link></td>
                                            <td className="align-middle text-right">$2,789.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="align-items-center p-3 mt-2 mb-0 text-white-50 bg-secondblue rounded shadow-sm">
                                <div>
                                    <h6 className="mb-0 text-white ">Mortgage & Loans</h6>
                                </div>
                            </div>
                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Quick Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle col-8"><Link to="/"><u>Mortgage</u></Link></td>
                                            <td className="align-middle text-right">$589,000.00</td>
                                            <td className="align-middle">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Student Loan</u></Link></td>
                                            <td className="align-middle text-right">$8,123.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="my-3 p-0 bg-white rounded shadow-sm col-3">
                            <div className="quick-pay-div bg-secondblue rounded p-3">
                                <p>Quick Payments & Transfers</p>
                                <form className="quick-pay-form">
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>From:</span>
                                        </div>
                                        <select className="form-element" id="exampleFormControlSelect1">
                                            {
                                                this.state.Accounts.map(item=>{
                                                    return <option>{item.accounttype}  ****-********{item.accountno.slice(12,)}</option>
                                                })
                                            }                                      
                                            
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>To:</span>
                                        </div>
                                        <select className="form-element" id="exampleFormControlSelect1">
                                            <option>Select...</option>
                                            <option>2345-67890012 7346</option>
                                            <option>8885-67891230 4005</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>$</span>
                                        </div>
                                        <input id="transferamount" type="text" className="form-element" onChange={this.handleChange} placeholder="0.00"/>
                                        <select className="form-element ml-2" id="exampleFormControlSelect1">
                                            <option>CAD</option>
                                            <option>USD</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2 mt-2 justify-content-end">
                                    <button onClick = {this.handletransfer} type="button" className="btn-sm btn-warning">Submit</button>                                    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default AccountSummary;