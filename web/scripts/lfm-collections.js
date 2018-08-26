import {collections} from '../cms';
import mainImageTemplate from '../templates/main-image-template';
import imageTemplate from '../templates/image-template';
import imageDescriptionTemplate from '../templates/image-description-template';
// import '../libs/masonry'
// import Isotope from 'isotope-layout';

$(document).ready(() => {
        for (let i = 0; i < collections.length; i++) {

            var  func = (i)=>{
                const {mainImage, images, grid} = collections[i];
                const $el = $(`.js-collection-${i + 1}`);
                $el.find(".js-collection-main-image")
                    .html(mainImageTemplate(mainImage));

                const $grid = $el.find(".js-collection-grid");

                for (let j = 0; j < images.length; j++) {
                    const image = images[j];
                    $grid[0].appendChild($(imageTemplate(image))[0]);
                }


                $el.find(".js-collection-description")
                    .html(imageDescriptionTemplate(mainImage));


                var resize = ()=>{
                    $grid.height($el.find(".js-collection-main-image").height());
                };


                setInterval(()=>{
                    resize()
                },200)
            }

            func(i);

        }
    }
);
