import { Box,TextField, Typography,FormControl, NativeSelect, InputLabel,Button,Alert} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import authService from "../services/auth.service";


const useraccount = authService.getCurrentUser();
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'left'
  },
  item: {
    flex: 1, 
    padding: theme.spacing(2), 
    borderRight: '1px solid #ccc',
    borderLeft: '1px solid #ccc',
    textAlign: 'center',
  },
  
}));



const AccountInfo = () =>{

    const [newUserName,setNewUserName] = useState("");
    const [newEmail,setNewEmail] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [newRole,setNewRole] = useState("User");
    const [error,setError] = useState(<></>)

    const addUser = async () =>{
        const rescode = await authService.signup(newUserName,newPassword,newEmail,newRole);
        switch(rescode) {
            case 200:
                setError(<Alert severity="success">User {newUserName} added successfully!</Alert>)
              break;
            case 422:
                setError(<Alert severity="error">Username {newUserName} already in use!</Alert>)
              break;
            case 423:
                setError(<Alert severity="error">Email {newEmail} already in use!</Alert>)
              break;
            default:
                setTimeout(()=>{
                    setError(<></>)
                },5000)
        }
    }

    const handleTextFieldChange = (event) => {
        const value = event.target.value;
        switch(event.target.id){
            case "newUserName":
                setNewUserName(value)
                break;
            case "newEmail":
                setNewEmail(value)
                break;
            case "newPassword":
                setNewPassword(value)
                break;
            case "newRole":
                setNewRole(value)
                break;
        }
    };

    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('user'));
    const roles = user.roles.map(role => {
        switch(role){
            case "ROLE_USER":
                return "User"
            case "ROLE_ADMIN":
                return "Admin"
        }
    })

    return(
        <>
            <Box
                component="form"    
                className={classes.container}
                noValidate
                autoComplete="off"
                >
                

                
            <div className={classes.item}>
                <Typography
                    sx={{ 
                        flex: '1 1 100%',
                        fontWeight: 'bold',
                        color: '#313D5A'
                    }}
                    variant="h5"
                    component="span"
                    >
                    Account Info
                </Typography>
                <br /><br />
                <TextField
                disabled
                id="username"
                label="User Name"
                defaultValue={user.username}
                variant="filled"
                />
                <br />
                <TextField
                disabled
                id="email"
                label="Email"
                defaultValue={user.email ? user.email : "N/A"}
                variant="filled"
                />
                <br />
                <TextField
                disabled
                id="role"
                label="Role"
                defaultValue={roles}
                variant="filled"
                />
                <br />
            </div>
            <div className={classes.verticleLine}></div>
            {!useraccount.roles.includes("ROLE_ADMIN") ? <></> :
            <div className={classes.item} >
                <Typography
                    sx={{ 
                        flex: '1 1 100%',
                        fontWeight: 'bold',
                        color: '#313D5A'
                    }}
                    variant="h5"
                    component="span"
                    >
                    Create Account
                </Typography>
                <br /><br />
                <TextField
                id="newUserName"
                label="User Name"
                value={newUserName}
                onChange={handleTextFieldChange}
                required
                variant="filled"
                />
                <br />
                <TextField
                id="newEmail"
                label="Email"
                value={newEmail}
                onChange={handleTextFieldChange}
                required
                variant="filled"
                />
                <br />
                <TextField
                required
                id="newPassword"
                label="Password"
                value={newPassword}
                onChange={handleTextFieldChange}
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
                <br/>
                <Box sx={{ width: 220,display: "inline-block",backgroundColor : "#F0F0F0" }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Role
                        </InputLabel>
                        <NativeSelect
                        value={newRole}
                        onChange={handleTextFieldChange}
                        inputProps={{
                            id: 'newRole',
                        }}
                        >
                        <option value={"User"}>User</option>
                        <option value={"Admin"}>Admin</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
                <br /> <br />
                <Button variant="outlined" onClick={()=>{
                    addUser()
                    }}>Create</Button>
                <br />
                {error}
            </div>
            }
            </Box>
            
        </>
    )
}
export default AccountInfo;