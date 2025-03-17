export default function Input(props) {


    return (
        <input
            type="number"
            id="passwordSize"
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordaSize(+ev.target.value)}
        />
    )
}