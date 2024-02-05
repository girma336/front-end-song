const generateColors = (numColors) => {
    const colors = [];
    const maxColorValue = 255;

    for (let i = 0; i < numColors; i++) {
        const red = Math.floor(Math.random() * maxColorValue);
        const green = Math.floor(Math.random() * maxColorValue);
        const blue = Math.floor(Math.random() * maxColorValue);
        const alpha = 1; // Set alpha value to 1 for opaque colors
        const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        colors.push(color);
    }

    return colors;
}

export default generateColors;