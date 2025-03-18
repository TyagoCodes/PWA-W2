import ProfilePicture from "./ProfilePicture.jsx";

export function Header() {
    return (
        <header>
            <div className="profile">
                <ProfilePicture pictureURL={"https://media.gettyimages.com/id/1407293956/photo/silhouette-of-a-man-interacting-with-virtual-computer-graphics.jpg?s=2048x2048&w=gi&k=20&c=m21VDHEY5cMLtc9XaGq-ITuLyxAnY5gtfU2l5A3gi6M="}  />
                <div>
                    <h1>Jean Dupont</h1>
                    <p>Développeur mobile spécialisé en applications multiplateformes et UX/UI design</p>
                </div>
            </div>
        </header>
    )
}