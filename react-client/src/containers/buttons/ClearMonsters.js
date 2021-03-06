import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {clearMonstersField, clearOrderField} from '../../actions/index';

class ClearMonsters extends Component {
  render () {
    if (this.props.monsters.length === 0) {
      return null;
    }

  	return(
  		<div>
        <Button
        onClick={() => {
          clearMonstersField();
          clearOrderField();
        }} 
        className='clearMonsters' 
        content='Clear monsters'/>
      </div> 
  		)
  }
}

function mapStateToProps (state) {
  return {
    monsters: state.monsters
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ clearMonstersField, clearOrderField }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearMonsters);