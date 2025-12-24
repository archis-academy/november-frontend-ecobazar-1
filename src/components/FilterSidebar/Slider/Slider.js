import styles from "./Slider.module.scss";

const elements = {};

function updateProgress(minInput, maxInput, progress, minPriceValue, maxPriceValue) {
    const minValue = parseInt(minInput.value);
    const maxValue = parseInt(maxInput.value);

    // range
    const range = maxInput.max - minInput.min;
    // value of progress
    const valueRange = maxValue - minValue;
    // width
    const width = (valueRange / range) * 100;
    // offset
    const minOffset = ((minValue - minInput.min) / range) * 100;

    progress.style.width = width + '%';
    progress.style.left = minOffset + '%';

    minPriceValue.textContent = `$${minValue}`;
    maxPriceValue.textContent = ` - $${maxValue}`;




}

function handleMinInputEvent(e, minInput, maxInput, progress, minPriceValue, maxPriceValue) {

    if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
        maxInput.value = minInput.value;
    }
    updateProgress(minInput, maxInput, progress, minPriceValue, maxPriceValue);

}

function handleMaxInputEvent(e, minInput, maxInput, progress, minPriceValue, maxPriceValue) {

    if (parseInt(maxInput.value) <= parseInt(minInput.value)) {
        minInput.value = maxInput.value;
    }

    updateProgress(minInput, maxInput, progress, minPriceValue, maxPriceValue);

}


const sliderChild = () => {
    const slider = document.createElement('div');
    slider.classList.add(styles.slider);

    slider.innerHTML = `
        <div class=${styles.sliderInner}>
            <div class=${styles.sliderPriceRange}>
                <input class=${styles.sliderPriceRangeInput} id="minInput" type="range" min="0" max="1000" value="50" />
                <input class=${styles.sliderPriceRangeInput} id="maxInput" type="range" min="0" max="1000" value="750" />  
                <div class=${styles.sliderPriceRangeProgress}>
                    <div class=${styles.sliderPriceRangeProgressInner}></div>
                </div>  
            </div>
            <div class=${styles.sliderLabels}>
                <span class=${styles.sliderLabel}>Price: </span>
                <p>
                    <span class=${styles.sliderLabelValue} id="minPriceValue"></span> 
                    <span class=${styles.sliderLabelValue} id="maxPriceValue"></span>
                </p>
            </div>
        </div>
    
    `

    const minInput = slider.querySelector(`#minInput`);
    const maxInput = slider.querySelector(`#maxInput`);
    const progress = slider.querySelector(`.${styles.sliderPriceRangeProgressInner}`);
    const minPriceValue = slider.querySelector(`#minPriceValue`);
    const maxPriceValue = slider.querySelector(`#maxPriceValue`);

    minInput.addEventListener('input', (e) => handleMinInputEvent(e, minInput, maxInput, progress, minPriceValue, maxPriceValue));
    maxInput.addEventListener('input', (e) => handleMaxInputEvent(e, minInput, maxInput, progress, minPriceValue, maxPriceValue));

    updateProgress(minInput, maxInput, progress, minPriceValue, maxPriceValue);

    return slider;
}

export default sliderChild;
