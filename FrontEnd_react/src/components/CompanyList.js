import React from "react";

const CompanyList = ({employee, setEmployee, employees, setlistUpdated}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:5000/api/employees/' + id, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        setlistUpdated(true)
    }

    let{name, salary} = employee
    const handleUpdate = id => {
        salary = parseInt(salary, 5)
        //validación de los datos
        if (name === '' || salary <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        }
        fetch('http://localhost:5000/api/employees/' + id, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        //reiniciando state del empleado
        setEmployee({
            name: '',
            salary: 0
        })

        setlistUpdated(true)
    
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.salary}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(employee.id)} type="" className="btn btn-dark">Actualizar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(employee.id)} type="" className="btn btn-danger">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CompanyList;