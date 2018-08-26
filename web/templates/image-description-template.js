module.exports = (mainImage) => (`
    <div>
        <h3 class="product__title">
           Featured Item: <strong>${mainImage.title}</strong>
        </h3>
        <p class="product__description">
            ${mainImage.description}
        </p>
        <p class="product__stats">
            Height: ${mainImage.width} Width: ${mainImage.height}
        </p>
    </div>
`);