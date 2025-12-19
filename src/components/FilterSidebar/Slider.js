import styles from "./Slider.module.scss";

function updateProgress(minInput, maxInput) {
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
    const maxOffset = ((maxValue - minInput.min) / range) * 100 - 5;

    progress.style.width = width + '%';
    progress.style.left = minOffset + '%';

    minPrice.style.left = minOffset + '%';
    maxPrice.style.left = maxOffset + '%';

    minPrice.innerHTML = '$' + minValue;
    maxPrice.innerHTML = '$' + maxValue;

    console.log()

}

function handleMinInputEvent(e, minInput, maxInput) {

    if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
        maxInput.value = minInput.value;
    }
    updateProgress(minInput, maxInput);

}

function handleMaxInputEvent(e, minInput, maxInput) {

    if (parseInt(maxInput.value) <= parseInt(minInput.value)) {
        minInput.value = maxInput.value;
    }

    updateProgress(minInput, maxInput);

}



const Slider = () => {
    const slider = document.createElement('div');
    slider.classList.add(styles.slider);

    slider.innerHTML = `
    <div class=${styles.sliderPriceRange}>
        <input class="min-input" type="range" min="0" max="1000" value="50">
        <input class="max-input" type="range" min="0" max="1000" value="750">
        <div class=${styles.sliderPriceRangeProgress}>
            <div class=${styles.sliderPriceRangeProgressInner}></div>
        </div>
    </div>
    <div class=${styles.sliderValuesWrapper}>
         <span class="min-price"></span>
        <span class="max-price"></span>
    </div>
    `

    const minInput = slider.querySelector('.min-input');
    const maxInput = slider.querySelector('.max-input');
    minInput.addEventListener('input', (e) => handleMinInputEvent(e, minInput, maxInput));
    maxInput.addEventListener('input', (e) => handleMaxInputEvent(e, minInput, maxInput));

    return slider;
}

export default Slider;