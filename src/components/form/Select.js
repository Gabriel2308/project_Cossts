import styles from './Select.module.css'

function Select(props){
    return(
        <div className = {styles.form_control}>
            <label htmlFor={props.name}> {props.text}</label>
            <select
                name={props.name} 
                id={props.name} 
                onChange = {props.handleOnChange}
                value={props.value||''}
            > 
                <option>Selecione uma opção</option>
                {props.options.map((option) =>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select