import react from "react";


export default function Content (props) {
    let count = 1; 
    const doctorAppointments = [];
    props.currentAppointments.forEach((appointment) => {
        doctorAppointments.push(
        <tr>
            <td>{count}</td>
            <td>{appointment.patientName}</td>
            <td>{appointment.time}</td>
            <td>{appointment.kind}</td>
        </tr>
        );
        
        count++; 
    });
    return (
    <div>

        <h1>Dr. {props.doctor.firstname} {props.doctor.lastname}</h1>
        <h4>{props.doctor.email}</h4>
        <table>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
        </tr>
        {doctorAppointments}
        </table>
    </div>
    )
}