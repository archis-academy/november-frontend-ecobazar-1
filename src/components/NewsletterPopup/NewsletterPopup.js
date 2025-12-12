import styles from './NewsletterPopup.module.scss';

const showPopup = (container) => {
    const hidePopup = localStorage.getItem('hideNewsletterPopup');
    if (hidePopup === 'true') return;

    setTimeout(() => {
        container.classList.add(styles.showPopup);
    }, 5000); // Show popup after 5 seconds
};

const handleClose = (event) => {
    const container = event.target.closest(`#newsletterPopup`);
    container.classList.remove(styles.showPopup);
}

const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    isChecked ? localStorage.setItem('hideNewsletterPopup', 'true') : localStorage.removeItem('hideNewsletterPopup');
}


const NewsletterPopup = () => {

    const container = document.createElement('section');
    container.setAttribute('id', 'newsletterPopup');
    container.classList.add(styles.newsletter);

    container.innerHTML = `
        <div class="${styles.newsletterPopup}">
            <div class="${styles.newsletterImage}">
                <img src="/images/newsletter-image.png" alt="Newsletter-image" />
            </div>
            <div class="${styles.newsletterText}">
                <button class="${styles.newsletterCloseBtn}"><img src="/images/close-button-vector.svg" alt="close-button"></img></button>
                <h2 class="${styles.newsletterTitle}">Subscribe to our Newsletter</h2>
                <p class="${styles.newsletterDescription}">Subscribe to our newlletter and Save your <span class="${styles.newsletterMoneyText}">20% money</span> with discount code today.</p> 
                <form class="${styles.newsletterForm}" action="#">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
                <div class="${styles.newsletterCheckbox}">
                    <input type="checkbox" id="dontShowAgain" />
                    <label for="dontShowAgain">Do not show this window</label>
                </div>
            </div>
        </div>
    `;

    const closeBtn = container.querySelector(`.${styles.newsletterCloseBtn}`);
    const dontShowAgainCheckbox = container.querySelector('#dontShowAgain');
    closeBtn.addEventListener('click', handleClose);
    dontShowAgainCheckbox.addEventListener('change', handleCheckboxChange);
    showPopup(container);

    return container;

};



export default NewsletterPopup;