var _ = { compact: require('lodash/compact') }
import React from 'react';
import {partial} from './partial';

class Dimensions extends React.Component {
    constructor(props){
        super(props);
        this.toggleDimension = this.toggleDimension.bind(this);
        this.renderDimension = this.renderDimension.bind(this);
    }
    renderDimension(selectedDimension, i){
        return (
            <select
              value={selectedDimension}
              onChange={partial(this.toggleDimension,i)}
              key={selectedDimension} >
              <option></option>
              {this.props.dimensions.map(function(dimension) {
                return (
                  <option
                    value={dimension.title}
                    key={dimension.title} >
                    {dimension.title}
                  </option>
                )
              })}
            </select>
          )
    }

    toggleDimension(iDimension, evt){

        var dimension = evt.target.value
        var dimensions = this.props.selectedDimensions
    
        var curIdx = dimensions.indexOf(dimension)
        if (curIdx >= 0) dimensions[curIdx] = null
        dimensions[iDimension] = dimension
    
        var updatedDimensions = _.compact(dimensions)
    
        this.props.onChange(updatedDimensions)
    }

    render(){
     
      var self = this
      var selectedDimensions = this.props.selectedDimensions
      var nSelected = selectedDimensions.length
  
      return (
        <div className="reactPivot-dimensions">
          {selectedDimensions.map(this.renderDimension)}
  
          <select value={''} onChange={partial(self.toggleDimension, nSelected)}>
            <option value={''}>Sub Dimension...</option>
            {self.props.dimensions.map(function(dimension) {
              return <option key={dimension.title}>{dimension.title}</option>
            })}
          </select>
        </div>
      )        
  }

}

Dimensions.defaultProps = {
    dimensions: [],
    selectedDimensions: [],
    onChange: function () {}   
}

export default Dimensions;