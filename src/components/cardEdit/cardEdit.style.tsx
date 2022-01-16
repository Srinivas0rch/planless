import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card : {
        backgroundColor: 'white',
        borderRadius: '3px',
        boxShadow: '0 1px 0 rgba(9,30,66,.25)',
        padding: '10px',
        margin: '10px 0px',
        border : '2px #00ffff solid'
      },
      close :{
        cursor: 'pointer',
        position: 'relative',
        top: '-50px',
        height: '20px',
      },
      formSpace : {

          "& .MuiTextField-root":{
                margin : "10px 0px"
          }
      },
      actions : {
        display: 'flex',
        justifyContent: 'space-between',
      },
      button : {
        backgroundColor: '#fff',
        padding : 5,
        margin : '5px 0px',
        minWidth: 100
    },

}));

export default useStyles;
