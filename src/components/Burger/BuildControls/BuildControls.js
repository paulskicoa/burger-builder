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
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => 
    <BuildControl 
      key={control.label} 
      label={control.label} 
      added={() => props.ingredientAdded(control.type)}
      removed={() => props.ingredientRemoved(control.type)}
      disabled={props.disabled[control.type]}
    />)}
    <button 
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;