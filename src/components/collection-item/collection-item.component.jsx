import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// const tempClick = (subItem) => {
//     console.log('button clicked ', subItem)
// }
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const CollectionItem = ({id, name, price, imageUrl, addItem, select, toppings}) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [sideNotes, setSideNotes] = React.useState('');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setSideNotes('');
      setOpen(false);
      
    };
    const handleSave = () => {
        setSideNotes(sideNotes);
        setOpen(false);
        console.log(sideNotes)
    };

    return (
        <div className="collection-item">
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
    
                />
            
                   
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Toppings</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <div className="toppings">
                            {
                                toppings.map((topping,id) => (
                                
                                        <div key={id} style={{margin:'3px 3px'}}>{topping}</div>
                                        
                                ))
                            }
                        </div>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                        
                       
                  
                
                <div className='collection-footer'>
                    <span className='name'  style={{fontWeight:'bold'}}> { name } 
                    <button variant="outlined" color="primary" onClick={handleClickOpen}>
                       +Extra
                    </button>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                        <DialogTitle id="alert-dialog-title">{"Customise your favorite Pizza toppings"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <div>
                                    Side Notes: <br/>
                                    <textarea rows="4" cols="50"  type="text" onChange={ e => setSideNotes(e.target.value)} value={sideNotes} />
                            </div>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            clear
                          </Button>
                          <Button onClick={() => handleSave()} color="primary" autoFocus>
                            Save
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </span>
                    {/* <span className='name'  >
                        {
                            toppings.map(topping => (
                               <p>{topping}</p> 
                            ))
                        }
                    </span> */}
                    {select.map((subItem, id) => {
                        let _subItem = subItem;
                        let _sideNotes = sideNotes;
                        _subItem.toppings = _sideNotes;

                        return (
                            <div style={{padding:'0px 3px'}}>
                                <div>
                                    <span className='name' > { subItem.size } </span>
                                </div>
                                <div>
                                <span className='price'> ${ subItem.price } </span>
        
                                </div>
                                <div className='add_button'>
                                        <button type="button" onClick={() => addItem(_subItem)}>ADD</button>
                                </div>
                                
                             </div>
                         )
                        } 
                    )
                       
                    
                    
                    }
    
                 </div>
                 {/* <CustomButton inverted >Add to cart</CustomButton> */}
        </div>
    )

} 


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

