import { addStarToCard } from "../Star/Star";
import styles from "./TestimonialCard.module.scss";


const TestimonialCard = ({ description, score, entity }) => {

    const { firstName, lastName, image, type } = entity;

    const card = document.createElement('div');
    card.classList.add(styles.card);

    card.innerHTML = `
        <div class=${styles.cardContent}>
            <img src="/test-icon.svg" alt="test-icon"/>
            <p class=${styles.cardText}>${description}</p>
            <div class=${styles.cardFooter}>
                <div class=${styles.cardPerson}>
                    <img src=${image} alt="avatar" />
                    <div class=${styles.cardPersonInfo}>
                        <h3 class=${styles.cardPersonName}>${firstName + ' ' + lastName}</h3>
                        <span class=${styles.cardPersonDetail}>${type}</span>
                    </div>
                </div>
                <div class=${styles.cardStarWrapper}>${addStarToCard(score)}</div>
            </div> 
        </div>
    `

    return card;
}

export default TestimonialCard;