module.exports = (mainImage) => (`
    <div>
        <h3 class="product__title">
           Price: £<strong>${mainImage.title}</strong> each  (inc. Postage & Packing)
        </h3>
        <p class="product__description">
            ${mainImage.description}
        </p>
        <p class="product__stats">
            Size: ${mainImage.width} to ${mainImage.height} (approx.)
        </p>
    </div>
`);