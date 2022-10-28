import './PageSocial.scss';

export default function PageSocial(props){
    return (
        <main className="PageSocial">
            <div className="sectionSocial">
                <h2>ÉVÉNEMENTS</h2>
                <div className="contenuEvents">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur magnam illo quo reprehenderit quaerat aut ipsam ab quos assumenda eligendi unde perspiciatis, odio ea minus sunt molestiae, culpa iusto error deleniti deserunt voluptatem autem voluptas. Necessitatibus dolorem ullam minima quaerat, excepturi ad facere quae nesciunt sequi error, quos a dolore.</p>                    
                    <div className="sideEvents">
                        <div className="event1">
                            <img src="" alt="" />
                            <p>Sorties</p>
                        </div>
                        <div className="event2">
                        <img src="" alt="" />
                            <p>GameJams</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sectionSocial">
                <h2>COMMUNAUTÉ</h2>
                <div className="contenuCommunaute">
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga adipisci expedita eveniet libero, beatae accusantium, eaque quidem excepturi voluptates id suscipit, ullam sit veritatis architecto!</p>
                        </div>
                        <div className="carteTitre">
                            <p>Comité</p>
                        </div>
                    </div>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga adipisci expedita eveniet libero, beatae accusantium, eaque quidem excepturi voluptates id suscipit, ullam sit veritatis architecto!</p>
                        </div>
                        <div className="carteTitre">
                            <p>Centre d'aide</p>
                        </div>
                    </div>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga adipisci expedita eveniet libero, beatae accusantium, eaque quidem excepturi voluptates id suscipit, ullam sit veritatis architecto!</p>
                        </div>
                        <div className="carteTitre">
                            <p>Discord</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sectionSocial">
                <h2>MAISONNEUVE</h2>
                <div className="contenuMaisonneuve">
                    <div className="svgPlaceholder">svg</div>
                    <div className="sideContent">
                        <div className="content1">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nam dolor obcaecati porro. Voluptatem odio exercitationem eum atque maiores nihil.</p>
                            <button>Suite</button>
                        </div>
                        <div className="content2">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nam dolor obcaecati porro. Voluptatem odio exercitationem eum atque maiores nihil.</p>
                            <button>Suite</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}