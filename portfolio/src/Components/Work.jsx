export function Work() {
    return (
        <header>
            <section id="work">
                <h2>Projets</h2>
                <div className="work-grid">

                    <article className="work-item">
                        <img
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
                            alt="Application de gestion de tâches" className="work-image"/>
                        <div className="work-info">
                            <h3>Application de gestion de tâches</h3>
                            <p>Développement d'une application mobile multiplateforme (iOS/Android) permettant aux
                                utilisateurs de créer, organiser et suivre leurs tâches quotidiennes. L'application
                                inclut des notifications push, une interface utilisateur fluide et un système de
                                synchronisation avec le cloud pour un accès partout.</p>
                            <a href="#">Lien vers projet</a>
                        </div>
                    </article>

                    <div className="work-item">
                        <img
                            src="https://help.apple.com/assets/678AF3BDAED93ED9D1042F84/678AF3C89EC3C835220A70FE/en_US/e18f7ced108ea5db7034d3314925df2c.png"
                            alt="Application de suivi de fitness" className="work-image"/>
                        <div className="work-info">
                            <h3>Application de suivi de fitness</h3>
                            <p>Conception d'une application dédiée au suivi des activités physiques et des objectifs de
                                santé. Intégration de capteurs de smartphone pour mesurer les performances, suivi des
                                progrès à travers des graphiques dynamiques et possibilité de partager les résultats
                                avec des amis via les réseaux sociaux.</p>
                            <a href="#">Lien vers projet</a>
                        </div>
                    </div>

                    <div className="work-item">
                        <img
                            src="https://cdn.prod.website-files.com/63894f0e251e567f6e443bfa/673664ad7d4807debd0fca04_652033a42a44bf5bf252a0cd_20231006T0418-8f475758-44b3-4a29-853f-598ddf3416ce.png"
                            alt="Application de e-commerce" className="work-image"/>
                        <div className="work-info">
                            <h3>Application de e-commerce</h3>
                            <p>Création d'une application mobile de e-commerce offrant une expérience d'achat
                                personnalisée avec recommandations basées sur les préférences utilisateur. Intégration
                                d'un système de paiement sécurisé et d'un suivi en temps réel des commandes, avec une
                                interface intuitive et optimisée pour la vente mobile.</p>
                            <a href="#">Lien vers projet</a>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}