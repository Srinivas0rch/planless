import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header : {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: "auto",
    },
    button : {
        backgroundColor: '#fff',
        border: '1px #000 solid',
        padding : 5,
        margin : '5px 0px'
    },
    headerEdit : {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title : {
        fontWeight: 600,
        paddingBottom: 10
    }
}));

export default useStyles;
