function ProfilePicture({ pictureURL, fallbackText = "Profile Picture"}){
    return(
        <img src={pictureURL} alt={fallbackText} className="profile-image"/>
    )
}

export default ProfilePicture;