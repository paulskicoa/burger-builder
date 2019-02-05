import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' }
];

const BuildControls = (props) => (
  <div className={styles.BuildControls}>
    {controls.map(control => 
    <BuildControl 
      key={control.label} 
      label={control.label} 
      added={() => props.ingredientAdded(control.type)}
    />)}
  </div>
);

export default BuildControls;