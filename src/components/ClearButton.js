
const ClearButton = props => (
    <div id={props.giveId(props.children)} className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );

  export default ClearButton