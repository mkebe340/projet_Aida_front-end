import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/APropos.css'
class APropos extends React.Component {

    render() {
        return (

            <div className='propos'>

                <div className='container'>

                    <div className='row mt-5'>
                       
                        <div className="propos_text col-8 col-xs-12 ">
                            <h2>A propos d'INPIRENEWS?</h2>
                            <p>
                                "Allumez la radio ou la télé. Ouvrez un magazine d’actualité. De quoi parle-t-on aujourd’hui ?
                                Comme hier, et comme le veut la règle d’or du journalisme, on vous racontera d’abord les
                                malheurs du monde : des catastrophes naturelles aux faits divers les plus sordides,
                                 en passant par les polémiques aussi inutiles que blessantes.<br></br>
                                 Pour reprendre les mots d’Albert Londres, figure totémique de la presse du
                                 XXème siècle, « un journaliste n’est pas un enfant de chœur (…)
                                 Notre métier n’est pas de faire plaisir, ni de faire du tort, il est de porter
                                 la plume dans la plaie. » De là cette tendance, rarement démentie aujourd’hui,
                                 de ne parler que « des trains qui arrivent en retard ». En clair : de ce qui
                                 ne va pas. Et après ? Qu’est-ce qu’on en fait ? Regarder le malheur des autres
                                 n’a jamais fait avancer personne. Et si on trouve un moyen efficace de faire
                                 arriver ce fameux train à l’heure, à quel moment on en parle ? Qu’est-ce qu’on fait
                                  de cette solution ? Ne mérite-t-elle pas d’être portée à l’attention du public ?
                            </p>
                            <p>
                                Cette réflexion, je me la suis faite au cours de mes quelques vingt ans de présentation de JT
                                et autres magazines d’information. Et davantage encore ces deux dernières années
                                passées à sillonner la France à la rencontre de celles et ceux qui oeuvrent à changer
                                leur quotidien, et ainsi celui des autres. A leur échelle, ils changent le monde. Ils
                                le réinventent, et parfois même le réenchantent. Et pourtant, ils font rarement la
                                Une de l’actualité…
                            </p>

                                De la rencontre de ces hommes et ces femmes engagés, à titre individuel, dans leur
                                quartier, au sein d’une association ou en entreprise, est née cette volonté de les
                                mettre en lumière.  Nous avons tant à apprendre de ces personnes inspirantes, de ces
                                initiatives qui nous donnent à voir un avenir meilleur que la désespérance prônée par
                                des médias déclinistes. Faut-il vraiment s’étonner que la presse perde en crédibilité
                                chaque année ? Que la profession de journaliste soit aujourd’hui si décriée ? Que la
                                jeune génération, X, Y, ou Z, cherche des sources d’information alternatives aux médias
                                traditionnels ?
                               <p>
                                Loin de nous l’idée d’occulter les problématiques du monde comme il va. Le pays des
                                Bisounours n’est pas plus notre modèle que Gotham City. Mais chaque solution doit
                                être traitée de la même manière que le problème lui-même. Ni plus, ni moins.
                                </p>
                            <p>
                                Cette plateforme que nous vous proposons aujourd’hui, nous l’avons pensée comme une
                                inspiration pour toutes celles et ceux qui veulent agir plutôt que subir. Certes,
                                les défis de notre époque sont innombrables. Mais des solutions existent, et elles
                                ne sont pas moins nombreuses. Aujourd’hui source de souffrance, voire d’impuissance,
                                le journalisme peut et doit être source d’espérance. Si l’homme est capable du pire,
                                nous voulons - aussi- révéler le meilleur. Ce n’est pas une utopie. C’est une réaction
                                citoyenne. Et elle est à portée de clic."
                            </p>
                            
                        </div>
                        <div className="propos_images col-4 ">
                            <div>
                                <img src="./Apropos_img/Apropos_3.jpg" className="col-12 " alt="..." />
                            </div>

                            <div>
                                <img src="./Apropos_img/Apropos_4.jpg" className="col-12 mt-5 mb-5" alt="..." />
                            </div>
                            <div>
                                <img src="./Apropos_img/Apropos_5.jpg" className="col-12 " alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
};



export default APropos;