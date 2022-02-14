const express = require("express");
const cors = require('cors');

const app = express();
const PORT = 3005;

app.use(cors());

const physicians = [
    { firstname : "Julius", lastname : "Hibbert", email : "hibbert@notablehealth.com", id : 1},
    { firstname : "Nick", lastname : "Rivera", email : "rivera@notablehealth.com",  id : 2},
    { firstname : "Algernop", lastname : "Krieger", email : "krieger@notablehealth.com", id : 3}
];

const schedule = [
    { 
        doctor : "Julius Hibbert",
        id : 1, 
        appointments : [
            {
                patientName : "Sterling Archer",
                time : "8:00 AM",
                kind : "New Patient"

            },
            {
                patientName : "Cyril Frills",
                time : "8:30 AM",
                kind : "Follow Up"

            },
            {
                patientName : "Ray Gillete",
                time : "9:00 AM",
                kind : "New Patient"

            },
            {
                patientName : "Lane Kane",
                time : "9:30 AM",
                kind : "Follow Up"

            },
            {
                patientName : "Pam Truth",
                time : "10:00 AM",
                kind : "New Patient"

            }
        ]
    },
    { 
        doctor : "Nick Rivera",
        id : 2,
        appointments : [
            {
                patientName : "Ray John",
                time : "8:00 AM",
                kind : "New Patient"

            },
            {
                patientName : "Tim Wheeler",
                time : "8:30 AM",
                kind : "Follow Up"

            },
            {
                patientName : "Raplh Johnson",
                time : "9:00 AM",
                kind : "New Patient"

            },
            {
                patientName : "Lane Kane",
                time : "9:30 AM",
                kind : "Follow Up"

            },
            {
                patientName : "Pam Truth",
                time : "10:00 AM",
                kind : "New Patient"

            }
        ]
    },
    { 
        doctor : "Krieger Algernop",
        id : 3,
        appointments : [
            {
                patientName : "Bryant Kane",
                time : "8:00 AM",
                kind : "New Patient"

            },
            {
                patientName : "Ryan Felt",
                time : "8:30 AM",
                kind : "Follow Up"

            },
            {
                patientName : "Myles Grant",
                time : "9:00 AM",
                kind : "New Patient"

            },
            {
                patientName : "Lisa Wear",
                time : "9:30 AM",
                kind : "Follow Up"

            },
            {
                patientName : "Halle Moon",
                time : "10:00 AM",
                kind : "New Patient"

            }
        ]
    }
];

app.get("/getPhysicians", (req, res) => {
    res.status(200).send(physicians);
});


app.get("/getAppointments/:doctorId", (req, res) => {
    const { doctorId } = req.params;
    for (let doctor of schedule){
        if (doctor.id == doctorId){
         res.locals.appointments = doctor.appointments;
         break;
        }
    }

    res.status(200).send(res.locals.appointments);

});

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
});
