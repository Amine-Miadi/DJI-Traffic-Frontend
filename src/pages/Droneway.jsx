/* eslint-disable react/no-unescaped-entities */
import { Paper,Typography } from "@mui/material";

const Droneway = () =>{
    const paperStyle = {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        padding: '20px',
    };
    return(
        <>
            <Paper style={paperStyle} >
                <Typography
                    sx={{ 
                        flex: '1 1 100%',
                        fontWeight: 'bold',
                        color: '#313D5A'
                    }}
                    variant="h5"
                    component="span"
                    >
                    DJI | Droneway
                </Typography>
                <br />
                <div style={{textAlign : 'left'}}>
                    <p>
                        Major industries, farms, insurance companies, construction developers, and many others trust us to provide comprehensive insights and tangible data necessary for their operations using our DJI drones. From high-precision aerial photography to topographic and altimetric mapping, to live video inspection of vertical architecture, we possess the technology and expertise to meet your needs, regardless of your industry.
                    </p>
                    <p>
                        <h5>TECHNOLOGIES:</h5>
                        Using advanced unmanned aerial systems, we provide you with the highest-precision data. We specialize in a full range of drone inspection applications across industries benefiting most from aerial observation, photography, and mapping. Our capabilities also include 3D imaging, thermal heat mapping (thermography), LIDAR topography, hyperspectral analysis, and high-resolution 4K video. With this range of services, we can address data collection needs for all projects we undertake, to an unprecedented level.
                    </p>
                    <p>
                        <h5>SERVICES:</h5>
                        We offer a multitude of drone services in every field of activity. All our pilots have advanced drone piloting certifications and have countless hours of drone (RPAS) usage. Safety is our top priority in all our missions. We have certified equipment and can fly in airspace day and night. We can provide our clients with fast execution times for mission planning and be ready to fly on short notice.
                    </p>
                    <p>
                        <h5>TRAINING:</h5>
                        DroneWay also offers its clients professional, specialized, and comprehensive training, ranging from drone piloting training to training on emergency and risk management, to training on drone-related professions (3D Mapping, Photogrammetry, Industrial inspection of power grids, solar panels, wind turbines, and industrial installations, Public safety, Cinema shooting by drone, etc).
                    </p>
                </div>
                
            </Paper>
        </>
    )
}
export default Droneway;