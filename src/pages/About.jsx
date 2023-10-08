/* eslint-disable react/no-unescaped-entities */
import { Paper,Typography } from "@mui/material";
const About = () =>{
    const paperStyle = {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        padding: '20px',
      };
    return(
        <>
            <Paper style={paperStyle}>
                <Typography
                    sx={{ 
                        flex: '1 1 100%',
                        fontWeight: 'bold',
                        color: '#313D5A'
                    }}
                    variant="h5"
                    component="span"
                    >
                    Drone Traffic Monitor
                </Typography>
                <br /><br />
                <div style={{textAlign : 'left'}}>
                    <p>
                        This project was undertaken to fulfil the Internship-Capstone requirement, as an integral component of 
                        the computer science degree program at Al Akhawayn University in Ifrane. Combining both a research aspect and 
                        hands-on experience typical of a conventional internship, this project offered a unique opportunity for 
                        simultaneous learning and exposure to a professional setting.
                    </p>
                    <p>
                    My project involves the development of an Android application leveraging DJI's Mobile Software Development Kit (MSDK) to interface with the Matrice 300RTK drone and its integrated H20T camera. The application utilizes the drone's smart tracking capabilities to detect vehicles and calculate their speeds by analyzing positional changes over distinct time intervals. Users can set a predefined speed limit, and if a vehicle exceeds this limit, the application triggers the drone to capture critical data including time, date, and GPS coordinates. This data is then securely transmitted to a remote server, where it is stored and presented on an online interface. The integration of real-time drone data collection, speed detection, and seamless server communication offers an innovative solution for monitoring vehicle speeds and enhancing traffic safety.

                    </p>
                </div>
            </Paper>
        </>
    )
}
export default About;