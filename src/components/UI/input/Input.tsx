interface InputProps {
    type: string;
    placeholder: string;
    name?: string;
    id?: string;
}
const Input = ({type, placeholder, name, id}: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} name={name} id={id}/>
    );
};
export default Input