import './Button.css'
function IndexButton({text,onClick}){
    return (
        <>
            <button className="my-button" onClick={onClick}>{text}</button>
        </>
    );
}

export default IndexButton;