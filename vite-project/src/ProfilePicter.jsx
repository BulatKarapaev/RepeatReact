
function ProfilePicter() {

    const imageUrl = './src/assets/shreek.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick = {(e) =>  handleClick(e)} src = {imageUrl}>
        
    </img>);

}

export default ProfilePicter