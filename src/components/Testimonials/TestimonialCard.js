import { addStarToCard } from "../Star/Star";
import styles from "./TestimonialCard.module.scss";


const TestimonialCard = ({ fullName, role, avatar, testimonial, rate }) => {
    const card = document.createElement('div');
    card.classList.add(styles.card);

    card.innerHTML = `
        <div class=${styles.cardContent}>
            <img src="/test-icon.svg" alt="test-icon"/>
            <p class=${styles.cardText}>${testimonial}</p>
            <div class=${styles.cardFooter}>
                <div class=${styles.cardPerson}>
                    <img src=${avatar} alt="person" />
                    <div class=${styles.cardPersonInfo}>
                        <h3 class=${styles.cardPersonName}>${fullName}</h3>
                        <span class=${styles.cardPersonDetail}>${role}</span>
                    </div>
                </div>
                <div class=${styles.cardStarWrapper}>${addStarToCard(rate)}</div>
            </div> 
        </div>
    `
    
    return card;
}

export default TestimonialCard;