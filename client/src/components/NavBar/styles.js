import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  AppBar: {
    position: "fixed",
    backdropFilter: "blur(4px)",                //won't work without setting a (transparency) in rgba
  },
  Toolbar: {
    display: "flex",
    width: "100vw",
    height: "10vh"
  },
  NavMenuItem: {
    paddingLeft: "45px",
    paddingRight: "45px",
    width: "100%"
  },
  NavMenu: {
    justifyContent: "center",
    height: "100%"
  }
}));