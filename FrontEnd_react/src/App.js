import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import CompanyList from './components/CompanyList'
import Form from './components/Form'

function App() {

    const [employee, setEmployee] = useState({
        name: '',
        salary: 0
    })

    const [employees, setEmployees] = useState([])

    const [listUpdated, setlistUpdated] = useState(false)

    useEffect(() => {
        const getEmployees = () => {
            fetch('http://localhost:5000/api/employees')
            .then(res => res.json())
            .then(res => setEmployees(res))
        }
        getEmployees()
        setlistUpdated(false)
    }, [listUpdated])



    return(
        <Fragment>
            <Navbar brand={'Company App'}/>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h2 style={{textAlign:'center'}}>Company list</h2>
                        <CompanyList employee={employee} setEmployee={setEmployee} employees={employees} setlistUpdated={setlistUpdated}/>
                    </div>
                    <div className='col-5'>
                    <h2 style={{textAlign:'center'}}>Company form</h2>
                    <Form employee={employee} setEmployee={setEmployee}/>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default App;
