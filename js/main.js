import '../css/bootstrap.css';
import '../css/styles.scss';

import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap'

((w, $, u) => {
    $(function (){
        $('#carousel').on('click', '.goto', function(e){
            e.preventDefault();
            e.stopPropagation();

            const id = $(this).attr('href'),
                steps = 10,
                marginTop = +$('.navbar:first').height(),
                top = +$(id)[0].getBoundingClientRect().top,
                gotoLength = (top - marginTop + window.scrollY),
                dx = gotoLength / steps;

            let x = window.scrollY, i = 0;
            const $r = setInterval(() => {
                i++;
                if (i >= steps || (x + dx) > gotoLength) {
                    clearInterval($r);
                    window.scrollTo(0, gotoLength);
                    return;
                }
                x += dx;
                window.scrollTo(0, x);
            }, 22);
        });

        const resize = () => {
            $('.img-zoomable').each(function(){
                $(this).height($(this).width());
            });
        };
        $(w).on('resize', resize).trigger('resize');
    });

})(window, jQuery);
