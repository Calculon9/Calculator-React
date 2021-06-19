
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};



const Button = props => (
    <div id={props.giveId(props.children)} className={`button-wrapper ${isOperator(props.children) ? 'number' : "operator"}`} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

export default Button