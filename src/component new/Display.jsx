import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';

const Display = () => {
    const [myData, setMyData] = useState([]);
    const loadData = () => {
        let url = "http://localhost:3000/student";
        axios.get(url).then((res) => {
            console.log(res.data)
            setMyData(res.data);
        })
    }
    useEffect(() => {
        loadData()
        console.log(ans);
    }, [])
    const ans = myData.map((key) => {
        return(
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        )
    })
    return (
        <>
            <h1>This is display page</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Rollno</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        </>
    )
}
export default Display