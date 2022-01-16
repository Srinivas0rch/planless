import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'white',
    borderRadius: '3px',
    boxShadow: '0 1px 0 rgba(9,30,66,.25)',
    padding: '10px',
    margin: '10px 0px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  close: {
    cursor: 'pointer',
    position: 'relative',
    top: '-50px',
    height: '20px',
  },
  formSpace: {

    "& .MuiTextField-root": {
      margin: "10px 0px"
    }
  },
  delete: {
    right: '-193px',
    position: 'relative',
    cursor: 'pointer',
    width: '20px',
  }


}));

export default useStyles;
