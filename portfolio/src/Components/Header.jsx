import ProfilePicture from "./ProfilePicture.jsx";

const name = "Santiago C";
const description = "Développeur mobile spécialisé en applications multiplateformes et UX/UI design";
const noPicture = false;

export function Header() {
    if(noPicture){
        return (
            <header>
                <div className="profile">
                    <div>
                        <h1> {name} </h1>
                        <p> {description} </p>
                    </div>
                </div>
            </header>
        )
    }



    return (
        <header>
            <div className="profile">
                <ProfilePicture pictureURL={"https://media.gettyimages.com/id/1407293956/photo/silhouette-of-a-man-interacting-with-virtual-computer-graphics.jpg?s=2048x2048&w=gi&k=20&c=m21VDHEY5cMLtc9XaGq-ITuLyxAnY5gtfU2l5A3gi6M="} fallbackText={'Ma photo'}/>
                <div>
                    <h1> {name} </h1>
                    <p> {description} </p>
                </div>
            </div>
        </header>
    )
}