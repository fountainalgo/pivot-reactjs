var _ = { without: require('lodash/without') }
import React from 'react';

class ColumnControl extends React.Component {
    render(){
        return (
            <div className='reactPivot-columnControl'>
              { !this.props.hiddenColumns.length ? '' :
                <select value={''} onChange={this.showColumn}>
                  <option value={''}>Hidden Columns</option>
                  { this.props.hiddenColumns.map(function(column) {
                    return <option key={column}>{column}</option>
                  })}
                </select>
              }
            </div>
          )        
    }

    showColumn(evt){
        var col = evt.target.value
        var hidden = _.without(this.props.hiddenColumns, col)
        this.props.onChange(hidden);        
    }

}

ColumnControl.defaultProps = {
    hiddenColumns: [],
    onChange: function () {}    
}

export default ColumnControl;