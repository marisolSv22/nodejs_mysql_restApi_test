import React from "react";

const Form = ({employee, setEmployee}) => {

    const handleChange = e => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }

    let{name, salary} = employee

    const handleSumit = () => {
        salary = parseInt(salary, 5)
        //validación de los datos
        if (name === '' || salary <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        }
        fetch('http://localhost:5000/api/employees', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        //reiniciando state del empleado
        setEmployee({
            name: '',
            salary: 0
        })
    }

    return(
        <form onSubmit={handleSumit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input value={name} onChange={handleChange} className="form-control" type="text" id="name" name="name"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="salary">Salary</label>
                <input value={salary} onChange={handleChange} className="form-control" type="number" id="salary" name="salary"/>
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;